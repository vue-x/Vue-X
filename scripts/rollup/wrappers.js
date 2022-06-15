'use strict';

const Bundles = require('./bundles');
const vuexVersion = require('../../package.json').version;

const UMD_DEV = Bundles.bundleTypes.UMD_DEV;
const UMD_PROD = Bundles.bundleTypes.UMD_PROD;

const license = ` * Copyright (c) Vue-x and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.`;

const wrappers = {
  /***************** UMD_DEV *****************/
  [UMD_DEV](source, globalName, filename, moduleType) {
    return `/** @license Vue-x v${vuexVersion}
 * ${filename}
 *
${license}
 */

'use strict';

${source}`;
  },

  /***************** UMD_PROD *****************/
  [UMD_PROD](source, globalName, filename, moduleType) {
    return `/** @license Vue-x v${vuexVersion}
 * ${filename}
 *
${license}
 */
${source}`;
  },
};

function wrapBundle(source, bundleType, globalName, filename, moduleType) {
  // All the other packages.
  const wrapper = wrappers[bundleType];
  if (typeof wrapper !== 'function') {
    throw new Error(`Unsupported build type: ${bundleType}.`);
  }
  return wrapper(source, globalName, filename, moduleType);
}

module.exports = {
  wrapBundle,
};
