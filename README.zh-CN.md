# Oracle APEX Universal Theme 设计体系

[English README](README.md)

本仓库维护 Oracle APEX Universal Theme 官方主题样式的 `DESIGN.md` 设计体系文档，面向 Open Design、AI 原型生成工具，以及需要复用 APEX 风格的前端/产品团队。

本项目不是 Oracle 官方项目。它的目标是把公开 Universal Theme 应用中观察到的设计证据整理成可导入、可审阅、可复用的设计体系，而不是重新设计 Oracle APEX。

## 仓库内容

| 主题样式 | 设计体系文件 | 验证覆盖范围 | 视觉特征 |
| --- | --- | --- | --- |
| Iris | [Iris/DESIGN.md](Iris/DESIGN.md) | 71 个 Design / Components / Icons 唯一路径；73 个菜单条目 | 深色中性导航壳、暖白页面背景、浅色标题带、蓝绿色动作强调 |
| Redwood Light | [Redwood-Light/DESIGN.md](Redwood-Light/DESIGN.md) | 71 个 Design / Components / Icons 唯一路径；73 个菜单条目 | 白色顶栏、暖灰导航、Redwood 标题装饰条、sage/teal 强调色 |
| Vita | [Vita/DESIGN.md](Vita/DESIGN.md) | 71 个 Design / Components / Icons 唯一路径；73 个菜单条目 | 白色内容面、蓝色导航/动作强调、紧凑 APEX 应用壳 |

顶层 [DESIGN.md](DESIGN.md) 是主题索引。每个主题目录都是独立设计体系，目录中只有一个规范文件 `DESIGN.md`，包含机器可读 YAML front matter 和面向人/AI 的设计说明。

## 目录结构

```text
.
|-- README.md
|-- README.zh-CN.md
|-- DESIGN.md
|-- Iris/
|   `-- DESIGN.md
|-- Redwood-Light/
|   `-- DESIGN.md
|-- Vita/
|   `-- DESIGN.md
|-- docs/
|   |-- maintenance.md
|   `-- open-design-import.md
`-- CONTRIBUTING.md
```

## 快速开始

克隆仓库：

```sh
git clone https://github.com/wfg2513148/apex-design.git
cd apex-design
```

选择一个主题目录，将该目录下的 `DESIGN.md` 作为设计体系来源。例如：

```text
Iris/DESIGN.md
Redwood-Light/DESIGN.md
Vita/DESIGN.md
```

每次生成原型时建议只使用一个主题样式，避免 Iris、Redwood Light、Vita 的视觉语言混在一起。

## 导入 Open Design

在 Open Design 中应逐个导入主题目录，而不是导入仓库根目录。

如果仓库克隆在 `<repo>`，则本地导入路径应是：

```text
<repo>/Iris
<repo>/Redwood-Light
<repo>/Vita
```

推荐导入模式：

- `hybrid`：适合日常原型生成，保留 `DESIGN.md` 的同时让 Open Design 生成辅助结构。
- `verbatim`：适合强调原文证据保留的场景。
- `normalized`：适合明确希望 Open Design 派生更多标准结构的场景。

推荐显示名称：

| 主题目录 | Open Design 标题 |
| --- | --- |
| `Iris` | Oracle APEX Iris Theme |
| `Redwood-Light` | Oracle APEX Redwood Light Theme |
| `Vita` | Oracle APEX Vita Theme |

更多步骤见 [docs/open-design-import.md](docs/open-design-import.md)。

## 用于 AI 原型生成

示例提示词：

```text
使用 Iris/DESIGN.md 作为唯一设计体系，生成一个 Oracle APEX Universal Theme 风格的管理页面，包含左侧导航、标题区、工具栏和 Interactive Report。
```

建议：

- 一次只选择一个主题样式。
- 使用 APEX 组件名称，例如 Region、Interactive Grid、Interactive Report、Classic Report、Breadcrumb、Wizard、Page Items。
- 数据密集页面优先使用 APEX 的表格、报表、Region、Metric Card 和 Cards 模式。
- 不要把 APEX 页面生成成通用 SaaS landing page。
- 不要把 Redwood Light 生成成“绿色版 Vita”，也不要把 Iris 生成成“蓝绿色导航版 Vita”。

## 来源证据

主来源：

```text
https://oracleapex.com/ords/r/apex_pm/ut/...
```

备用来源：

```text
https://oracleapex.cn/ords/r/test/ut/...
```

备用来源只用于主站超时或需要现场切换 Theme Style 验证时。仓库中的 canonical 链接应继续指向 `oracleapex.com`。

## 当前维护状态

当前仓库包含：

- 3 个主题样式：Iris、Redwood Light、Vita
- 每个主题 71 个唯一 Design / Components / Icons 页面路径
- 每个主题 73 个必需菜单条目，包含别名条目
- 每个主题都有机器可读 YAML front matter
- 每个主题都有面向 Open Design 的生成规则

维护流程见 [docs/maintenance.md](docs/maintenance.md)。

## 贡献说明

贡献前请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。

核心原则：

- 保持每个主题样式独立。
- 保持 YAML front matter 机器可读。
- canonical URL 保持指向 `oracleapex.com`。
- 明确区分“观察到的 token”和“为了生成原型给出的解释/建议”。
- 避免对提取出来的大段 Markdown 做无意义格式化。

## 免责声明

Oracle、Oracle APEX 及相关标识属于 Oracle 和/或其关联公司。本仓库是独立的文档与设计体系提取项目，不代表 Oracle 官方，也不表示获得 Oracle 背书。
