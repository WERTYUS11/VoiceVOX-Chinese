<template>
  <AcceptDialog
    v-model="modelValueComputed"
    title="使用条款通知"
    rejectLabel="不同意并退出"
    acceptLabel="同意并开始使用"
    heading="使用条款"
    :terms
    @reject="handler(false)"
    @accept="handler(true)"
  >
    <p>
      为了让更多人安心使用VOICEVOX，请同意使用条款
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

const handler = (acceptTerms: boolean) => {
  void store.actions.SET_ACCEPT_TERMS({
    acceptTerms: acceptTerms ? "Accepted" : "Rejected",
  });
  if (!acceptTerms) {
    void store.actions.CHECK_EDITED_AND_NOT_SAVE({
      closeOrReload: "close",
    });
  }

  modelValueComputed.value = false;
};

const terms = ref("");
onMounted(async () => {
  terms.value = await store.actions.GET_POLICY_TEXT();
});
</script>
