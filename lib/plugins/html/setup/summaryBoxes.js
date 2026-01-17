import { getLogger } from '@sitespeed.io/log';
const log = getLogger('sitespeedio.plugin.html');
import { toArray } from '../../../support/util.js';
import friendlyNames from '../../../support/friendlynames.js';
import get from 'lodash.get';
import defaultLimits from './summaryBoxesDefaultLimits.js';
import merge from 'lodash.merge';
import metricDescriptions from './metricDescriptions.js';

function infoBox(stat, name, formatter, box, limits, description) {
  if (stat === undefined) {
    return;
  }

  return _box(stat, name, 'info', formatter, name.replaceAll(/\s/g, ''), description);
}

function scoreBox(stat, name, formatter, box, limits, description) {
  if (stat === undefined) {
    return;
  }

  let label = 'info';

  if (limits && limits.green) {
    if (stat.median >= limits.green) {
      label = 'ok';
    } else if (stat.median >= limits.yellow) {
      label = 'warning';
    } else {
      label = 'error';
    }
  }
  return _box(stat, name, label, formatter, name.replaceAll(/\s/g, ''), description);
}

function timingBox(stat, name, formatter, box, limits, description) {
  if (stat === undefined) {
    return;
  }

  let label = 'info';

  if (limits && limits.green) {
    if (stat.median < limits.green) {
      label = 'ok';
    } else if (stat.median < limits.yellow) {
      label = 'warning';
    } else {
      label = 'error';
    }
  }

  return _box(stat, name, label, formatter, name.replaceAll(/\s/g, ''), description);
}

function pagexrayBox(stat, name, formatter, box, limits, description) {
  if (stat === undefined) {
    return;
  }

  let label = 'info';
  if (limits && limits.green) {
    if (stat.median < limits.green) {
      label = 'ok';
    } else if (stat.median < limits.yellow) {
      label = 'warning';
    } else {
      label = 'error';
    }
  }

  return _box(stat, name, label, formatter, name.replaceAll(/\s/g, ''), description);
}

function axeBox(stat, name, formatter, url, limits, description) {
  if (stat === undefined) {
    return;
  }
  let label = 'info';

  if (limits) {
    if (stat.median < limits.green) {
      label = 'ok';
    } else if (stat.median < limits.yellow) {
      label = 'warning';
    } else {
      label = 'error';
    }
  }

  if (stat.median !== undefined) {
    return _box(stat, name, label, formatter, url, description);
  }
}

function _box(stat, name, label, formatter, url, description) {
  const median = formatter ? formatter(stat.median) : stat.median;
  const p90 = formatter ? formatter(stat.p90) : stat.p90;
  return {
    name,
    label,
    median,
    p90,
    url,
    description
  };
}

export default function parse(data, html, translations = {}, locale = 'en') {
  if (!data) {
    return [];
  }
  const tools = Object.keys(data);
  const boxes = [];

  const limits = merge(defaultLimits, html.summaryBoxesThresholds || {});
  for (let tool of tools) {
    const configuredBoxes = toArray(html.summaryBoxes);
    for (let box of configuredBoxes) {
      // const [part1, part2] = box.split('.');
      const friendly = get(friendlyNames, tool + '.' + box);
      if (friendly) {
        // Debug: log translation lookup
        if (locale === 'zh' && !translations || Object.keys(translations).length === 0) {
          log.verbose(`Warning: translations object is empty for locale: ${locale}`);
        }
        let boxType;
        switch (tool) {
          case 'coach': {
            boxType = scoreBox;
            break;
          }
          case 'axe': {
            boxType = axeBox;
            break;
          }
          case 'pagexray': {
            boxType = pagexrayBox;
            break;
          }
          case 'browsertime': {
            boxType = timingBox;
            break;
          }
          default: {
            boxType = infoBox;
          }
        }

        // Get metric description
        const metricKey = `${tool}.${box}`;
        const descriptionObj = metricDescriptions[metricKey];
        let description = '';
        if (descriptionObj) {
          description = descriptionObj[locale] || descriptionObj.en || '';
        }

        // Get translated metric name
        const metricNameKey = `metric.${metricKey}`;
        let metricName = friendly.name;
        if (translations && typeof translations === 'object' && translations[metricNameKey]) {
          metricName = translations[metricNameKey];
        } else if (locale === 'zh' && translations && typeof translations === 'object') {
          // Debug: log when translation is not found
          log.verbose(`Translation not found for metric: ${metricNameKey} (tool: ${tool}, box: ${box}), using English name: ${friendly.name}`);
        }

        const stats = get(data, tool + '.summary.' + friendly.summaryPath);
        const boxLimits = get(limits, box);
        if (stats !== undefined) {
          boxes.push(
            boxType(stats, metricName, friendly.format, box, boxLimits, description)
          );
        } else if (friendly.path) {
          const metric = get(data, tool + '.summary.' + friendly.path);
          if (metric === undefined) {
            log.verbose('Summary box without any match:' + friendly.name);
          } else {
            boxes.push(
              boxType(metric, metricName, friendly.format, box, boxLimits, description)
            );
          }
        }
      }
    }
  }
  return boxes;
}
