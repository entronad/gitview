const path = require('path');
const fs = require('fs');

const defaultVars = require('antd-mobile/lib/style/themes/default.native');
const customVars = require('./src/config/styles');

const themePath = path.resolve(require.resolve('antd-mobile'), '../style/themes/default.native.js');
const themeVars = Object.assign({}, defaultVars, customVars);

if (fs.statSync(themePath).isFile()) {
  fs.writeFileSync(
    themePath,
    `var brandPrimary = "${customVars.brandPrimary}"; var brandPrimaryTap = "${customVars.brandPrimaryTap}"; module.exports = ${JSON.stringify(themeVars)}`,
  );
}
