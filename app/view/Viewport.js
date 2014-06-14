Ext.define('Challenge.view.Viewport', {
  extend: 'Ext.container.Viewport',

  requires: [
    'Challenge.view.row.Control', 
    'Challenge.view.row.List'
  ],

  items: [{
    // main container
    xtype: 'container',
    layout: {
      type: 'vbox',
      align : 'stretch'
    },
    items: [{
      // control panel
      xtype: 'rowControl'
    }, {
      // grid
      xtype: 'rowList'

    }]    
  }]
});