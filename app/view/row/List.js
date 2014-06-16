Ext.define('Challenge.view.row.List', {
  extend: 'Ext.grid.Panel',

  xtype: 'rowList',

  store: 'Rows',
  stripeRows: true,

  columns: [
    {
      xtype: 'checkcolumn',
      dataIndex: 'checked'
    },
    {
      header: 'Network',
      sortable: false,
      dataIndex: 'network'
    },
    {
      header: 'Param a',
      sortable: false,
      dataIndex: 'parama'
    },
    {
      header: 'Param b',
      sortable: false,
      dataIndex: 'paramb'
    },
    {
      header: 'Param c',
      sortable: false,
      dataIndex: 'paramc'
    },
    {
      header: 'CTR',
      sortable: false,
      dataIndex: 'ctr',
      renderer: function (value) {
        return parseInt(value * 100) + '%';
      }
    },
    {
      header: 'Updated',
      sortable: false,
      dataIndex: 'updated',
      renderer: Ext.util.Format.dateRenderer('Y-m-d')
    }
  ]
});