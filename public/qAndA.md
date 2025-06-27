 # 常见问题解答

## 运行环境与规格相关问题

### Q. 请告诉我运行环境要求

#### CPU 版

支持运行 Windows、Mac 或 Linux 的 PC。

※ Windows：Windows 10、Windows 11  
※ Mac：macOS 13（Ventura）及以上版本  
※ Linux：Ubuntu 20.04、Ubuntu 22.04

#### GPU 版

支持搭载 DirectML 的 GPU 的 Windows PC，以及搭载 Nvidia GPU 的 Linux PC。

## 安装相关问题

### Q. 无法下载安装程序

浏览器的安全功能可能在下载和保存文件时显示程序安全性的警告。请按照以下步骤操作：

#### 当出现“无法安全下载”提示时

1. 将鼠标指针移到屏幕右上角的“无法安全下载”提示上。
2. 依次点击“...” → “保存”按钮。
3. 如果是从 VOICEVOX 官网下载的安装程序等已确认安全性的文件，点击“保留”按钮。如果应用程序或文件来源不明、无法确认安全性，点击“取消”按钮。即使是从 VOICEVOX 官网下载的安装程序，也可能在“发行者”中显示“未知”。即使显示“未知”，只要能确认安全性，请选择保存。

#### 当出现“未被普遍下载”或“可能对您的设备造成损害，因此被阻止”提示时

1. 将鼠标指针移到屏幕右上角的“未被普遍下载”或“可能对您的设备造成损害，因此被阻止”提示上。
2. 依次点击“...” → “保存”按钮。
3. 出现“请确认下载的文件或其来源可信后再打开文件”提示时，点击“显示详细信息”。
4. 如果是从 VOICEVOX 官网下载的安装程序等已确认安全性的文件，点击“保留”按钮。如果应用程序或文件来源不明、无法确认安全性，点击“删除”按钮。即使是从 VOICEVOX 官网下载的安装程序，也可能在“发行者”中显示“未知”。即使显示“未知”，只要能确认安全性，请选择保存。

### Q. 显示“Windows 保护了您的 PC”

尝试运行安装程序时，可能会显示“Windows 保护了您的 PC”。  
这是 Windows SmartScreen（或 Windows Defender SmartScreen）功能发出的提示，提醒您检查运行的应用程序或文件是否安全。  
确认发行者等无问题后，点击提示中的“更多信息”，然后在显示的界面中运行安装程序。

### Q. 安装路径在哪里？

默认安装路径如下：

#### Windows 版安装路径

`C:\Users\（用户名）\AppData\Local\Programs\VOICEVOX`

#### Mac 版安装路径

`/Applications/VOICEVOX` 或 `/Users/（用户名）/Applications/VOICEVOX`

#### Ubuntu 版安装路径

`/home/（用户名）/.voicevox`

### Q. 如何更新？

通过从官网重新安装最新版本即可完成更新。

### Q. 可以回退到旧版本吗？

