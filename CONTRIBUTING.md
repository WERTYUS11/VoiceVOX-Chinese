 # 贡献者指南

## 开始之前

首先，感谢你对VOICEVOX项目的关注。
我们欢迎你积极参与。

当你准备参与时，要知道每个社区都会有一些规则，理解这些规则对于避免困难是非常重要的。

这份指南的目的是尽量将这些规则清晰明了地写出来，为你提供一个更容易参与的环境。由于内容较为详细，可能会包括一些对熟悉项目的贡献者来说不必要的说明。我们欢迎有志向的贡献者参与，请你阅读这些文档并开始参与吧。

## 负责人

| 角色             | 相关人员                            |
| ---------------- | ---------------------------------- |
| 产品负责人       | @Hiroshiba                          |
| 维护者           | @Hiroshiba、@y-chan、@qryxip        |
| 汉化             | @WERTYUS11                         |

## 参与心得

VOICEVOX项目是一个典型的集体开发型开源软件项目。希望参与的贡献者需要注意以下几点：

- 在提出建议时，尽量参考[VOICEVOX的目标](docs/ミッション・バリュー・ビジョン.md)，这样可以使讨论更加顺利。

- 你所做的工作内容需要与社区进行讨论，并达成一致。此外，根据项目方针，某些提案可能会被拒绝。

- 集体开发的魅力之一就是通过讨论共同创造事物。与独立开发相比，集体开发更需要细致的沟通，请始终尊重其他对话者。

- 无论你的年龄、国籍、背景或性别如何，参与项目都是被欢迎的。项目不容忍任何形式的歧视。

- 项目尊重作者及其作品。在参与贡献时，请确保遵守他人的权利和许可证，并避免提交抄袭的代码。

- 作为贡献者，你所提交的代码将按项目定义的许可证进行处理。

- 对于涉及隐私或可能对计算机造成危害的实现，需要进行谨慎的讨论。在开始实现前，务必先达成一致。

## 如何贡献

本指南主要面向有意帮助改进程序的贡献者，指导如何参与项目。

VOICEVOX提供了多种贡献方式：

- 作为用户使用
- 发布文章或视频以推广
- 帮助改进程序
- 撰写文档

项目分为三个部分，可以根据需要选择对应的部分进行参与。

