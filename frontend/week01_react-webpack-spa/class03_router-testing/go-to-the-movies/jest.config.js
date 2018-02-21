/* eslint-env node */
module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/enzyme.setup.js',
  transform: {
    '.*': '<rootDir>/node_modules/jest-css-modules'
  }
};