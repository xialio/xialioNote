<p align="center">
  <img width="350" src="https://cdn.theanimegallery.com/theanimegallery/063e7bb7-301c-49c9-bd21-6fd4af9b9a54-307w.webp">
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-green.svg" /></a>
  <a href="http://creativecommons.org/licenses/by-sa/4.0/"><img src="https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg" /></a>
</p>

<p align="center">
  <a href="https://discord.gg/XuNFDcDZGj"><img src="https://img.shields.io/discord/1229292283657195520?style=flat&logo=discord&logoColor=white&label=Discord&color=%23404eed" /></a>
  <a href="https://t.me/+6WKTUzWijf1kMzFl"><img src="https://img.shields.io/badge/Group-%235AA9E6?logo=telegram&label=Telegram" /></a>
</p>

# xialio's Blog Project

## 欢迎来到 xialio 的博客！

这里是我的个人博客项目，同时也是我的 nolebase 笔记库。在这里，我会记录和分享关于编程、技术探索和个人成长的各种笔记和心得。
## 目录

- [关于博客](#关于博客)
- [快速开始](#快速开始)
- [笔记目录](#笔记目录)
- [如何贡献](#如何贡献)
- [联系我](#联系我)
- [致谢](#致谢)
## 关于博客

这个博客是基于 [nolebase](https://github.com/nolebase/nolebase) 搭建的，使用 visual studio2022 编写文章，并通过vercel.com 进行部署。

## 笔记目录
以下是 nolebase 笔记的目录结构：
- [编程语言](#编程语言)
  - [JavaScript](notes/programming-languages/javascript/)
  - [Python](notes/programming-languages/python/)
  - [Go](notes/programming-languages/go/)
- [前端技术](#前端技术)
  - [HTML](notes/frontend/html/)
  - [CSS](notes/frontend/css/)
  - [React](notes/frontend/react/)
- [后端技术](#后端技术)
  - [Node.js](notes/backend/nodejs/)
  - [Django](notes/backend/django/)
  - [Flask](notes/backend/flask/)
- [数据库](#数据库)
  - [MySQL](notes/database/mysql/)
  - [MongoDB](notes/database/mongodb/)
  - [Redis](notes/database/redis/)
- [运维与部署](#运维与部署)
  - [Linux](notes/ops/linux/)
  - [Docker](notes/ops/docker/)
  - [Kubernetes](notes/ops/kubernetes/)
- [个人成长](#个人成长)
  - [时间管理](notes/personal-growth/time-management/)
  - [学习技巧](notes/personal-growth/study-skills/)
  - [职业规划](notes/personal-growth/career-planning/)


```
请根据实际情况调整上述内容，例如仓库地址、联系方式、笔记分类等。这个 README 文件为你的博客项目提供了一个清晰的概述，并帮助访问者快速找到他们感兴趣的内容。

> [!NOTE]
> 在 Markdown 文件上添加下面的属性，可以决定是否在当前文章中开启评论
>
> ```
> ---
> comment: true
> ---
> ```

## 知识库编写须知

由于很多时候需要重复编排和调整文档的结构和注解以适应和满足使用者的阅读习惯或是文档叙述的内容需求，以及说明使用的 API 的版本号和破坏性更新说明，可能会导致在以上或是更多外部因素的影响下导致文档结构混乱不一，查询造成困难，或是索引和快速查阅文档的时候需要花费大量的时间和精力去了解文章结构和内容，以下提出了一个较为完善（任需商议）的知识库结构、使用规范的提案。
该提案包含：

1. 对文档结构的说明
2. 对文档的版本控制和兼容性注释
3. 关于如何正确使用脚注和参考资料给文档提供更多相关联信息的指南

### 结构

一般，文档需要有以下结构（按照从上到下排列）：

1. 使用一级标题的**标题**（一般为文件名本身）
	1. 使用正文格式的**作者**
	2. *非强制* · 标签（如果有的话，方便搜索和索引）
	4. *非强制* · 使用五级标题的 **文档兼容性** （仅针对涉及了不同软件或是 API 的指南和操作文档）
	5. *非强制* · 使用五级标题的 **Archive 信息** （仅针对 **📃 Archives** 目录下的所有文档）
2. *非强制* · 使用二级标题的**概述**（仅针对超大型文档，提供概述可以提高检索和快速查阅的效率）
3. 使用二级标题的**目录**
4. 使用二级标题的**说明**
5. 有完善标题分级和注解、甚至是脚注的**正文**
6. *非强制* · 使用二级标题的**延伸阅读**或是**参考资料**（仅针对如果引用了文章、网页的绝大多数内容；没有实际引用到文档内但是值得参考和阅读的文章、网页的内容；查阅资料时遇到的（非强关联，但是也有关系的）相关内容时需要添加）
7. *非强制* · 不使用标题的**脚注**（如果有的话，通过使用脚注插件 Footnote shortcut（参考[🔌 知识库插件列表](%F0%9F%94%8C%20%E7%9F%A5%E8%AF%86%E5%BA%93%E6%8F%92%E4%BB%B6%E5%88%97%E8%A1%A8.md) ）创建，可以避免过多的引用和链接出现在正文里）

每一项的内容和说明都会在下方的文档中一一说明

### 解释

#### 标题

标题一般为文件名本身，方便查询和记忆。

##### Markdown 撰写示例

```markdown
# 标题
```

#### 标签

标签可以使得文档易于检索和串联在一起，也可以使得在阅读一篇文档之后再去阅读相关标签的其他文档时变得方便检索和寻找。

过去 [xialioNote](https://nolebase.ayaka.io) 使用 [Obsidian](https://obsidian.md) 的[基本标签](https://help.obsidian.md/Editing+and+formatting/Tags) `#标签内容`（我叫它「裸标签」）来对页面进行标记，但是存在于正文的裸标签并不利于程序化的处理，而且在实践[结构化标签（或者嵌套标签）](https://help.obsidian.md/Editing+and+formatting/Tags#Nested+tags)的时候存在于正文中的结构化标签将会在一定程度上混淆视听，为了能够更好的集成到 [xialioNote 集成](https://nolebase-integrations.ayaka.io) 来全自动处理标签，优化整体阅读体验，现在 [xialioNote](https://nolebase.ayaka.io) 在 [Obsidian](https://obsidian.md) 所兼容的 Markdown 的 [frontmatter](https://github.com/jonschlinkert/gray-matter) 添加使用 `tags` 字段来配置页面的标签。

##### Markdown 撰写示例

```
---
tags:
 - 根层级
 - 另一个根层级/某个标签
---
```

#### Archive 信息

##### 说明

对于存放在 **📃 Archives** 目录中的文件（包括文档、静态资源），都应添加 **Archive 信息** 显著的标记其来源，创建时间、以及原始资源的信息等内容。
这将确保我们在 Archive 文档或静态资源时可以保留其作者的信息和采集信息，方便未来的资料查证、资料溯源等变成可能。
另外需要注意的是，我们在进行 Archive 采集时都应该注意创作者所使用的共享协议，如果不允许转载，则不能进行 Archive 采集。

##### 字段

###### Archive 自

该字段填写该文档或者静态资源的采集来源，该字段的值需要匹配该文档或者静态资源于 **📃 Archives** 目录和分类目录下的目录名称。
比如放置在 `📃 Archives/📖 文章/Medium` 目录下的文档或者静态资源都应该在该字段中填写 `Medium`，如果可能，可以使用链接来撰写来源，这在多种同名来源的情况下将会变得非常有用。

当前支持的来源有：

| Archive 自 |
| ---- |
| 微信公众号文章 |
| CSDN |
| ADDitude |
| The Verge |
| 知乎 |

###### Archive 创建于

该字段填写该文档或者静态资源的采集时间。

###### Archive 分类

该字段填写该文档或者静态资源的分类该字段的值需要匹配该文档或者静态资源于 **📃 Archives** 目录下的目录名称。
比如放置在 `📃 Archives/📖 文章/Medium` 目录下的文档或者静态资源都应该在该字段中填写 `文章`。

###### 原始作者

该字段填写该文档或者静态资源的原始作者，如果网页没有提供原始作者的信息，比如新闻类、资讯类网站，我们则可以填写采集来源作为该字段的值。

###### 原始地址

该字段填写被采集的文档或是静态资源的原始地址。

###### 原始资源创建时间

该字段填写被采集的文档或是静态资源的原始创建时间。

###### 原始资源更新时间

该字段填写被采集的文档或是静态资源的原始更新时间。如果网页没有提供更新时间，我们则可以填写原始资源创建时间作为该字段的值。

##### Markdown 撰写示例

```markdown
##### Archive 信息

| Archive 自 | Archive 创建于 | 分类 | 原始作者 | 原始地址 | 原始资源创建时间 | 原始资源更新时间 |
| ---------- | ------------ | ---- | ------- | ------- | ------------- | ------------- |
| Medium | 2022-10-29 16:30 | 文章 | 作者 Alpha | [链接](https://example.com) | 2022-10-29 16:30 | 2022-10-29 16:30 |
```

#### 文档兼容性

##### 说明

对于涉及到软件和 API 的讲解和教程文档，应该提供**文档兼容性**部分以详细描述该文档所适配的软件或 API 版本，如此一来就可以方便我们排查破坏性更新或是兼容性导致的软件或 API 与文档中叙述的行为不一致导致的问题。

##### 字段

###### 主体

软件名称，或是 API 名称，如果是 HTTP Restful API，可以填写完整的 URI 地址。

###### 版本号

此处的版本号不需要遵循**文档版本**中提到的语义化版本 2.0.0 规范，应该直接填写应用程序或是 API 的版本。

###### 文档地址（如果有）

如果有对应的文档，则应该把对应版本的文档地址或者是参考文件地址粘贴到该字段中方便查阅。

##### Markdown 撰写示例

```markdown
### 文档兼容性

| 主体 | 版本号 | 文档地址（如果有） |
| -- | -- | -- |
| NebulaGraph | v2.6.1 | https://docs.nebula-graph.com.cn/2.6.1/ |
```

#### 概述

概述仅针对超大型文档，即目录、说明、正文的文本阅读时间超过了 30 分钟的文档。在该部分中需要提供类似于 TL;DR 的精简化说明，可能的情况下可以直接给出结论。

#### 延伸阅读或参考资料

文档所引入的外部资料、外部说明都应该有详细的来源链接可供参考。
对于值得继续阅读以探究文档所讨论的、描述的主题所相关的链接和外部资源，这些链接或是外部资源应当放置到 `## 延伸阅读` 部分。
对于撰写文档所参考的资料，这些链接或是外部资源应当放置到 `## 参考资料` 部分，或是脚注的部分。值得补充的是，对于可能年久失修、来源网站不稳定、审查过强的链接和外部资源，我们可以预先把这些链接和外部资源采集并放置到 **📃 Archives** 中方便引用。


## 如何贡献

如果你对笔记中的内容有任何建议或补充，欢迎通过以下方式贡献：
1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/your-feature`)
3. 提交你的更改 (`git commit -am 'Add some feature'`)
4. 推送到分支 (`git push origin feature/your-feature`)
5. 创建一个新的 Pull Request
## 联系我
- Email: xialio@example.com
- GitHub: [xialio](https://github.com/xialio)
- Twitter: @xialio
## 致谢
感谢以下工具和平台，它们让这个博客项目的搭建和维护变得更加简单：
- [GitHub](https://github.com/nolebase/nolebase)
- 以及所有支持和鼓励我的朋友们！
- 
## 声明

本仓库代码以 [MIT License][mit] 协议发布

本仓库除 `笔记/📃 Archives` 目录以外的文档、图片和其引用的资源均以 [CC BY-SA 4.0][cc-by-sa] 协议发布

[mit]: https://opensource.org/licenses/MIT
[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/

### 用 ♥ 撰写
