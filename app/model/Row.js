Ext.define('Challenge.model.Row', {
  extend: 'Ext.data.Model',
  fields: [
    {
      name: 'checked',
      type: 'boolean'
    },
    {
      name: 'id',
      type: 'int'
    },
    {
      name: 'network',
      type: 'string'
    },
    {
      name: 'parama',
      type: 'string'
    },
    {
      name: 'paramb',
      type: 'string'
    },
    {
      name: 'paramc',
      type: 'string'
    },
    {
      name: 'ctr',
      type: 'float'
    },
    {
      name: 'updated',
      type: 'date',
      defaultValue: new Date()
    }
  ]
});