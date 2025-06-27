import { userEvent, within, expect, fn } from "@storybook/test";

import { Meta, StoryObj } from "@storybook/vue3";
import FileNameTemplateDialog from "./FileNameTemplateDialog.vue";
import {
  buildAudioFileNameFromRawData,
  DEFAULT_AUDIO_FILE_NAME_TEMPLATE,
} from "@/store/utility";

const meta: Meta<typeof FileNameTemplateDialog> = {
  component: FileNameTemplateDialog,
  args: {
    availableTags: [
      "index",
      "characterName",
      "styleName",
      "text",
      "date",
      "projectName",
    ],
    defaultTemplate: DEFAULT_AUDIO_FILE_NAME_TEMPLATE,
    savedTemplate: "",
    fileNameBuilder: buildAudioFileNameFromRawData,
    extension: ".wav",
    "onUpdate:template": fn(),
    "onUpdate:openDialog": fn(),
  },
  tags: ["!autodocs"], // ダイアログ系はautodocsのプレビューが正しく表示されないので無効化
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Opened: Story = {
  name: "开启",
  args: {
    openDialog: true,
  },
};

/** ファイル名パターンをクリアし、文字列を入力する */
const clearAndInput = async (inputValue: string) => {
  const canvas = within(document.body); // ダイアログなので例外的にdocument.bodyを使う
  const input = canvas.getByLabelText<HTMLInputElement>("ファイル名パターン");
  await userEvent.clear(input);
  if (inputValue) {
    await userEvent.type(input, inputValue);
  }
};

/** 無効な文字列を入力し、エラーメッセージが表示されることを確認する */
const createInvalidInputPlay =
  (inputValue: string, expectedMessage: string | RegExp) => async () => {
    const canvas = within(document.body); // ダイアログなので例外的にdocument.bodyを使う

    await clearAndInput(inputValue);

    await expect(await canvas.findByText(expectedMessage)).toBeInTheDocument();
  };

export const EmptyInput: Story = {
  name: "无效输入：空格",
  args: { ...Opened.args },
  play: createInvalidInputPlay("", "请输入文本"),
};

export const ForbiddenInput: Story = {
  name: "无效输入：禁止字符",
  args: { ...Opened.args },
  play: createInvalidInputPlay(
    "$连读$/",
    /^使用できない文字が含まれています：「.+」$/,
  ),
};

export const UnknownTagInput: Story = {
  name: "有效输入：未知标签",
  args: { ...Opened.args },
  play: createInvalidInputPlay(
    "$连读测试$",
    "存在错误标签或包含单个$",
  ),
};

export const UnclosedTagInput: Story = {
  name: "无效输入：未关闭标签",
  args: { ...Opened.args },
  play: createInvalidInputPlay(
    "$连读$$",
    "存在错误标签或包含单个$",
  ),
};

export const MissingIndexInput: Story = {
  name: "无效输入：没有编号",
  args: { ...Opened.args },
  play: createInvalidInputPlay("a", "$编号$是必须的"),
};

export const Save: Story = {
  name: "按确定键",
  args: {
    ...Opened.args,
  },
  play: async ({ args }) => {
    const canvas = within(document.body); // ダイアログなので例外的にdocument.bodyを使う

    await clearAndInput("$连读$");

    const button = canvas.getByRole("button", { name: "确定" });
    await userEvent.click(button);

    // 確定とダイアログを閉じるイベントが呼ばれる
    await expect(args["onUpdate:template"]).toBeCalledWith("$连读$");
    await expect(args["onUpdate:openDialog"]).toBeCalledWith(false);
  },
};

export const Unsaveable: Story = {
  name: "如果输入无效，则无法按下确认按钮",
  args: { ...Opened.args },
  play: async () => {
    const canvas = within(document.body); // ダイアログなので例外的にdocument.bodyを使う

    await clearAndInput("无效输入");

    const button = canvas.getByRole("button", { name: "确定" });
    await expect(button).toBeDisabled();
  },
};

export const Close: Story = {
  name: "点击取消按钮",
  args: {
    ...Opened.args,
  },
  play: async ({ args }) => {
    const canvas = within(document.body); // ダイアログなので例外的にdocument.bodyを使う

    const button = canvas.getByRole("button", { name: "取消" });
    await userEvent.click(button);

    // ダイアログを閉じるイベントが呼ばれる、確定イベントは呼ばれない
    await expect(args["onUpdate:template"]).not.toBeCalled();
    await expect(args["onUpdate:openDialog"]).toBeCalledWith(false);
  },
};

export const Closed: Story = {
  name: "关闭",
  tags: ["skip-screenshot"],
  args: {
    openDialog: false,
  },
};
