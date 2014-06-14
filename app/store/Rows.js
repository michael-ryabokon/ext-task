Ext.define('Challenge.store.Rows', {
  extend: 'Ext.data.Store',
  model: 'Challenge.model.Row',

  autoLoad: true,

  proxy: {
    type: 'ajax',
    url: 'data/data.json',
    reader: {
      type: 'json',
      root: 'rows',
      totalCountProperty: 'totalCount'
    }
  }
});