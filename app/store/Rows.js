Ext.define('Challenge.store.Rows', {
  extend: 'Ext.data.Store',
  model: 'Challenge.model.Row'
  
  /*,autoLoad: true,
  proxy: {
    type: 'ajax',
    url: 'data/data.json',
    reader: {
      type: 'json',
      root: 'rows',
      totalCountProperty: 'totalCount'
    }
  }*/

  ,data: [{
    "id": 1,
    "network": "Adfonic",
    "parama": 1,
    "paramb": 12,
    "paramc": 34,
    "ctr": 0.01,
    "updated": "05/12/2012"
  }, {
    "id": 2,
    "network": "InMobi",
    "parama": 2,
    "paramb": 18,
    "paramc": 39,
    "ctr": 0.12,
    "updated": "05/04/2012"
  }, {
    "id": 3,
    "network": "MobGold",
    "parama": 3,
    "paramb": 65,
    "paramc": 83,
    "ctr": 0.55,
    "updated": "05/01/2012"
  }]
});