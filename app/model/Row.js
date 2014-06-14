Ext.define('Challenge.model.Row', {
  extend: 'Ext.data.Model',
  fields: [{
  	name: 'checked',
  	type: 'boolean'
  }, {
		name: 'id',
		type: 'int'
	}, {
		name: 'network',
		type: 'string'
	}, {
		name: 'parama',
		type: 'int'
	}, {
		name: 'paramb',
		type: 'int'
	}, {
		name: 'paramc',
		type: 'int'
	}, {
		name: 'ctr',
		type: 'float'
	}, {
		name: 'updated',
		type: 'date'
	}]
});