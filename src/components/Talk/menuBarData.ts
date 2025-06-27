import { computed } from "vue";
import { MenuItemData } from "@/components/Menu/type";

import { useStore } from "@/store";
import { useRootMiscSetting } from "@/composables/useRootMiscSetting";

export const useMenuBarData = () => {
  const store = useStore();

  // 「ファイル」メニュー
  const fileSubMenuData = computed<MenuItemData[]>(() => [
    {
      type: "button",
      label: "音频导出",
      onClick: () => {
        void store.actions.SHOW_GENERATE_AND_SAVE_ALL_AUDIO_DIALOG();
      },
      disableWhenUiLocked: true,
    },
    {
      type: "button",
      label: "导出所选声音",
      onClick: () => {
        void store.actions.SHOW_GENERATE_AND_SAVE_SELECTED_AUDIO_DIALOG();
      },
      disableWhenUiLocked: true,
    },
    {
      type: "button",
      label: "输出从最前方到选择部分声音",
      onClick: () => {
        void store.actions.SHOW_GENERATE_AND_CONNECT_ALL_AUDIO_DIALOG();
      },
      disableWhenUiLocked: true,
    },
    { type: "separator" },
    {
      type: "button",
      label: "把文本连接起来写出来",
      onClick: () => {
        void store.actions.SHOW_CONNECT_AND_EXPORT_TEXT_DIALOG();
      },
      disableWhenUiLocked: true,
    },
    {
      type: "button",
      label: "文本加载",
      onClick: () => {
        void store.actions.COMMAND_IMPORT_FROM_FILE({ type: "dialog" });
      },
      disableWhenUiLocked: true,
    },
  ]);

  // 「編集」メニュー
  const editSubMenuData = computed<MenuItemData[]>(() => []);

  // 「表示」メニュー
  const [showTextLineNumber, changeShowTextLineNumber] = useRootMiscSetting(
    store,
    "showTextLineNumber",
  );
  const viewSubMenuData = computed<MenuItemData[]>(() => [
    {
      type: "button",
      label: showTextLineNumber.value ? "隐藏行号" : "显示行号",
      onClick: () => {
        changeShowTextLineNumber(!showTextLineNumber.value);
      },
      disableWhenUiLocked: true,
    },
  ]);

  return {
    fileSubMenuData,
    editSubMenuData,
    viewSubMenuData,
  };
};
