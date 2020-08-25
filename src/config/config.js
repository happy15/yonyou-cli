require('./configReplace');
let globalENVObj = require('../asset/utils/globalENVObj.js');

let globalYonyouCoordinationCliTopLevelObj = globalENVObj.globalYonyouCoordinationCliTopLevelObj;
let globalSeparateYonbipHostFileConfig = globalYonyouCoordinationCliTopLevelObj.globalSeparateYonbipHostFileConfig;
let ENVHost = globalSeparateYonbipHostFileConfig[__ENV__];

module.exports = (ENVHost && (ENVHost instanceof Object)) ? ENVHost : globalSeparateYonbipHostFileConfig;