| 类型            | 页面                                                         | 角色                                     |
| --------------- | ------------------------------------------------------------ | ---------------------------------------- |
| VOICEVOX        | [项目](https://github.com/VOICEVOX/voicevox/)                | 主要是用户界面（编辑器）部分            |
| VOICEVOX_ENGINE | [项目](https://github.com/VOICEVOX/voicevox_engine/)         | 主要是Web API实现部分                   |
| VOICEVOX_CORE   | [项目](https://github.com/VOICEVOX/voicevox_core/)           | 主要是语音合成和库实现部分               |

如果你想了解项目的整体结构，可以参考[这里](docs/整体结构.md)。

## 初学者欢迎任务

如果你想学习编程或在开源开发社区中实践，建议从社区中已有的“初学者欢迎任务”开始。

“初学者欢迎任务”是指“相对较简单，但项目中需要的任务”，通过这些任务可以一边学习如何贡献，一边参与实际工作。

| 类型            | 页面                                                                                                                    |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| VOICEVOX        | [初学者欢迎任务](https://github.com/VOICEVOX/voicevox/issues?q=is%3Aissue+is%3Aopen+label%3A初学者欢迎任务)               |
| VOICEVOX_ENGINE | [初学者欢迎任务](https://github.com/VOICEVOX/voicevox_engine/issues?q=is%3Aissue+is%3Aopen+label%3A初学者欢迎任务)      |
| VOICEVOX_CORE   | [初学者欢迎任务](https://github.com/VOICEVOX/voicevox_core/issues?q=is%3Aissue+is%3Aopen+label%3A初学者欢迎任务)        |

## 准备工作

以下内容主要假设你使用Windows系统，目的是帮助你搭建VOICEVOX（编辑器）的开发环境。首先，请构建测试版VOICEVOX环境。

### 1. 安装正式版VOICEVOX

- 请先安装[VOICEVOX正式版](https://voicevox.hiroshiba.jp/)，这样可以获得可立即使用的VOICEVOX引擎。

### 2. 构建开发环境

- 必须工具：

  - [Node.js](https://nodejs.org/en/download/releases/)\
    请安装[这里](https://github.com/VOICEVOX/voicevox/blob/main/.node-version)指定的版本。

- 需要的其他工具：

  - [Git](https://git-scm.com/downloads)
  - [Visual Studio Code](https://code.visualstudio.com/)
  - [GitHub CLI](https://github.com/cli/cli#installation)
  - [typos](https://github.com/crate-ci/typos#install)（如果需要进行拼写检查）
  - [Tortoise Git](https://tortoisegit.org/download/)（如果希望通过文件资源管理器操作）

### 3. Fork项目

- 点击[这里](https://github.com/VOICEVOX/voicevox/fork)进行Fork，将项目复制到你自己的GitHub仓库。

### 4. 克隆源码（获取源码）

- 使用GitHub的命令行工具或Git命令将源码克隆到你的工作环境中。

#### 4.1 使用命令行

- GitHub CLI命令：

```bash
gh repo clone https://github.com/(你的GitHub账号)/voicevox.git
```

- Git命令：

```bash
git clone git@github.com:(你的GitHub账号)/voicevox.git
```

#### 4.2 使用GUI工具

- 使用Visual Studio Code或Tortoise Git等工具进行克隆。
- 工具的URL格式为`git@github.com:(你的GitHub账号)/voicevox.git`或`https://github.com/(你的GitHub账号)/voicevox.git`。

### 5. 下载所需的程序

- 打开通过步骤4获得的文件夹，打开命令提示符，并运行以下命令以准备环境。

```bash
npm install -g pnpm
pnpm i
```

- 在安装过程中，你可能会看到一些警告，通常可以忽略。

### 6. 指定引擎

- 复制`.env.production`文件并将其重命名为`.env`。
- 打开文件并在`VITE_DEFAULT_ENGINE_INFOS`中的`executionFilePath`设置为步骤1中安装的引擎路径。

### 7. 启动开发环境

- 运行命令`pnpm run electron:serve`启动开发环境。如果配置正确，开发环境将成功启动。

## 贡献步骤

### 1. 提出建议与调整

- 如果你有想法，首先请以Issue的形式提出。

#### 1.1 提出建议

在提建议时，确保明确指出你希望改进的部分，并描述改进后的优点或可能的负面影响。

#### 1.2 讨论

此时应与相关人员讨论实现的细节、限制、优先级和可行性。

#### 1.3 开始工作

如果你决定开始处理一个Issue，请在Issue页面中声明自己已开始工作，以避免重复劳动。

### 2. 创建分支

- 在自己的工作文件夹中为每个任务创建一个新的分支，命名可以根据任务内容来定。

### 3. 修改代码

在编写代码时，遵循一定的命名和结构规范。

- 使用驼峰命名法来命名函数和变量。
- 如有必要，在代码中加入TODO或FIXME注释。

### 4. 进行初步测试

在提交代码之前，请确保进行必要的测试：

- 使用`pnpm run lint`和`pnpm run fmt`检查代码规范。
- 使用`pnpm run typecheck`检查类型。
- 使用`pnpm run markdownlint ./*/*.md`检查Markdown文件。
- 确保代码可以正确运行，使用`pnpm run electron:serve`进行测试。

### 5. 提交代码

- 在个人仓库中提交代码，并确保详细描述所做的更改。
- 提交后，创建Pull Request（PR）来向社区提出你的修改。

### 6. 代码审查

- 提交的代码将接受社区成员的审查，必要时进行修改。

### 7. 解决冲突

- 如果在提交过程中遇到代码冲突，请根据冲突提示解决冲突并再次提交。

### 其他事项

- VOICEVOX项目团队会为贡献者提供支持，帮助你解决遇到的问题。
- 如果有任何疑问或需要帮助，可以向项目成员提问或加入[Discord社区](https://discord.gg/gJamMrqFHg

