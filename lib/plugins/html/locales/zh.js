// Chinese translations for HTML reports
export default {
  // Navigation
  'nav.summary': '摘要',
  'nav.detailed': '详细摘要',
  'nav.pages': '页面',
  'nav.domains': '域名',
  'nav.toplist': '排行榜',
  'nav.assets': '资源',
  'nav.budget': '预算',
  'nav.errors': '错误',

  // Common terms
  'common.url': 'URL',
  'common.median': '中位数',
  'common.p90': '90%分位',
  'common.value': '值',
  'common.previous': '之前',
  'common.yes': '是',
  'common.no': '否',

  // Settings page
  'settings.runtime': '运行时设置',
  'settings.version': 'Sitespeed.io 版本',
  'settings.browsertimeVersion': 'Browsertime 版本',
  'settings.testTime': '测试时间',
  'settings.browser': '浏览器',
  'settings.userAgent': '用户代理',
  'settings.emulatedMobile': '模拟移动设备',
  'settings.hostname': '主机名',
  'settings.cpuBenchmark': 'CPU 基准测试',
  'settings.usingWebPageReplay': '使用 WebPageReplay',
  'settings.usingMultiMode': '使用多页面模式',
  'settings.usingPreURL': '使用预加载 URL',
  'settings.viewPort': '视口',
  'settings.windowSize': '窗口大小',
  'settings.connectivity': '网络连接',
  'settings.noConnectivitySettings': '无网络连接设置',
  'settings.numberOfRuns': '运行次数',

  // Summary boxes
  'summary.coachOverallScore': 'Coach 总体得分',
  'summary.coachBestPracticeScore': 'Coach 最佳实践得分',
  'summary.coachPrivacyScore': 'Coach 隐私得分',
  'summary.coachPerformanceScore': 'Coach 性能得分',
  'summary.firstPaint': '首次绘制',
  'summary.firstContentfulPaint': '首次内容绘制',
  'summary.fullyLoaded': '完全加载',
  'summary.pageLoadTime': '页面加载时间',
  'summary.largestContentfulPaint': '最大内容绘制',
  'summary.totalRequests': '总请求数',
  'summary.totalTransferSize': '总传输大小',
  'summary.javascriptTransferSize': 'JavaScript 传输大小',
  'summary.cssTransferSize': 'CSS 传输大小',
  'summary.imageTransferSize': '图片传输大小',
  'summary.htmlTransferSize': 'HTML 传输大小',
  'summary.thirdPartyTransferSize': '第三方传输大小',
  'summary.thirdPartyRequests': '第三方请求数',
  'summary.cumulativeLayoutShift': '累积布局偏移',
  'summary.totalBlockingTime': '总阻塞时间',
  'summary.maxPotentialFid': '最大潜在 FID',
  'summary.longTasksTotalDuration': '长任务总时长',
  'summary.longTasks': '长任务数量',
  'summary.totalCO2': '总 CO2',
  'summary.co2PerPageView': '每次页面浏览 CO2',
  'summary.co2FirstParty': '第一方 CO2',
  'summary.co2ThirdParty': '第三方 CO2',

  // Footer
  'footer.note': '* 括号内的值是 90% 分位数（90% 的情况下，数值低于此值）',

  // Error messages
  'error.noData': '无数据',
  'error.loading': '加载中...',

  // Metric names (from friendlyNames) - using tool.metricType format
  // Coach scores
  'metric.coach.score.score': 'Coach 总体得分',
  'metric.coach.score.performance': 'Coach 性能得分',
  'metric.coach.score.accessibility': 'Coach 可访问性得分',
  'metric.coach.score.bestpractice': 'Coach 最佳实践得分',
  'metric.coach.score.privacy': 'Coach 隐私得分',

  // Browsertime timings
  'metric.browsertime.timings.firstPaint': '首次绘制',
  'metric.browsertime.timings.firstContentfulPaint': '首次内容绘制',
  'metric.browsertime.timings.fullyLoaded': '完全加载',
  'metric.browsertime.timings.pageLoadTime': '页面加载时间',
  'metric.browsertime.timings.largestContentfulPaint': '最大内容绘制',
  'metric.browsertime.timings.FirstVisualChange': '首次视觉变化',
  'metric.browsertime.timings.LastVisualChange': '最后视觉变化',
  'metric.browsertime.timings.SpeedIndex': '速度指数',
  'metric.browsertime.timings.PerceptualSpeedIndex': '感知速度指数',
  'metric.browsertime.timings.VisualReadiness': '视觉就绪',
  'metric.browsertime.timings.VisualComplete': '视觉完成',
  'metric.browsertime.timings.backEndTime': '首字节时间',

  // Google Web Vitals
  'metric.browsertime.googleWebVitals.cumulativeLayoutShift': '累积布局偏移',
  'metric.browsertime.googleWebVitals.totalBlockingTime': '总阻塞时间',

  // CPU metrics
  'metric.browsertime.cpu.longTasksTotalDuration': '长任务总时长',
  'metric.browsertime.cpu.longTasks': '长任务数量',
  'metric.browsertime.cpu.totalBlockingTime': '总阻塞时间',
  'metric.browsertime.cpu.maxPotentialFid': '最大潜在 FID',

  // PageXray requests
  'metric.pagexray.requests.total': '总请求数',
  'metric.pagexray.requests.javascript': 'JavaScript 请求数',
  'metric.pagexray.requests.css': 'CSS 请求数',
  'metric.pagexray.requests.image': '图片请求数',

  // PageXray transfer sizes
  'metric.pagexray.transferSize.total': '总传输大小',
  'metric.pagexray.transferSize.html': 'HTML 传输大小',
  'metric.pagexray.transferSize.javascript': 'JavaScript 传输大小',
  'metric.pagexray.contentSize.javascript': 'JavaScript 内容大小',
  'metric.pagexray.transferSize.css': 'CSS 传输大小',
  'metric.pagexray.transferSize.image': '图片传输大小',

  // Third party
  'metric.pagexray.thirdParty.transferSize': '第三方传输大小',
  'metric.pagexray.thirdParty.requests': '第三方请求数',

  // AXE violations
  'metric.axe.axe.critical': 'AXE 严重违规',
  'metric.axe.axe.serious': 'AXE 严重违规',
  'metric.axe.axe.minor': 'AXE 轻微违规',
  'metric.axe.axe.moderate': 'AXE 中等违规',

  // Sustainable
  'metric.sustainable.sustainable.totalCO2': '总 CO2',
  'metric.sustainable.sustainable.co2PerPageView': '每次页面浏览 CO2',
  'metric.sustainable.sustainable.co2FirstParty': '第一方 CO2',
  'metric.sustainable.sustainable.co2ThirdParty': '第三方 CO2',

  // Table headers
  'table.name': '名称',
  'table.min': '最小值',
  'table.median': '中位数',
  'table.mean': '平均值',
  'table.p90': '90%分位',
  'table.max': '最大值',
  'table.metric': '指标',
  'table.url': 'URL',
  'table.domain': '域名',
  'table.blocked': '阻塞',
  'table.dns': 'DNS',
  'table.connect': '连接',
  'table.send': '发送',
  'table.ssl': 'SSL',
  'table.wait': '等待',
  'table.receive': '接收',
  'table.totalTime': '总时间',
  'table.requests': '请求数',
  'table.type': '类型',
  'table.lastModified': '最后修改时间',
  'table.cacheTime': '缓存时间',
  'table.size': '大小',
  'table.count': '数量',
  'table.transfer': '传输大小',
  'table.timing': '时间',
  'table.content': '内容',
  'table.headerSize': '头部大小',
  'table.transferSize': '传输大小',
  'table.contentSize': '内容大小',
  'table.totalDownloadTime': '总下载时间',
  'table.contentType': '内容类型',
  'table.total': '总计',
  'table.result': '结果',
  'table.cookieName': 'Cookie 名称',
  'table.category': '类别',
  'table.numberOfTools': '工具数量',
  'table.firstVisualChange': '首次视觉变化',
  'table.speedIndex': '速度指数',
  'table.lastVisualChange': '最后视觉变化'
};
