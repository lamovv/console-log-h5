const {defaults} = require('jest-config');
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions],
  moduleNameMapper: {
    '.scss$': 'jest-css-modules'
  }
};