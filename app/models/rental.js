import Model from '@ember-data/model';

export default Model.extend({
    title: DS.attr(),
    owner: DS.attr(),
    city: DS.attr(),
    category: DS.attr(),
    image: DS.attr(),
    bedrooms: DS.attr(),
    description: DS.attr()
});
