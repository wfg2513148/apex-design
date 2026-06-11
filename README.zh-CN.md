# Oracle APEX Universal Theme 设计体系

[English README](README.md)

本仓库维护 Oracle APEX Universal Theme 官方主题样式的 `DESIGN.md` 设计体系文档，面向 Open Design、AI 原型生成工具，以及需要复用 APEX 风格的前端/产品团队。

本项目不是 Oracle 官方项目。它的目标是把公开 Universal Theme 应用中观察到的设计证据整理成可导入、可审阅、可复用的设计体系，而不是重新设计 Oracle APEX。

## 图片概览

[![Oracle APEX Universal Theme 设计体系概览](docs/assets/theme-overview.png)](DESIGN.md)

点击概览图可打开主题索引。

| 主题 | 应用壳示意 | 主要视觉规则 |
| --- | --- | --- |
| Iris | `深色顶栏 + 深色侧边导航 + 浅色标题带 + 白色内容区` | 使用 `#302D2A` 作为应用壳颜色，`#00688c` 只用于链接、焦点、badge 和主要动作。 |
| Redwood Light | `白色顶栏 + 暖灰侧边导航 + Redwood 标题装饰条 + 白色内容区` | 使用暖灰中性色和 sage/teal 强调色，不要生成成绿色版 Vita。 |
| Vita | `蓝色顶栏 + 蓝色侧边导航 + 白色标题/内容区 + 紧凑 Region` | 使用 `#056AC8` 作为高强调导航和动作色。 |
| Vita - Dark | `蓝色顶栏 + 炭黑侧边导航 + 深色内容区` | 保持 Vita 的紧凑密度，但把应用表面切换为深色组件和深色 Region。 |
| Vita - Red | `红色顶栏 + 浅色侧边导航 + 白色内容区` | 使用 `#DA1B1B` 作为主强调色，不要把全部 Region 都做成警告状态。 |
| Vita - Slate | `灰蓝顶栏 + 深色侧边导航 + 浅灰标题带` | 保留 Vita 组件密度，同时使用 slate 导航壳和低饱和中性色。 |

上面的视觉概览来自仓库中记录的 token 和设计规则，不是 Oracle APEX 的真实页面截图。每个主题样式在仓库中保持为独立设计体系，导入和生成原型时也应分别使用。

## 仓库内容

| 主题样式 | 设计体系文件 | 验证覆盖范围 | 视觉特征 |
| --- | --- | --- | --- |
| Iris | [Iris/DESIGN.md](Iris/DESIGN.md) + [manifest](Iris/design-system.manifest.json) | 71 个 Design / Components / Icons 唯一路径；73 个菜单条目；含 tokens/CSS/Reference/patterns/catalogs/示例配套资源 | 深色中性导航壳、暖白页面背景、浅色标题带、蓝绿色动作强调 |
| Redwood Light | [Redwood-Light/DESIGN.md](Redwood-Light/DESIGN.md) + [manifest](Redwood-Light/design-system.manifest.json) | 71 个 Design / Components / Icons 唯一路径；73 个菜单条目；含 tokens/CSS/Reference/patterns/catalogs/示例配套资源 | 白色顶栏、暖灰导航、Redwood 标题装饰条、sage/teal 强调色 |
| Vita | [Vita/DESIGN.md](Vita/DESIGN.md) + [manifest](Vita/design-system.manifest.json) | 71 个 Design / Components / Icons 唯一路径；73 个菜单条目；含 tokens/CSS/Reference/patterns/catalogs/示例配套资源 | 白色内容面、蓝色导航/动作强调、紧凑 APEX 应用壳 |
| Vita - Dark | [Vita-Dark/DESIGN.md](Vita-Dark/DESIGN.md) + [manifest](Vita-Dark/design-system.manifest.json) | 71 个 Design / Components / Icons 唯一路径；73 个菜单条目；含 tokens/CSS/Reference/patterns/catalogs/示例配套资源 | 炭黑应用壳、深色 Region、Vita 蓝色动作强调 |
| Vita - Red | [Vita-Red/DESIGN.md](Vita-Red/DESIGN.md) + [manifest](Vita-Red/design-system.manifest.json) | 71 个 Design / Components / Icons 唯一路径；73 个菜单条目；含 tokens/CSS/Reference/patterns/catalogs/示例配套资源 | 白色内容面、红色顶栏/动作强调、紧凑 Vita 结构 |
| Vita - Slate | [Vita-Slate/DESIGN.md](Vita-Slate/DESIGN.md) + [manifest](Vita-Slate/design-system.manifest.json) | 71 个 Design / Components / Icons 唯一路径；73 个菜单条目；含 tokens/CSS/Reference/patterns/catalogs/示例配套资源 | slate 导航壳、浅灰标题带、灰蓝主强调色 |

