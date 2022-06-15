'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./vue-x-components.min.js');
} else {
  module.exports = require('./vue-x-components.js');
}
