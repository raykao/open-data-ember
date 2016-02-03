define('ember-cli-app/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});