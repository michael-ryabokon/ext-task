Ext.define('Challenge.view.window.CreateEditForm', {
  extend: 'Ext.form.Panel',

  xtype: 'createEditForm',

  defaultType: 'textfield',
  defaults: {
    anchor: '100%'
  },

  items: [
    {
      fieldLabel: 'Network',
      name: 'network'
    }, {
      fieldLabel: 'Param a',
      name: 'parama'
    }, {
      fieldLabel: 'Param b',
      name: 'paramb'
    }, {
      fieldLabel: 'Param c',
      name: 'paramc'
    }
  ]
});