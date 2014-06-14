Ext.define('Challenge.view.row.Control', {
	extend: 'Ext.panel.Panel',

	xtype: 'rowControl',

	layout: {
    type: 'hbox',
    align : 'stretch'
  },

	items: [{
    // add
    xtype: 'button',
    text: 'add',
    action: 'add'
  }, {
    // edit
    xtype: 'button',
    text: 'edit',
    action: 'edit'
  }, {
    // delete
    xtype: 'button',
    text: 'delete',
    action: 'delete'
  }, {
    // sortby
    xtype: 'combobox',
    editable: false,
    fieldLabel: 'Sort by',
    labelAlign: 'right',
    value: 'Updated',
    store: ['Updated', 'CTR', 'Network']
  }, {
    // search
    xtype: 'textfield',
    emptyText: 'Search',
    enableKeyEvents: true
  }]
});