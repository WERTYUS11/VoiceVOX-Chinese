import { userEvent, within, expect, fn } from "@storybook/test";

import { Meta, StoryObj } from "@storybook/vue3";
import AcceptDialog from "./AcceptDialog.vue";

const meta: Meta<typeof AcceptDialog> = {
  component: AcceptDialog,
  args: {
    modelValue: false,
    title: "标题",
    heading: "見出し",
    terms: "# 見出し1\n文章文章文章\n## 見出し2\n文章文章文章",
    rejectLabel: "拒否",
    acceptLabel: "接受",
    "onUpdate:modelValue": fn(),
    onAccept: fn(),
    onReject: fn(),
  },
  tags: ["!autodocs"], // ダイアログ系はautodocsのプレビューが正しく表示されないので無効化
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Opened: Story = {
  name: "打开",
  args: {
    modelValue: true,
  },
};

export const Accept: Story = {
  name: "按接受按钮",
  args: { ...Opened.args },
  play: async ({ args }) => {
    const canvas = within(document.body); // ダイアログなので例外的にdocument.bodyを使う

    const button = canvas.getByRole("button", { name: /接受/ });
    await userEvent.click(button);

    // 接受イベントが呼ばれる
    await expect(args["onAccept"]).toBeCalledWith();
  },
};

export const Reject: Story = {
  name: "点击拒绝按钮",
  args: {
    ...Opened.args,
  },
  play: async ({ args }) => {
    const canvas = within(document.body); // ダイアログなので例外的にdocument.bodyを使う

    const button = canvas.getByRole("button", { name: /拒绝/ });
    await userEvent.click(button);

    // 拒否イベントが呼ばれる
    await expect(args["onReject"]).toBeCalledWith();
  },
};

export const Closed: Story = {
  name: "关闭",
  tags: ["skip-screenshot"],
};
