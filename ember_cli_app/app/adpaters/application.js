import DS from "ember-data";

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: 'http://localhost:8000'
});
