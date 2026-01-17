# Sitespeed.io 使用指南

本文档介绍如何使用本地源码版本的 sitespeed.io 来测试网页性能，以及如何运行项目的单元测试。

## 目录

- [快速开始](#快速开始)
- [测试网页性能](#测试网页性能)
- [运行项目测试](#运行项目测试)
- [常见问题](#常见问题)
- [相关资源](#相关资源)

---

## 快速开始

### 前置要求

#### 1. Node.js 版本
- **最低版本**: Node.js 20.0.0 或更高
- 推荐使用 LTS 版本（当前为 Node.js 20.x 或 22.x）

#### 2. 安装依赖

在项目根目录运行：

```bash
npm install
```

或者使用 `npm ci`（推荐，用于 CI/CD 环境）：

```bash
npm ci
```

`npm ci` 会安装与 `package-lock.json` 完全匹配的依赖版本，确保环境一致性。

#### 3. 浏览器要求

确保已安装以下浏览器之一：
- Chrome / Chromium
- Firefox
- Edge
- Safari（仅 macOS）

---

## 测试网页性能

### 基本用法

#### 1. 测试单个网页

最简单的测试命令：

```bash
node bin/sitespeed.js https://www.example.com
```

#### 2. 指定浏览器和测试次数

使用 Chrome 浏览器，运行 5 次测试：

```bash
node bin/sitespeed.js https://www.example.com --browser chrome -n 5
```

#### 3. 测试多个网页

一次测试多个 URL：

```bash
node bin/sitespeed.js https://www.example.com https://www.example.com/about
```

#### 4. 使用 URL 文件

创建一个文本文件 `urls.txt`，每行一个 URL：

```
https://www.example.com
https://www.example.com/about
https://www.example.com/contact
```

然后运行：

```bash
node bin/sitespeed.js urls.txt
```

### 常用选项

#### 浏览器选择

```bash
# Chrome
node bin/sitespeed.js https://www.example.com --browser chrome

# Firefox
node bin/sitespeed.js https://www.example.com --browser firefox

# Edge
node bin/sitespeed.js https://www.example.com --browser edge
```

#### 测试次数

```bash
# 运行 3 次测试（默认）
node bin/sitespeed.js https://www.example.com -n 3

# 运行 5 次测试
node bin/sitespeed.js https://www.example.com -n 5
```

#### 网络条件模拟

```bash
# 3G 网络
node bin/sitespeed.js https://www.example.com --connectivity 3g

# 4G 网络
node bin/sitespeed.js https://www.example.com --connectivity 4g

# 原生网络（最快）
node bin/sitespeed.js https://www.example.com --connectivity native
```

#### 移动设备模拟

```bash
# 模拟移动设备
node bin/sitespeed.js https://www.example.com --mobile
```

#### 输出目录

```bash
# 指定结果输出目录
node bin/sitespeed.js https://www.example.com --outputFolder ./results
```

#### 设置报告语言

生成中文报告：

```bash
node bin/sitespeed.js https://www.example.com --html.locale zh
```

生成英文报告（默认）：

```bash
node bin/sitespeed.js https://www.example.com --html.locale en
```

目前支持的语言：
- `en` - 英文（默认）
- `zh` - 中文

#### 查看帮助

查看所有可用选项：

```bash
node bin/sitespeed.js --help
```

### 高级用法

#### 1. 测试缓存页面

使用 `--preURL` 参数先访问一个页面来预热缓存：

```bash
node bin/sitespeed.js --preURL https://www.example.com/documentation/ https://www.example.com/
```

#### 2. 设置 Cookie

```bash
node bin/sitespeed.js https://www.example.com --cookie name=value
```

#### 3. 设置请求头

```bash
node bin/sitespeed.js https://www.example.com --requestheader "Authorization: Bearer token123"
```

#### 4. 使用配置文件

创建配置文件 `config.json`：

```json
{
  "browsertime": {
    "iterations": 5,
    "browser": "chrome"
  },
  "connectivity": {
    "profile": "3g"
  }
}
```

然后使用：

```bash
node bin/sitespeed.js --config config.json https://www.example.com
```

#### 5. 测试用户旅程（多页面流程）

使用脚本文件测试多页面流程。创建 `journey.js`：

```javascript
export default async function (context, commands) {
  await commands.navigate('https://www.example.com');
  await commands.wait.byTime(2000);
  await commands.navigate('https://www.example.com/about');
  await commands.wait.byTime(2000);
  return commands.measure.start('https://www.example.com/contact');
};
```

运行：

```bash
node bin/sitespeed.js journey.js --multi
```

#### 6. 只生成摘要报告

```bash
node bin/sitespeed.js https://www.example.com --summary
```

#### 7. 输出 JSON 格式结果

```bash
node bin/sitespeed.js https://www.example.com --json
```

#### 8. 生成中文报告

```bash
node bin/sitespeed.js https://www.example.com --html.locale zh
```

### 查看测试结果

测试完成后，结果会保存在 `sitespeed-result/` 目录下（或你指定的输出目录）。

打开 `sitespeed-result/index.html` 查看详细的 HTML 报告。

### 实际示例

#### 示例 1：快速测试

```bash
node bin/sitespeed.js https://www.sitespeed.io -n 3 --browser chrome
```

#### 示例 2：移动端测试

```bash
node bin/sitespeed.js https://www.example.com --mobile --browser chrome -n 5
```

#### 示例 3：3G 网络下的测试

```bash
node bin/sitespeed.js https://www.example.com --connectivity 3g --browser chrome -n 5
```

#### 示例 4：完整性能分析

```bash
node bin/sitespeed.js https://www.example.com \
  --browser chrome \
  -n 5 \
  --connectivity 3g \
  --outputFolder ./my-results \
  --summary
```

#### 示例 5：测试本地开发服务器

```bash
node bin/sitespeed.js http://localhost:3000 --browser chrome -n 3
```

---

## 运行项目测试

### 运行所有单元测试

使用 npm 脚本运行所有测试：

```bash
npm test
```

或者直接使用 ava：

```bash
npx ava
```

### 测试文件位置

测试文件位于 `test/` 目录下，包括：
- `cliTests.js` - CLI 命令行测试
- `coachTests.js` - Coach 插件测试
- `domainTests.js` - 域名相关测试
- `graphiteTests.js` - Graphite 集成测试
- `slackTests.js` - Slack 集成测试
- `storageManagerTests.js` - 存储管理测试
- `pathToFolderTests.js` - 路径处理测试
- `resultUrlTests.js` - 结果 URL 测试

### 运行特定测试文件

运行单个测试文件：

```bash
npx ava test/cliTests.js
```

运行多个指定测试文件：

```bash
npx ava test/cliTests.js test/coachTests.js
```

### 测试配置

测试配置在 `package.json` 的 `ava` 字段中：

```json
"ava": {
  "files": [
    "test/**/*",
    "!test/prepostscripts",
    "!test/runWithoutCli.js",
    "!test/data"
  ]
}
```

以下目录/文件会被排除：
- `test/prepostscripts/` - 预/后处理脚本目录
- `test/runWithoutCli.js` - 非 CLI 运行脚本
- `test/data/` - 测试数据目录

### 代码质量检查

#### Lint 检查

运行 ESLint 检查：

```bash
npm run lint
```

自动修复可修复的 lint 问题：

```bash
npm run lint:fix
```

#### Pug 模板检查

检查 Pug 模板文件：

```bash
npm run pug-lint
```

#### CSS 构建验证

验证 CSS 文件是否正确构建：

```bash
npm run build:css
```

这会构建亮色和暗色主题的 CSS 文件。

### 完整测试流程

在提交代码前，建议运行完整的检查流程：

```bash
# 1. 安装/更新依赖
npm ci

# 2. 运行 lint 检查
npm run lint

# 3. 运行 Pug 模板检查
npm run pug-lint

# 4. 验证 CSS 构建
npm run build:css

# 5. 运行所有单元测试
npm test
```

### 测试框架说明

项目使用 [AVA](https://github.com/avajs/ava) 作为测试框架。

#### AVA 特性
- 并发执行测试，提高速度
- 支持 ES 模块（ESM）
- 简洁的 API
- 内置断言库

#### 测试示例

典型的测试文件结构：

```javascript
import test from 'ava';
import { SomeModule } from '../lib/some/module.js';

test('测试描述', t => {
  const result = SomeModule.doSomething();
  t.is(result, expectedValue);
});
```

### 调试测试

#### 运行单个测试并显示详细输出

```bash
npx ava test/cliTests.js --verbose
```

#### 使用 Node.js 调试器

```bash
node --inspect-brk node_modules/.bin/ava test/cliTests.js
```

然后在 Chrome DevTools 中打开 `chrome://inspect` 进行调试。

### CI/CD 测试

项目在 GitHub Actions 中运行以下测试：
- 单元测试（Node.js 20.x, 22.x, 24.x）
- Linux 浏览器测试
- Docker 容器测试
- Windows Edge 测试
- macOS Safari 测试

查看 `.github/workflows/` 目录了解 CI/CD 配置详情。

---

## 常见问题

### 网页测试相关问题

#### 1. 找不到浏览器

确保已安装 Chrome、Firefox 或 Edge 浏览器。sitespeed.io 需要真实的浏览器来运行测试。

#### 2. 测试速度慢

- 减少测试次数：`-n 1` 或 `-n 3`
- 使用 `--headless` 模式（无头浏览器）
- 关闭视频录制（如果不需要）

#### 3. 权限问题

在某些系统上，可能需要额外的权限来运行浏览器。在 Linux 上，可能需要使用 `--xvfb` 选项。

#### 4. 内存不足

如果测试大型网站，可能需要增加 Node.js 的内存限制：

```bash
node --max-old-space-size=4096 bin/sitespeed.js https://www.example.com
```

#### 5. Chrome host mapping 错误

如果看到类似 `Failed parsing rule: "MAP cache.pack.google.com 127.0.0.1"` 的错误，这通常是 Chrome 的内部警告，不会影响测试结果。如果确实需要修复，可以：

- 忽略此错误（推荐，不影响功能）
- 检查系统 hosts 文件是否有格式问题
- 确保 Chrome 和 ChromeDriver 版本匹配

### 单元测试相关问题

#### 1. 测试失败：找不到模块

确保已安装所有依赖：

```bash
npm install
```

#### 2. Node.js 版本不匹配

检查 Node.js 版本：

```bash
node --version
```

确保版本 >= 20.0.0。可以使用 [nvm](https://github.com/nvm-sh/nvm) 管理多个 Node.js 版本。

#### 3. 测试超时

某些测试可能需要较长时间。可以增加超时时间或检查网络连接。

---

## 与 Docker 版本的对比

如果你使用全局安装的 sitespeed.io 或 Docker 版本，命令会略有不同：

### Docker 版本

```bash
docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io https://www.example.com
```

### 全局安装版本

```bash
sitespeed.io https://www.example.com
```

### 本地源码版本（本文档）

```bash
node bin/sitespeed.js https://www.example.com
```

---

## 性能测试最佳实践

1. **测试次数**：对于时间指标，建议运行 3-5 次；如果需要更稳定的结果，可以增加到 7-11 次。

2. **测试页面构建**：对于页面大小、JavaScript 数量等静态信息，一次测试就足够了。

3. **网络条件**：根据你的用户群体选择合适的网络条件（3G、4G、原生等）。

4. **浏览器选择**：测试多个浏览器以获得全面的性能数据。

5. **定期测试**：建立持续监控，跟踪性能变化趋势。

---

## 相关资源

- [官方文档](https://www.sitespeed.io/documentation/sitespeed.io/)
- [配置选项](https://www.sitespeed.io/documentation/sitespeed.io/configuration/)
- [脚本编写指南](https://www.sitespeed.io/documentation/sitespeed.io/scripting/)
- [AVA 测试框架文档](https://github.com/avajs/ava/blob/main/docs/readme.md)
- [项目 README](README.md)
- [GitHub Issues](https://github.com/sitespeedio/sitespeed.io/issues)

---

## 获取帮助

如果遇到问题：

1. 运行 `node bin/sitespeed.js --help` 查看所有选项
2. 查看 [GitHub Issues](https://github.com/sitespeedio/sitespeed.io/issues)
3. 加入 [Slack 社区](https://join.slack.com/t/sitespeedio/shared_invite/zt-296jzr7qs-d6DId2KpEnMPJSQ8_R~WFw)
