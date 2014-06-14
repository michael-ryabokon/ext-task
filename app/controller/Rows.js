Ext.define('Challenge.controller.Rows', {
  extend: 'Ext.app.Controller',

  views: ['row.List', 'row.Control'],
  models: ['Row'],
  store: ['Rows'],

  init: function () {

    this.control({
      'rowControl button[action="add"]': {
        click: this.onAdd
      },

      'rowControl button[action="edit"]': {
        click: this.onEdit
      },

      'rowControl button[action="delete"]': {
        click: this.onDelete
      },

      'rowControl textfield': {
        keydown: this.onSearch
      },

      'rowControl combobox': {
        change: this.onSortChange
      },

      'rowList checkcolumn': {
        headerclick: this.onRowSelected
      }
    });
  },

  onSearch: function (event, eventOptions) {
    var store = this.getStore('Rows'),
        value = eventOptions.currentTarget.value;

    if (eventOptions.keyCode === 13) {
      if (value !== '') {
        store.filter({
          caseSensitive: false,
          property: 'network',
          value: value
        });
      } else {
        store.clearFilter();
      }
    }
  },

  onAdd: function () {
    console.log('add');
  },

  onEdit: function () {
    console.log('edit');
  },

  onDelete: function () {
    console.log('delete');
  },

  onSortChange: function (event, newValue) {
    console.log('changes');
  },

  onRowSelected: function () {
    console.log('selected');
  }
});