可以从[此处](https://github.com/VOICEVOX/voicevox/releases)获取旧版本。

## 使用方法相关问题

### Q. 发音与预期不符

可以通过词典注册更改单词的发音。请在 设置 → 发音与重音词典 中注册单词。

### Q. 不清楚如何使用

请参阅[使用方法](https://voicevox.hiroshiba.jp/how_to_use)网页或软件的帮助文档。  
如果仍有疑问，可以在 X（原 Twitter）上使用 `#VOICEVOX` 标签发帖，或许会有人提供解决方法。

### Q. 可以在离线电脑上使用吗？

可以。

### Q. 如何导入/导出词典？

在运行中的引擎设置界面中操作。启动软件后，在浏览器中访问 `http://127.0.0.1:[引擎端口号]/setting` 即可打开引擎设置界面。默认引擎端口号为 `50021`。

## 故障与错误相关问题

### Q. 发现了一个 bug，应该在哪里报告？

发现 bug 的用户可以通过 X 进行报告，我们将不胜感激。  
VOICEVOX X 账号：[@voicevox_jp](https://x.com/voicevox_jp)

### Q. 升级后显示出现异常

可能是设置文件导致了问题。请关闭软件，删除以下路径中的设置文件后重新启动。

#### Windows 版设置文件

`C:\Users\（用户名）\AppData\Roaming\voicevox\config.json`

#### Mac 版设置文件

`/Users/（用户名）/Library/Application Support/voicevox/config.json`

### Q. 显示引擎启动失败的错误

如果在未搭载支持 GPU 的 PC 上以 GPU 模式启动，会显示错误。  
请在 设置 → 引擎 中选择 CPU 模式。  

另外，可能是之前启动的引擎未正常关闭而残留。尝试重启 PC。

### Q. 以 GPU 模式启动时显示错误

如果在未搭载支持 GPU 的 PC 上以 GPU 模式启动，会显示错误。  
请在 设置 → 引擎 中选择 CPU 模式。  

如果在搭载支持 GPU 的 PC 上仍出现错误，可能是安装了 CPU 版。请从下载页面获取 GPU 版。  

另请注意，Mac 版不支持 GPU 模式。

### Q. 无法播放语音

可能是语音播放设备未设置为常用设备。  
请在 设置 → 高级设置 → 播放设备 中检查。  

如果以引擎的 GPU 模式启动，请在 设置 → 引擎 中选择 CPU 模式后重试。

### Q. 无法播放长文本的语音

可能是内存不足导致语音合成失败，GPU 模式下更容易发生。  
建议使用配备更高内存的 GPU 的 PC，或使用 CPU 模式。

### Q. 用“，”分隔的短句有时无法被朗读

这是当前语音合成引擎的规格限制。尝试延长前后无声部分的长度，可能会有改善。

### Q. 在哪里可以查看错误日志？

通过 帮助 → 联系我们 → 打开日志文件夹 按钮 查看。具体保存在以下文件夹：

#### Windows 版

`C:\Users\（用户名）\AppData\Roaming\voicevox\logs`

#### Mac 版

`/Users/（用户名）/Library/Logs/voicevox`

### Q. 在 Ubuntu 22.04 上无法运行

安装 `libfuse2` 可能会解决问题。

```sh
sudo add-apt-repository universe
sudo apt install libfuse2
```

## 许可与使用条款相关问题

### Q. 在视频中使用语音时，如何标注版权信息？

请在视频简介栏或视频内标注。  
在简介栏标注有助于通过搜索发现，有助于激励 VOICEVOX 的开发。

### Q. 使用变声功能（morphing）时的使用条款是怎样的？

适用所使用语音的双方使用条款。如果条款不同，以范围较窄（较严格）的条款为准。  
例如，将可商用语音 A 与不可商用语音 B 进行变声后，适用不可商用的条款。

### Q. 仅使用语音（如电话语音）时，如何标注版权信息？

在语音的开头或结尾插入版权信息。  
如果角色使用条款中有具体指引，请优先遵循。

### Q. 在音乐配信平台发布时，如何标注版权信息？

对于无简介栏的音乐投稿平台，可在网页或视频配信平台上标注版权信息，只要不刻意隐藏使用情况即可。

### Q. 在扬声器语音导航等设备上使用语音时，如何标注版权信息？

在语音开头或结尾插入版权信息，或在设备或周围标注。  
如果角色使用条款中有具体指引，请优先遵循。

### Q. 想在公司或学校使用

只要标注版权信息，VOICEVOX 生成的语音可用于商用或非商用场景。  
详情请查看 VOICEVOX 使用条款及各角色的使用条款。

### Q. 在非 VOICEVOX 的语音合成中使用语音中间表达（AudioQuery/FrameAudioQuery）时需要标注版权信息吗？

需要。

### Q. 如何省略版权信息标注？

部分角色可通过获取商用许可省略版权信息标注。  
详情请查看各角色的使用条款。

## 其他

### Q. 接受金钱资助吗？

在 [pixiv FANBOX](https://hiho.fanbox.cc/) 上接受资助。所有资助款项将用于 VOICEVOX 的开发。

### Q. 官方插画或立绘从哪里下载？

请从[ボイボ寮](https://voicevox.hiroshiba.jp/dormitory/)访问各角色的主页。

### Q. 关于角色的问题

VOICEVOX 的角色与软件的权利人不同。  
关于角色的问题，VOICEVOX 无法回答，请联系角色权利人。

### Q. 想为 VOICEVOX 的开发做贡献

欢迎任何人参与修复 bug 等开发工作，随时加入我们！

- [VOICEVOX 整体架构](https://github.com/VOICEVOX/voicevox/blob/main/docs/%E5%85%A8%E4%BD%93%E6%A7%8B%E6%88%90.md)
- [VOICEVOX 编辑器](https://github.com/VOICEVOX/voicevox)
- [VOICEVOX 引擎](https://github.com/VOICEVOX/voicevox_engine)
- [VOICEVOX 核心](https://github.com/VOICEVOX/voicevox_core)

### Q. 如何确认是否遵守使用条款？

原则上不回答是否遵守使用条款的问题。  
请尽可能自行阅读并判断使用条款。

### Q. 联系方式是什么？

欢迎在 X（原 Twitter）上使用 `#VOICEVOX` 标签分享感想与建议，这将激励我们的开发。  

如遇到运行问题或发现 bug，请在 X 上使用 `#VOICEVOX` 标签发帖报告，或联系 VOICEVOX 官方账号（[@voicevox_jp](https://x.com/voicevox_jp)）。  

其他未列在 Q&A 中的问题，请联系 VOICEVOX 官方账号（[@voicevox_jp](https://x.com/voicevox_jp)。