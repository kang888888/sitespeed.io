// English translations for HTML reports (default)
export default {
  // Navigation
  'nav.summary': 'Summary',
  'nav.detailed': 'Detailed Summary',
  'nav.pages': 'Pages',
  'nav.domains': 'Domains',
  'nav.toplist': 'Toplist',
  'nav.assets': 'Assets',
  'nav.budget': 'Budget',
  'nav.errors': 'Errors',

  // Common terms
  'common.url': 'URL',
  'common.median': 'Median',
  'common.p90': 'P90',
  'common.value': 'Value',
  'common.previous': 'Previous',
  'common.yes': 'Yes',
  'common.no': 'No',

  // Settings page
  'settings.runtime': 'Runtime settings',
  'settings.version': 'Sitespeed.io version',
  'settings.browsertimeVersion': 'Browsertime version',
  'settings.testTime': 'Test time',
  'settings.browser': 'Browser',
  'settings.userAgent': 'User Agent',
  'settings.emulatedMobile': 'Emulated mobile',
  'settings.hostname': 'Hostname',
  'settings.cpuBenchmark': 'CPU benchmark',
  'settings.usingWebPageReplay': 'Using WebPageReplay',
  'settings.usingMultiMode': 'Using multi mode',
  'settings.usingPreURL': 'Using preURL',
  'settings.viewPort': 'View port',
  'settings.windowSize': 'Window size',
  'settings.connectivity': 'Connectivity',
  'settings.noConnectivitySettings': 'No connectivity settings',
  'settings.numberOfRuns': 'Number of runs',

  // Summary boxes
  'summary.coachOverallScore': 'Coach Overall Score',
  'summary.coachBestPracticeScore': 'Coach Best Practice Score',
  'summary.coachPrivacyScore': 'Coach Privacy Score',
  'summary.coachPerformanceScore': 'Coach Performance Score',
  'summary.firstPaint': 'First Paint',
  'summary.firstContentfulPaint': 'First Contentful Paint',
  'summary.fullyLoaded': 'Fully Loaded',
  'summary.pageLoadTime': 'Page Load Time',
  'summary.largestContentfulPaint': 'Largest Contentful Paint',
  'summary.totalRequests': 'Total Requests',
  'summary.totalTransferSize': 'Total Transfer Size',
  'summary.javascriptTransferSize': 'JavaScript Transfer Size',
  'summary.cssTransferSize': 'CSS Transfer Size',
  'summary.imageTransferSize': 'Image Transfer Size',
  'summary.htmlTransferSize': 'HTML Transfer Size',
  'summary.thirdPartyTransferSize': 'Third Party Transfer Size',
  'summary.thirdPartyRequests': 'Third Party Requests',
  'summary.cumulativeLayoutShift': 'Cumulative Layout Shift',
  'summary.totalBlockingTime': 'Total Blocking Time',
  'summary.maxPotentialFid': 'Max Potential FID',
  'summary.longTasksTotalDuration': 'Long Tasks Total Duration',
  'summary.longTasks': 'Long Tasks',
  'summary.totalCO2': 'Total CO2',
  'summary.co2PerPageView': 'CO2 per page view',
  'summary.co2FirstParty': 'CO2 per first parties',
  'summary.co2ThirdParty': 'CO2 per third parties',

  // Footer
  'footer.note': '* The value inside of the parentheses are the 90th percentile (90% of the time, the number is below this amount)',

  // Error messages
  'error.noData': 'No data',
  'error.loading': 'Loading...',

  // Metric names (from friendlyNames) - using tool.metricType format
  // Coach scores
  'metric.coach.score.score': 'Coach Overall Score',
  'metric.coach.score.performance': 'Coach Performance Score',
  'metric.coach.score.accessibility': 'Coach Accessibility Score',
  'metric.coach.score.bestpractice': 'Coach Best Practice Score',
  'metric.coach.score.privacy': 'Coach Privacy Score',

  // Browsertime timings
  'metric.browsertime.timings.firstPaint': 'First Paint',
  'metric.browsertime.timings.firstContentfulPaint': 'First Contentful Paint',
  'metric.browsertime.timings.fullyLoaded': 'Fully Loaded',
  'metric.browsertime.timings.pageLoadTime': 'Page Load Time',
  'metric.browsertime.timings.largestContentfulPaint': 'Largest Contentful Paint',
  'metric.browsertime.timings.FirstVisualChange': 'First Visual Change',
  'metric.browsertime.timings.LastVisualChange': 'Last Visual Change',
  'metric.browsertime.timings.SpeedIndex': 'Speed Index',
  'metric.browsertime.timings.PerceptualSpeedIndex': 'Perceptual Speed Index',
  'metric.browsertime.timings.VisualReadiness': 'Visual Readiness',
  'metric.browsertime.timings.VisualComplete': 'Visual Complete',
  'metric.browsertime.timings.backEndTime': 'TTFB',

  // Google Web Vitals
  'metric.browsertime.googleWebVitals.cumulativeLayoutShift': 'Cumulative Layout Shift',
  'metric.browsertime.googleWebVitals.totalBlockingTime': 'Total Blocking Time',

  // CPU metrics
  'metric.browsertime.cpu.longTasksTotalDuration': 'Total Duration of Long Tasks',
  'metric.browsertime.cpu.longTasks': 'Number of Long Tasks',
  'metric.browsertime.cpu.totalBlockingTime': 'Total Blocking Time',
  'metric.browsertime.cpu.maxPotentialFid': 'Max Potential FID',

  // PageXray requests
  'metric.pagexray.requests.total': 'Total Requests',
  'metric.pagexray.requests.javascript': 'JavaScript Requests',
  'metric.pagexray.requests.css': 'CSS Requests',
  'metric.pagexray.requests.image': 'Image Requests',

  // PageXray transfer sizes
  'metric.pagexray.transferSize.total': 'Total Transfer Size',
  'metric.pagexray.transferSize.html': 'HTML Transfer Size',
  'metric.pagexray.transferSize.javascript': 'JavaScript Transfer Size',
  'metric.pagexray.contentSize.javascript': 'JavaScript Content Size',
  'metric.pagexray.transferSize.css': 'CSS Transfer Size',
  'metric.pagexray.transferSize.image': 'Image Transfer Size',

  // Third party
  'metric.pagexray.thirdParty.transferSize': 'Third Party Transfer Size',
  'metric.pagexray.thirdParty.requests': 'Third Party Requests',

  // AXE violations
  'metric.axe.axe.critical': 'AXE Critical Violations',
  'metric.axe.axe.serious': 'AXE Serious Violations',
  'metric.axe.axe.minor': 'AXE Minor Violations',
  'metric.axe.axe.moderate': 'AXE Moderate Violations',

  // Sustainable
  'metric.sustainable.sustainable.totalCO2': 'Total CO2',
  'metric.sustainable.sustainable.co2PerPageView': 'CO2 per page view',
  'metric.sustainable.sustainable.co2FirstParty': 'CO2 per first parties',
  'metric.sustainable.sustainable.co2ThirdParty': 'CO2 per third parties',

  // Table headers
  'table.name': 'name',
  'table.min': 'min',
  'table.median': 'median',
  'table.mean': 'mean',
  'table.p90': 'p90',
  'table.max': 'max',
  'table.metric': 'Metric',
  'table.url': 'URL',
  'table.domain': 'Domain',
  'table.blocked': 'Blocked',
  'table.dns': 'DNS',
  'table.connect': 'Connect',
  'table.send': 'Send',
  'table.ssl': 'SSL',
  'table.wait': 'Wait',
  'table.receive': 'Receive',
  'table.totalTime': 'Total time',
  'table.requests': 'Requests',
  'table.type': 'type',
  'table.lastModified': 'time since last modified',
  'table.cacheTime': 'cache time',
  'table.size': 'size (kb)',
  'table.count': 'count',
  'table.transfer': 'transfer (kb)',
  'table.timing': 'timing (ms)',
  'table.content': 'Content',
  'table.headerSize': 'Header Size',
  'table.transferSize': 'Transfer Size',
  'table.contentSize': 'Content Size',
  'table.totalDownloadTime': 'Total download time',
  'table.contentType': 'Content Type',
  'table.total': 'Total',
  'table.result': 'result',
  'table.cookieName': 'Cookie name',
  'table.category': 'Category',
  'table.numberOfTools': 'Number of tools',
  'table.firstVisualChange': 'First Visual Change',
  'table.speedIndex': 'Speed Index',
  'table.lastVisualChange': 'Last Visual Change'
};
