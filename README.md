# sitespeed.io

[![单元测试](https://github.com/sitespeedio/sitespeed.io/actions/workflows/unittests.yml/badge.svg)](https://github.com/sitespeedio/sitespeed.io/actions/workflows/unittests.yml)
[![Linux 浏览器](https://github.com/sitespeedio/sitespeed.io/actions/workflows/linux.yml/badge.svg)](https://github.com/sitespeedio/sitespeed.io/actions/workflows/linux.yml)
[![Docker](https://github.com/sitespeedio/sitespeed.io/actions/workflows/docker.yml/badge.svg)](https://github.com/sitespeedio/sitespeed.io/actions/workflows/docker.yml)
[![Docker 安全扫描](https://github.com/sitespeedio/sitespeed.io/actions/workflows/docker-scan.yml/badge.svg)](https://github.com/sitespeedio/sitespeed.io/actions/workflows/docker-scan.yml)
[![Windows Edge](https://github.com/sitespeedio/sitespeed.io/actions/workflows/windows.yml/badge.svg)](https://github.com/sitespeedio/sitespeed.io/actions/workflows/windows.yml)
[![OSX Safari](https://github.com/sitespeedio/sitespeed.io/actions/workflows/safari.yml/badge.svg)](https://github.com/sitespeedio/sitespeed.io/actions/workflows/safari.yml)
[![测试上传功能](https://github.com/sitespeedio/sitespeed.io/actions/workflows/upload.yml/badge.svg)](https://github.com/sitespeedio/sitespeed.io/actions/workflows/upload.yml)
[![下载量][downloads-image]][downloads-url]
[![Docker][docker-image]][docker-url]
[![星标数][stars-image]][stars-url]
[![npm][npm-image]][npm-url]
[![更新日志 #212][changelog-image]][changelog-url]

**语言**:  [中文](README.md) |[English](README.en.md) 

[网站](https://www.sitespeed.io/) | [文档](https://www.sitespeed.io/documentation/sitespeed.io/) | [更新日志](https://github.com/sitespeedio/sitespeed.io/blob/main/CHANGELOG.md) | [Bluesky](https://bsky.app/profile/sitespeed.io) | [Mastodon](https://fosstodon.org/@sitespeedio)



# 目录
- [欢迎来到精彩的 Web 性能世界](#欢迎来到精彩的-web-性能世界)
  - [什么是 sitespeed.io？](#什么是-sitespeedio)
  - [为什么选择 sitespeed.io？](#为什么选择-sitespeedio)
  - [深入了解我们的文档](#深入了解我们的文档)
- [安装](#安装)
  - [Docker](#docker)
  - [NodeJS](#nodejs)
- [使用](#使用)
  - [基本用法](#基本用法)
  - [高级配置](#高级配置)
  - [移动端性能测试](#移动端性能测试)
- [示例](#示例)
- [贡献](#贡献)
- [问题反馈](#问题反馈)
- [社区和支持](#社区和支持)
- [许可证](#许可证)



# 欢迎来到精彩的 Web 性能世界！

欢迎使用 `sitespeed.io`，这是一款专为所有热爱 Web 速度的人设计的综合 Web 性能工具。无论您是开发者、网站所有者，还是对网站性能感兴趣的人，`sitespeed.io` 都提供了一种强大而友好的方式来分析和优化您的网站。

## 什么是 sitespeed.io？

`sitespeed.io` 不仅仅是一个工具；它是一个完整的解决方案，用于测量、监控和改进您网站的性能。它设计简洁高效，使您能够：

- **使用真实浏览器测试网站**：模拟真实用户交互和条件，获得准确的性能数据。
- **速度优化反馈**：获取有关网站构建的详细见解，发现提升速度的机会。
- **跟踪性能趋势**：监控网站性能的变化和趋势，提前发现潜在问题。

`sitespeed.io` 的使用场景：
- **Web 性能审计**：从终端运行性能测试。
- **持续集成**：在开发周期早期检测 Web 性能回归。
- **生产环境监控**：监控生产环境的性能，并在出现回归时收到警报。

## 为什么选择 sitespeed.io？

- **开源和社区驱动**：由社区构建和维护，确保持续改进和创新。
- **多功能且可扩展**：无论您运行的是简单的博客还是复杂的电子商务网站，`sitespeed.io` 都能适应您的需求。
- **无缝集成**：轻松将 `sitespeed.io` 集成到您的开发工作流、持续集成系统和监控设置中。

## 深入了解我们的文档

我们在[文档](https://www.sitespeed.io/documentation/sitespeed.io/)上投入了大量时间，帮助您充分利用 `sitespeed.io`。从安装指南到高级使用场景，我们的文档是信息和技巧的宝库。


# 安装

开始使用 `sitespeed.io` 非常简单。您可以使用 Docker 或 NodeJS 安装，具体取决于您的偏好和设置。按照以下简单步骤开始优化您网站的性能。

## Docker

使用 Docker 是开始使用 `sitespeed.io` 最简单的方法，特别是如果您不想手动处理依赖项。运行以下命令在 Docker 容器中使用 `sitespeed.io`：

 ```bash
 docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io https://www.sitespeed.io/
 ```

此命令拉取最新的 sitespeed.io Docker 镜像并在 sitespeed.io 网站上运行测试。**-v "$(pwd)":/sitespeed.io** 部分将当前目录挂载到容器中，使您可以轻松访问测试结果。

## NodeJS

如果您更喜欢将 `sitespeed.io` 安装为 npm 包，请确保您的系统上已安装 NodeJS。然后，使用 npm 全局安装 `sitespeed.io`：

 ```bash
 npm i -g sitespeed.io
 ```

 安装后，您可以通过运行以下命令开始使用 sitespeed.io：
  
```bash
sitespeed.io https://www.example.com
```

将 https://www.example.com 替换为您要测试的 URL。请注意，使用 NodeJS 可能需要额外的依赖项，如 FFmpeg 和 Python。这些依赖项的详细安装说明可以在[这里](https://www.sitespeed.io/documentation/sitespeed.io/installation/)找到。

选择最适合您环境的方法，准备使用 sitespeed.io 深入 Web 性能优化！

# 使用

`sitespeed.io` 专为用户友好而设计，使 Web 性能测试变得易于使用，无论您的技术水平如何。以下是一个简单的指南，帮助您开始 Web 性能优化之旅。

## 基本用法

要开始测试您的网站，只需运行 `sitespeed.io` 并指定您要分析的网站 URL。例如：

 ```bash
sitespeed.io https://www.example.com --browser chrome -n 5
 ```

此命令使用 Chrome 测试 https://www.example.com 并执行 5 次测试迭代。这种方法通过多次测试网站来获得更准确的中位数性能测量。

### 生成中文报告

要生成中文版本的 HTML 报告，可以使用 `--html.locale zh` 参数：

 ```bash
sitespeed.io https://www.example.com --html.locale zh
 ```

这将生成包含中文导航、表头和指标说明的报告。默认情况下，报告使用英文（`--html.locale en`）。

## 高级配置

sitespeed.io 提供广泛的配置选项，以根据您的特定需求定制测试。您可以指定不同的浏览器、调整连接设置、选择报告语言等等。有关所有可用选项的完整列表，请访问我们的[配置文档](https://www.sitespeed.io/documentation/sitespeed.io/configuration/)。

### 语言选项

通过 `--html.locale` 参数可以设置 HTML 报告的语言。目前支持：
- `zh` - 中文
- `en` - 英文（默认）

```bash
# 生成中文报告
sitespeed.io https://www.example.com --html.locale zh

# 生成英文报告（默认）
sitespeed.io https://www.example.com --html.locale en
```

此外，要快速查看所有命令行选项，您可以运行：

```bash
sitespeed.io --help
```

此命令显示您可以在 sitespeed.io 中使用的所有可用标志和设置，帮助您微调性能测试以适应您的独特需求。

无论您是进行快速检查还是详细分析，sitespeed.io 都提供了深入了解和改进网站性能所需的灵活性和功能。

## 移动端性能测试

在当今移动优先的世界中，确保您的网站在智能手机和平板电脑上表现最佳至关重要。使用 `sitespeed.io`，您可以模拟和分析网站在移动设备上的性能，帮助您了解并改善移动用户的体验。

### 为什么要在移动设备上测试？

- **用户体验**：很大一部分 Web 流量来自移动设备。在移动设备上测试可确保您的网站为这些用户进行了优化。
- **搜索引擎排名**：像 Google 这样的搜索引擎在其搜索结果中优先考虑移动友好的网站。
- **性能洞察**：移动设备具有与桌面不同的性能特征，例如 CPU 限制和网络可变性。

### sitespeed.io 如何帮助

- **真实浏览器测试**：模拟移动浏览器以获得真实用户所体验的准确性能数据。
- **设备特定指标**：深入了解您的网站在不同移动设备和网络上的表现。
- **响应式设计分析**：测试您的网站如何适应各种屏幕尺寸和方向。

### 开始使用

要开始测试您网站的移动性能，您需要设置手机进行测试。我们有[设置 Android 手机的文档](https://www.sitespeed.io/documentation/sitespeed.io/mobile-phones/#test-on-android)和[iOS](https://www.sitespeed.io/documentation/sitespeed.io/mobile-phones/#test-on-ios)。

设置完成后，您可以在 Android 手机上运行测试。

```bash
sitespeed.io https://www.example.com --android
```

## 示例

`sitespeed.io` 提供富有洞察力的 HTML 报告，帮助您可视化和理解网站的性能。以下是一些示例，说明您可以实现的目标：

### 摘要报告

以下是 HTML 摘要报告的示例，提供您网站性能指标的全面概述：

![摘要报告](https://raw.githubusercontent.com/sitespeedio/sitespeed.io/main/docs/img/start-readme.jpg)

此报告包括关键性能指标，如加载时间、页面大小和请求数，为您提供网站整体健康状况的快速快照。

### 单个页面报告

要进行更详细的分析，以下是单个页面报告：

![单个页面报告](https://raw.githubusercontent.com/sitespeedio/sitespeed.io/main/docs/img/start-url-readme.jpg)

此报告深入分析单个页面的性能，提供脚本、渲染和网络活动等方面的指标，这对于确定需要改进的特定领域至关重要。

### 性能监控仪表板

要监控您网站随时间的性能，请查看我们在 [dashboard.sitespeed.io](https://dashboard.sitespeed.io/) 的实时设置，它将 `sitespeed.io` 与 Graphite 和 Grafana 集成。

#### Graphite/Grafana 中的指标

从 URL 收集并在 Graphite/Grafana 中可视化的指标：

![Graphite/Grafana 指标](https://raw.githubusercontent.com/sitespeedio/sitespeed.io/main/docs/img/grafana-readme.jpg)

此设置允许持续跟踪性能，帮助您识别趋势和潜在问题。

#### Grafana 中的趋势

Grafana 中随时间的趋势提供您网站性能的长期视图：

![Grafana 趋势](https://raw.githubusercontent.com/sitespeedio/sitespeed.io/main/docs/img/grafana-trends-readme.jpg)

通过这些洞察，您可以就优化做出明智的决策，并跟踪您所做更改的影响。

### 视频性能分析

为了获得视觉反馈，`sitespeed.io` 可以生成视频，使您更容易看到网站如何实时加载。以下是示例视频：

![视频分析](https://raw.githubusercontent.com/sitespeedio/sitespeed.io/main/docs/img/barack.gif)

视频分析最容易使用 Docker 完成，并提供用户体验的独特视角，突出需要关注的领域。


# 贡献

我们欢迎社区的贡献！无论您是修复错误、添加功能还是改进文档，您的帮助都是有价值的。以下是如何贡献：

1. **创建问题**：创建问题并与我们讨论如何实现该问题。
2. **Fork 和克隆**：Fork 仓库并在本地克隆它。
3. **创建分支**：为您的功能或错误修复创建新分支。
4. **开发**：进行更改。确保您遵守编码标准，并在适用时编写测试。
5. **测试**：运行测试以确保一切按预期工作。
6. **提交 Pull Request**：将您的更改推送到您的 fork 并提交 pull request 到主仓库。

在贡献之前，请阅读我们的 [CONTRIBUTING.md](.github/CONTRIBUTING.md) 以获取有关如何贡献的更详细信息。

# 问题反馈

发现错误或有功能请求？请使用 [GitHub Issues](https://github.com/sitespeedio/sitespeed.io/issues) 报告它们。请务必检查现有问题以避免重复。

# 社区和支持

加入我们的社区！无论您需要帮助、想要分享您的经验，还是讨论潜在的改进，都有几种方式可以参与：

- **Slack**：在 [Slack](https://join.slack.com/t/sitespeedio/shared_invite/zt-296jzr7qs-d6DId2KpEnMPJSQ8_R~WFw) 上与用户和开发团队联系。
- **GitHub Issues**：对于技术问题、功能请求和错误报告，请使用我们的 [GitHub issues](https://github.com/sitespeedio/sitespeed.io/issues)。
- **RSS/更新日志**：最新版本和信息始终可以在我们的 [RSS feed](https://github.com/sitespeedio/sitespeed.io/releases.atom) 和[更新日志](https://github.com/sitespeedio/sitespeed.io/blob/main/CHANGELOG.md)中找到。
- **Mastodon**：在 Mastodon 上关注我们 [https://fosstodon.org/@sitespeedio](https://fosstodon.org/@sitespeedio)。

我们很高兴您加入我们的社区，期待您的贡献和互动！

# 许可证
[The MIT License (MIT)](LICENSE)。

[stars-url]: https://github.com/sitespeedio/sitespeed.io/stargazers
[stars-image]: https://img.shields.io/github/stars/sitespeedio/sitespeed.io.svg?style=flat-square
[downloads-image]: https://img.shields.io/npm/dt/sitespeed.io.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/sitespeed.io
[docker-image]: https://img.shields.io/docker/pulls/sitespeedio/sitespeed.io.svg
[docker-url]: https://hub.docker.com/r/sitespeedio/sitespeed.io/
[changelog-image]: https://img.shields.io/badge/changelog-%23212-lightgrey.svg?style=flat-square
[changelog-url]: https://changelog.com/212
[npm-image]: https://img.shields.io/npm/v/sitespeed.io.svg
[npm-url]: https://npmjs.org/package/sitespeed.io
