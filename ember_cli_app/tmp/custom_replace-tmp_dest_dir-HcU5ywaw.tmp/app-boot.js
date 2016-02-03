/* jshint ignore:start */

define('ember-cli-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-cli-app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("ember-cli-app/tests/test-helper");
} else {
  require("ember-cli-app/app")["default"].create({"name":"ember-cli-app","version":"0.0.0+ca2c0d2b"});
}

/* jshint ignore:end */
