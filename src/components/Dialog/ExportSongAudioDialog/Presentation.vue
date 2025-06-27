<template>
  <QDialog ref="dialogRef" v-model="modelValue">
    <QCard class="q-py-sm q-px-md dialog-card">
      <QCardSection>
        <div class="text-h5">音频导出</div>
      </QCardSection>

      <QSeparator />

      <QCardSection>
        <BaseCell
          title="输入方法"
          description="您可以选择将所有音轨合并为一个音频文件或为每个音轨导出一个音频文件。"
        >
          <QBtnToggle
            v-model="exportTarget"
            :options="exportTargets"
            padding="xs md"
            unelevated
            color="surface"
            textColor="display"
            toggleColor="primary"
            toggleTextColor="display-on-primary"
            dense
          />
        </BaseCell>
        <BaseCell
          title="单声道"
          description="如果为ON，则将禁用平移并将其合并到一个频道中并导出。"
        >
          <QToggle v-model="isMono" />
        </BaseCell>
        <BaseCell
          title="音频采样率"
          description="您可以更改音频采样率。"
        >
          <QSelect
            v-model="samplingRate"
            dense
            name="samplingRate"
            :options="samplingRateOptions"
            :optionLabel="renderSamplingRateLabel"
          >
          </QSelect>
        </BaseCell>
        <BaseCell
          title="音量限制"
          description="打开时，调整声音，使音量尽量不超过0db。"
        >
          <QToggle v-model="withLimiter" />
        </BaseCell>
        <BaseCell
          title="要应用的轨道参数"
          description="您可以选择在导出时应用哪个参数：平移、音量或静音。"
        >
          <QOptionGroup
            v-model="withTrackParameters"
            type="checkbox"
            inline
            :options="trackParameterOptions"
          />
        </BaseCell>
      </QCardSection>

      <QSeparator />

      <QCardActions>
        <QSpace />
        <QBtn
          unelevated
          align="right"
          label="取消"
          color="toolbar-button"
          textColor="toolbar-button-display"
          class="text-no-wrap text-bold q-mr-sm"
          @click="handleCancel"
        />
        <QBtn
          unelevated
          align="right"
          label="写入"
          color="toolbar-button"
          textColor="toolbar-button-display"
          class="text-no-wrap text-bold q-mr-sm"
          @click="handleExportTrack"
        />
      </QCardActions>
    </QCard>
  </QDialog>
</template>

<script setup lang="ts">
// NOTE: 前回の設定を引き継ぐため、他のダイアログでやっているようなinitializeValuesはやらない
import { ref, computed } from "vue";
import { useDialogPluginComponent } from "quasar";
import BaseCell from "./BaseCell.vue";
import { SongExportSetting, TrackParameters } from "@/store/type";

export type ExportTarget = "master" | "stem";
const { dialogRef, onDialogOK, onDialogCancel } = useDialogPluginComponent();

const modelValue = defineModel<boolean>();
const emit = defineEmits<{
  /** 音声をエクスポートするときに呼ばれる */
  exportAudio: [exportTarget: ExportTarget, setting: SongExportSetting];
}>();

// 書き出し方法選択
const exportTargets = [
  {
    label: "组合（混合）",
    value: "master",
  },
  {
    label: "分轨导出",
    value: "stem",
  },
];
const exportTarget = ref<ExportTarget>("master");

// モノラル
const isMono = ref<boolean>(false);

// サンプルレート
const samplingRate = ref<number>(48000);
const samplingRateOptions = [24000, 44100, 48000, 88200, 96000];
const renderSamplingRateLabel = (rate: number) => `${rate} Hz`;

// リミッター
const withLimiter = ref<boolean>(true);

// パン・ボリューム・ミュート
const withTrackParametersInner = ref<(keyof TrackParameters)[]>([
  "pan",
  "gain",
  "soloAndMute",
]);
const withTrackParameters = computed({
  get: () =>
    isMono.value
      ? withTrackParametersInner.value.filter((v) => v !== "pan")
      : withTrackParametersInner.value,
  set: (value: (keyof TrackParameters)[]) => {
    withTrackParametersInner.value = value;
  },
});
const trackParameterOptions = computed(() => [
  {
    label: "声道",
    value: "pan",
    disable: isMono.value,
  },
  {
    label: "音量",
    value: "gain",
  },
  {
    label: "独奏音乐",
    value: "soloAndMute",
  },
]);

const handleExportTrack = () => {
  onDialogOK();
  emit("exportAudio", exportTarget.value, {
    isMono: isMono.value,
    sampleRate: samplingRate.value,
    withLimiter: withLimiter.value,
    withTrackParameters: {
      pan: withTrackParameters.value.includes("pan"),
      gain: withTrackParameters.value.includes("gain"),
      soloAndMute: withTrackParameters.value.includes("soloAndMute"),
    },
  });
};

// キャンセルボタンクリック時
const handleCancel = () => {
  onDialogCancel();
  modelValue.value = false;
};
</script>

<style scoped lang="scss">
.dialog-card {
  width: 700px;
  max-width: 80vw;
}

.scrollable-area {
  overflow-y: auto;
  max-height: calc(100vh - 100px - 295px);
}
</style>
