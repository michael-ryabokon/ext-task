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
			}
		});
	},

	onAdd: function () {
		console.log('add');
	},

	onEdit: function () {
		console.log('edit');
	},

	onDelete: function () {
		console.log('delete');
	}
});