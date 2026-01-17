// Metric descriptions for tooltips
// Key format: tool.metricType (e.g., 'coach.score', 'browsertime.timings.firstPaint')

export default {
  // Coach scores
  'coach.score.score': {
    en: 'Overall Coach score combining performance, accessibility, best practices, and privacy scores',
    zh: 'Coach 总体得分，综合了性能、可访问性、最佳实践和隐私得分'
  },
  'coach.score.performance': {
    en: 'Performance score based on web performance best practices',
    zh: '基于 Web 性能最佳实践的性能得分'
  },
  'coach.score.accessibility': {
    en: 'Accessibility score measuring how accessible the site is for users with disabilities',
    zh: '可访问性得分，衡量网站对残障用户的可访问性'
  },
  'coach.score.bestpractice': {
    en: 'Best practice score evaluating adherence to web development best practices',
    zh: '最佳实践得分，评估对 Web 开发最佳实践的遵循程度'
  },
  'coach.score.privacy': {
    en: 'Privacy score measuring how well the site protects user privacy',
    zh: '隐私得分，衡量网站保护用户隐私的程度'
  },

  // Browsertime timings
  'browsertime.timings.firstPaint': {
    en: 'Time when the first pixel is painted on the screen',
    zh: '屏幕上首次绘制像素的时间'
  },
  'browsertime.timings.firstContentfulPaint': {
    en: 'Time when the first content (text, image, etc.) is painted on the screen',
    zh: '首次在屏幕上绘制内容（文本、图片等）的时间'
  },
  'browsertime.timings.fullyLoaded': {
    en: 'Time when the page is fully loaded and all network activity has stopped',
    zh: '页面完全加载且所有网络活动停止的时间'
  },
  'browsertime.timings.pageLoadTime': {
    en: 'Time from navigation start to load event end',
    zh: '从导航开始到加载事件结束的时间'
  },
  'browsertime.timings.largestContentfulPaint': {
    en: 'Time when the largest content element becomes visible',
    zh: '最大内容元素变为可见的时间'
  },
  'browsertime.timings.FirstVisualChange': {
    en: 'Time when the first visual change occurs on the page',
    zh: '页面上首次发生视觉变化的时间'
  },
  'browsertime.timings.LastVisualChange': {
    en: 'Time when the last visual change occurs on the page',
    zh: '页面上最后一次发生视觉变化的时间'
  },
  'browsertime.timings.SpeedIndex': {
    en: 'Speed Index measures how quickly content is visually displayed',
    zh: '速度指数，衡量内容视觉显示的快速程度'
  },
  'browsertime.timings.PerceptualSpeedIndex': {
    en: 'Perceptual Speed Index measures perceived load speed',
    zh: '感知速度指数，衡量感知的加载速度'
  },
  'browsertime.timings.VisualReadiness': {
    en: 'Time when the page is visually ready for user interaction',
    zh: '页面在视觉上准备好供用户交互的时间'
  },
  'browsertime.timings.VisualComplete': {
    en: 'Time when the page is visually complete',
    zh: '页面在视觉上完成的时间'
  },
  'browsertime.timings.backEndTime': {
    en: 'Time to First Byte (TTFB) - time from request to first byte received',
    zh: '首字节时间（TTFB）- 从请求到接收第一个字节的时间'
  },

  // Google Web Vitals
  'browsertime.googleWebVitals.cumulativeLayoutShift': {
    en: 'Cumulative Layout Shift measures visual stability of the page',
    zh: '累积布局偏移，衡量页面的视觉稳定性'
  },
  'browsertime.googleWebVitals.totalBlockingTime': {
    en: 'Total Blocking Time measures the total time the main thread is blocked',
    zh: '总阻塞时间，衡量主线程被阻塞的总时间'
  },

  // CPU metrics
  'browsertime.cpu.longTasksTotalDuration': {
    en: 'Total duration of all long tasks that block the main thread',
    zh: '阻塞主线程的所有长任务的总时长'
  },
  'browsertime.cpu.longTasks': {
    en: 'Number of long tasks (tasks taking more than 50ms)',
    zh: '长任务数量（耗时超过 50 毫秒的任务）'
  },
  'browsertime.cpu.totalBlockingTime': {
    en: 'Total time the main thread is blocked by long tasks',
    zh: '主线程被长任务阻塞的总时间'
  },
  'browsertime.cpu.maxPotentialFid': {
    en: 'Maximum potential First Input Delay - worst-case delay for user interaction',
    zh: '最大潜在首次输入延迟 - 用户交互的最坏情况延迟'
  },

  // PageXray requests
  'pagexray.requests.total': {
    en: 'Total number of HTTP requests made to load the page',
    zh: '加载页面时发出的 HTTP 请求总数'
  },
  'pagexray.requests.javascript': {
    en: 'Number of JavaScript file requests',
    zh: 'JavaScript 文件请求数量'
  },
  'pagexray.requests.css': {
    en: 'Number of CSS file requests',
    zh: 'CSS 文件请求数量'
  },
  'pagexray.requests.image': {
    en: 'Number of image file requests',
    zh: '图片文件请求数量'
  },

  // PageXray transfer sizes
  'pagexray.transferSize.total': {
    en: 'Total size of all transferred resources (compressed)',
    zh: '所有传输资源的总大小（压缩后）'
  },
  'pagexray.transferSize.html': {
    en: 'Total size of transferred HTML resources',
    zh: '传输的 HTML 资源总大小'
  },
  'pagexray.transferSize.javascript': {
    en: 'Total size of transferred JavaScript resources',
    zh: '传输的 JavaScript 资源总大小'
  },
  'pagexray.contentSize.javascript': {
    en: 'Total uncompressed size of JavaScript resources',
    zh: 'JavaScript 资源的未压缩总大小'
  },
  'pagexray.transferSize.css': {
    en: 'Total size of transferred CSS resources',
    zh: '传输的 CSS 资源总大小'
  },
  'pagexray.transferSize.image': {
    en: 'Total size of transferred image resources',
    zh: '传输的图片资源总大小'
  },

  // Third party
  'pagexray.thirdParty.transferSize': {
    en: 'Total size of resources loaded from third-party domains',
    zh: '从第三方域名加载的资源总大小'
  },
  'pagexray.thirdParty.requests': {
    en: 'Number of requests to third-party domains',
    zh: '对第三方域名的请求数量'
  },

  // AXE violations
  'axe.axe.critical': {
    en: 'Number of critical accessibility violations found by AXE',
    zh: 'AXE 发现的严重可访问性违规数量'
  },
  'axe.axe.serious': {
    en: 'Number of serious accessibility violations found by AXE',
    zh: 'AXE 发现的严重可访问性违规数量'
  },
  'axe.axe.minor': {
    en: 'Number of minor accessibility violations found by AXE',
    zh: 'AXE 发现的轻微可访问性违规数量'
  },
  'axe.axe.moderate': {
    en: 'Number of moderate accessibility violations found by AXE',
    zh: 'AXE 发现的中等可访问性违规数量'
  },

  // Sustainable
  'sustainable.sustainable.totalCO2': {
    en: 'Total CO2 emissions from loading the page',
    zh: '加载页面产生的总 CO2 排放量'
  },
  'sustainable.sustainable.co2PerPageView': {
    en: 'CO2 emissions per page view',
    zh: '每次页面浏览的 CO2 排放量'
  },
  'sustainable.sustainable.co2FirstParty': {
    en: 'CO2 emissions from first-party resources',
    zh: '第一方资源产生的 CO2 排放量'
  },
  'sustainable.sustainable.co2ThirdParty': {
    en: 'CO2 emissions from third-party resources',
    zh: '第三方资源产生的 CO2 排放量'
  }
};
