'use strict';

const bundleTypes = {
  UMD_DEV: 'UMD_DEV',
  UMD_PROD: 'UMD_PROD',
};

const UMD_DEV = bundleTypes.UMD_DEV;
const UMD_PROD = bundleTypes.UMD_PROD;

const moduleTypes = {
  COMPONENT: 'COMPONENT',
  UI: 'UI',
};

// Vue Components
const COMPONENT = moduleTypes.COMPONENT;
const UI = moduleTypes.UI;

const bundles = [
  /******* Vue Components (experimental) *******/
  {
    bundleTypes: [UMD_DEV, UMD_PROD],
    moduleType: COMPONENT,
    entry: '@vue-x/vue-x-components',
    global: 'VueComponents',
    externals: [
      'vue',
      '@popperjs/core',
      'date-fns',
    ],
  },
];
// Based on deep-freeze by substack (public domain)
function deepFreeze(o) {
  Object.freeze(o);
  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (
      o[prop] !== null &&
      (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
      !Object.isFrozen(o[prop])
    ) {
      deepFreeze(o[prop]);
    }
  });
  return o;
}

// Don't accidentally mutate config as part of the build
deepFreeze(bundles);

module.exports = {
  bundleTypes,
  moduleTypes,
  bundles,
};
