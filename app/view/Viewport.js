Ext.define('Challenge.view.Viewport', {
  extend: 'Ext.container.Viewport',

  requires: [
    'Challenge.view.row.Control',
    'Challenge.view.row.List'
  ],

  items: [
    {
      // main container
      xtype: 'container',
      style: {
        margin: '100px auto',
        width: '700px'
      },
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      items: [
        {
          // control panel
          xtype: 'rowControl'
        },
        {
          // grid
          xtype: 'rowList'
        }
      ]
    }
  ]
});