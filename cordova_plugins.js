cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "monaca-plugin-monaca-core.monaca",
      "file": "plugins/monaca-plugin-monaca-core/www/monaca.js",
      "pluginId": "monaca-plugin-monaca-core",
      "merges": [
        "monaca"
      ]
    }
  ];
  module.exports.metadata = {
    "monaca-plugin-monaca-core": "3.3.1"
  };
});