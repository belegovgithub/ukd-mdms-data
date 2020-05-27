"use strict";

var globalConfigs = function () {
  var stateTenantId = 'uk';
  var gmaps_api_key = 'AIzaSyAQOd09-vjmk1sXFb_ZQYDz2nlfhXq7Wf8';

  var getConfig = function getConfig(key) {
    if (key === 'STATE_LEVEL_TENANT_ID') {
      return stateTenantId;
    } else if (key === 'GMAPS_API_KEY') {
      return gmaps_api_key;
    }
  };

  return {
    getConfig: getConfig
  };
}();
