<template>
  <AcceptDialog
    v-model="modelValueComputed"
    title="为了提高易用性的请求"
    rejectLabel="拒绝"
    acceptLabel="许可"
    heading="プライバシーポリシー"
    :terms="privacyPolicy"
    @reject="handler(false)"
    @accept="handler(true)"
  >
    <p>VOICEVOX是为了更容易使用的软件而开发的。</p>
    <p>
      决定按钮的配置等的方针的时候，各UI的利用率等的信息变得重要。如果可以的话，请协助我们收集软件使用情况的数据。
    </p>
    <p>
      （请放心，我们不收集输入文本数据和语音数据的信息。）
    </p>
  </AcceptDialog>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import AcceptDialog from "./AcceptDialog.vue";
import { useStore } from "@/store";

const props = defineProps<{
  modelValue: boolean;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const store = useStore();

const modelValueComputed = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

const handler = (acceptRetrieveTelemetry: boolean) => {
  void store.actions.SET_ACCEPT_RETRIEVE_TELEMETRY({
    acceptRetrieveTelemetry: acceptRetrieveTelemetry ? "Accepted" : "Refused",
  });

  modelValueComputed.value = false;
};

const privacyPolicy = ref("");
onMounted(async () => {
  privacyPolicy.value = await store.actions.GET_PRIVACY_POLICY_TEXT();
});
</script>
