 # UI 名称与 Vue 文件名的对应速查表

## 注意事项

此文件可能会出现更新遗漏的情况。请结合实际文件进行确认。

若不清楚各 UI 的名称，请参阅 [VOICEVOX 专用 UI 名称](./UX・UIデザインの方針.md#voicevox-専用-ui-の名称)。

## 对应速查

所有文件共用的扩展名 `.vue` 已省略。

### views 目录

- 主界面整体 ･･･ [EditorHome](../src/components/Talk/EditorHome.vue)

### components 目录

- 最上方的工具栏（包含菜单） ･･･ [MenuBar](../src/components/MenuBar.vue)
  - 菜单
    - 菜单项目列表 ･･･ [MenuItem](../src/components/MenuItem.vue)
    - 菜单按钮 ･･･ [MenuButton](../src/components/MenuButton.vue)
    - 引擎
      - 引擎管理 ･･･ [EngineManageDialog](../src/components/Dialog/EngineManageDialog.vue)
    - 设置
      - 快捷键分配 ･･･ [HotkeySettingDialog](../src/components/Dialog/HotkeySettingDialog.vue)
      - 工具栏自定义 ･･･ [ToolBarCustomDialog](../src/components/Dialog/ToolBarCustomDialog.vue)
      - 角色排序与试听 ･･･ [CharacterOrderDialog](../src/components/Dialog/CharacterOrderDialog.vue)
        - 样本语音列表中的各角色 ･･･ [CharacterTryListenCard](../src/components/Dialog/CharacterTryListenCard.vue)
      - 默认风格 ･･･ [DefaultStyleListDialog](../src/components/Dialog/DefaultStyleListDialog.vue)
        - 单独选择 ･･･ [DefaultStyleSelectDialog](../src/components/Dialog/DefaultStyleSelectDialog.vue)
      - 朗读与重音字典 ･･･ [DictionaryManageDialog](../src/components/Dialog/DictionaryManageDialog.vue)
      - 选项 ･･･ [SettingDialog](../src/components/Dialog/SettingDialog.vue)
        - 导出文件名模式 ･･･ [FileNamePatternDialog](../src/components/Dialog/FileNamePatternDialog.vue)
    - 帮助 ･･･ `help` 目录
      - 请参阅 [HelpDialog](../src/components/Dialog/HelpDialog/HelpDialog.vue) 中的 `pagedata` 的 `components`。
  - 窗口右上方的按钮组（包含固定按钮） ･･･ [TitleBarButtons](../src/components/TitleBarButtons.vue)
    - 除固定按钮外的其他按钮 ･･･ [MinMaxCloseButtons](../src/components/MinMaxCloseButtons.vue)
- 工具栏 ･･･ [ToolBar](../src/components/ToolBar.vue)
- 角色显示栏 ･･･ [CharacterPortrait](../src/components/Talk/CharacterPortrait.vue)
- 台词栏（包含文本框添加按钮） ･･･ 包含在 [views/EditorHome](../src/views/EditorHome.vue) 中
  - 轨道（包含行号与文本框） ･･･ [AudioCell](../src/components/Talk/AudioCell.vue)
    - 角色图标 ･･･ [CharacterButton](../src/components/CharacterButton.vue)
    - 上下文（右键）菜单 ･･･ [ContextMenu](../src/components/ContextMenu.vue)
- 参数调整栏 ･･･ [AudioInfo](../src/components/Talk/AudioInfo.vue)
  - 预设管理 ･･･ [PresetManageDialog](../src/components/Dialog/PresetManageDialog.vue)
- 详细调整栏（包含各项目与播放按钮） ･･･ [AudioDetail](../src/components/Talk/AudioDetail.vue)
  - 重音项目的文字以外部分的 UI ･･･ [AudioAccent](../src/components/Talk/AudioAccent.vue)
  - 语调与长度项目的滑块 ･･･ [AudioParameter](../src/components/Talk/AudioParameter.vue)
- 其他
  - 首次启动时显示的界面
    - 使用条款 ･･･ [AcceptTermsDialog](../src/components/Dialog/AcceptTermsDialog.vue)
    - 数据收集与隐私政策 ･･･ [AcceptRetrieveTelemetryDialog](../src/components/Dialog/AcceptRetrieveTelemetryDialog.vue)
  - 启动时显示的界面
    - 新增角色介绍 ･･･ [CharacterOrderDialog](../src/components/Dialog/CharacterOrderDialog.vue)（与设置 / 角色排序与试听共用）
  - “语音导出”时的成功或失败通知 ･･･ [SaveAllResultDialog](../src/components/Dialog/SaveAllResultDialog.vue)
  - 仅显示一次的提示 ･･･ [ToolTip](../src/components/ToolTip.vue)
  - 语音生成中的进度显示 ･･･ [ProgressView](../src/components/ProgressView.vue)
  - 错误记录用（对 UI 无影响） ･･･ [ErrorBoundary](../src/components/ErrorBoundary.vue)

