Ext.define('Challenge.controller.Rows', {
  extend: 'Ext.app.Controller',

  views: [
    'row.List',
    'row.Control',
    'window.DialogWindow',
    'window.CreateEditForm'
  ],

  refs: [
    {
      ref: 'editButton',
      selector: 'rowControl button[action="edit"]'
    }, {
      ref: 'deleteButton',
      selector: 'rowControl button[action="delete"]'
    }
  ],

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
        checkchange: this.onRowSelected.bind(this)
      }
    });
  },

  onAdd: function () {
    this.dialog = Challenge.view.window.DialogWindow.create({
      title: 'Add new row',
      items: {
        xtype: 'createEditForm'
      },
      buttons: [{
        text: 'add',
        action: 'add',
        handler: this.onAddRow.bind(this)
      }]
    }).show();
  },

  onAddRow: function () {
    var data = this.dialog.down('form').getForm().getValues();

    this.getStore('Rows').add(data);
    this.dialog.close();
  },

  onEdit: function () {
    this.selectedModel = this.getStore('Rows').findRecord('checked', true);

    this.dialog = Challenge.view.window.DialogWindow.create({
      title: 'Edit row',
      items: {
        xtype: 'createEditForm'
      },
      buttons: [{
        text: 'edit',
        action: 'edit',
        handler: this.onEditRow.bind(this)
      }]
    });
    this.dialog
        .show()
        .down('form')
        .getForm()
        .loadRecord(this.selectedModel);
  },

  onEditRow: function () {
    var data = this.dialog.down('form').getForm().getValues();

    this.selectedModel.set(data);
    this.dialog.close();
  },

  onDelete: function () {
    this.getStore('Rows').remove(this.getCheckedRows());
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

  onRowSelected: function () {
    var checkedLength = this.getCheckedRows().length;

    this.getEditButton()[(checkedLength === 1) ? 'enable' : 'disable']();
    this.getDeleteButton()[(checkedLength >= 1) ? 'enable' : 'disable']();
  },

  onSortChange: function (event, newValue) {
    console.log('changes');
  },

  getCheckedRows: function () {
    var store = this.getStore('Rows'),
        checked = [];

    store.each(function (model) {
      model.get('checked') && checked.push(model);
    });

    return checked;
  }
});