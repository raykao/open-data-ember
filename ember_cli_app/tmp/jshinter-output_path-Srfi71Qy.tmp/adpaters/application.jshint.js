QUnit.module('JSHint - adpaters');
QUnit.test('adpaters/application.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'adpaters/application.js should pass jshint.\nadpaters/application.js: line 3, col 41, \'DataAdapterMixin\' is not defined.\n\n1 error'); 
});
