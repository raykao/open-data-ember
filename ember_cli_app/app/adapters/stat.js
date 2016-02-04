import ApplicationAdapter from './application';
import Ember from 'ember';

var $ = Ember.$;

function extractStats(htmlDocument) {
  var stats = [];

  var rows = $(htmlDocument).find('tbody tr');

  $.each(rows, function(_, row){
    let props = $(row).find('td');
    
    let stat = {        
      id: $.trim($(props[0]).text()),
      age: $.trim($(props[1]).text()),
      gender: $.trim($(props[2]).text()),
      height: $.trim($(props[3]).text()),
      eyeColour: $.trim($(props[4]).text()),
    };

    stats.push(stat);
  });

  return {stats};
}

export default ApplicationAdapter.extend({
  host: 'http://localhost:8000',

  findAll: function(store, type) {
    var url = this.get('host');

    return new Ember.RSVP.Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();

      xhr.open("GET", url, true);
      xhr.responseType = "document";

      xhr.onload = () => {
        let payload = extractStats(xhr.response);
        Ember.run(null, resolve, payload);
      };

      xhr.onerror = () => Ember.run(null, reject, xhr.statusText);

      xhr.send();
    });
  }
});