顶层 [DESIGN.md](DESIGN.md) 是主题索引。每个主题目录都是独立设计体系，目录中有规范文件 `DESIGN.md`，包含机器可读 YAML front matter 和面向人/AI 的设计说明。每个主题都额外提供企业级高保真原型所需的 manifest、机器可读 tokens、轻量 CSS 适配层、Reference 实现层、企业模式层、结构化目录和 HTML 示例。

## 目录结构

```text
.
|-- README.md
|-- README.zh-CN.md
|-- DESIGN.md
|-- Iris/
|   |-- DESIGN.md
|   |-- catalog/
|   |-- design-system.manifest.json
|   |-- examples/
|   |-- patterns/
|   |-- reference/
|   |-- styles/
|   `-- tokens/
|-- Redwood-Light/
|   |-- DESIGN.md
|   |-- catalog/
|   |-- design-system.manifest.json
|   |-- examples/
|   |-- patterns/
|   |-- reference/
|   |-- styles/
|   `-- tokens/
|-- Vita/
|   |-- DESIGN.md
|   |-- catalog/
|   |-- design-system.manifest.json
|   |-- examples/
|   |-- patterns/
|   |-- reference/
|   |-- styles/
|   `-- tokens/
|-- Vita-Dark/
|   |-- DESIGN.md
|   |-- catalog/
|   |-- design-system.manifest.json
|   |-- examples/
|   |-- patterns/
|   |-- reference/
|   |-- styles/
|   `-- tokens/
|-- Vita-Red/
|   |-- DESIGN.md
|   |-- catalog/
|   |-- design-system.manifest.json
|   |-- examples/
|   |-- patterns/
|   |-- reference/
|   |-- styles/
|   `-- tokens/
|-- Vita-Slate/
|   |-- DESIGN.md
|   |-- catalog/
|   |-- design-system.manifest.json
|   |-- examples/
|   |-- patterns/
|   |-- reference/
|   |-- styles/
|   `-- tokens/
|-- docs/
|   |-- assets/
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

选择一个主题目录并导入完整主题目录，让 Open Design 同时读取 manifest、token JSON、CSS、Reference 层、企业模式层、结构化目录和示例页面。例如：

```text
Iris/
Redwood-Light/
Vita/
Vita-Dark/
Vita-Red/
Vita-Slate/
```

每次生成原型时建议只使用一个主题样式，避免不同主题样式的视觉语言混在一起。

## 导入 Open Design

[![将 APEX 设计体系导入 Open Design 的流程](docs/assets/open-design-flow.png)](docs/open-design-import.md)

点击流程图可打开 Open Design 导入步骤说明。

在 Open Design 中应逐个导入完整主题目录，而不是导入仓库根目录，也不要只复制 `DESIGN.md` 单文件。

如果仓库克隆在 `<repo>`，则本地导入路径应是：

```text
<repo>/Iris
<repo>/Redwood-Light
<repo>/Vita
<repo>/Vita-Dark
<repo>/Vita-Red
<repo>/Vita-Slate
```

推荐导入模式：

- `hybrid`：适合日常原型生成，保留 `DESIGN.md` 的同时让 Open Design 使用主题 token JSON、CSS 适配层、patterns 和 catalogs。
- `verbatim`：适合强调原文证据保留的场景。
- `normalized`：适合明确希望 Open Design 派生更多标准结构的场景。

推荐显示名称：

| 主题目录 | Open Design 标题 |
| --- | --- |
| `Iris` | Oracle APEX Iris Theme |
| `Redwood-Light` | Oracle APEX Redwood Light Theme |
| `Vita` | Oracle APEX Vita Theme |
| `Vita-Dark` | Oracle APEX Vita Dark Theme |
| `Vita-Red` | Oracle APEX Vita Red Theme |
| `Vita-Slate` | Oracle APEX Vita Slate Theme |

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

- 6 个主题样式：Iris、Redwood Light、Vita、Vita - Dark、Vita - Red、Vita - Slate
- 每个主题 71 个唯一 Design / Components / Icons 页面路径
- 每个主题 73 个必需菜单条目，包含别名条目
- 每个主题都有机器可读 YAML front matter
- 每个主题都有面向 Open Design 的生成规则
- 6 个主题都提供 manifest、token JSON、CSS 适配层、Reference 实现层、企业模式层、结构化目录和企业 HR 示例页面，用于更高保真的企业级 Web 应用原型

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
