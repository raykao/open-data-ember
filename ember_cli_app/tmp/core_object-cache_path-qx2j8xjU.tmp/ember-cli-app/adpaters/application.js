define('ember-cli-app/adpaters/application', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].JSONAPIAdapter.extend(DataAdapterMixin, {
    host: 'http://localhost:8000'
  });

});