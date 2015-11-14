





Ext.create('Ext.data.BufferedStore', {


    storeId:'orderstore',
  leadingBufferZone: 300,
  pageSize: 100,

    fields:['id', 'documentname', 'date'],

    proxy: {
        type: 'ajax',
      url: '/getorder',
        reader: {
            type: 'json',
          rootProperty: 'data'
        }
    },
  autoLoad: true
});




Ext.create('Ext.data.Store', {
    storeId:'nestedStore1',
    fields:['id', 'nameAuthor', 'linkfile'],

    proxy: {
        type: 'ajax',
      url: '/getnested',
        reader: {
            type: 'json',
          rootProperty: 'data'
        }
    },
  autoLoad: true

});

Ext.define('NestedGrid',{
	extend:'Ext.grid.Panel',
	xtype:'nestedgrid',
	requires:['Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*','NestedGrid.ux.RowExpanderGrid'],
	title: 'Demo вложенная таблица.',


    autoHeight:true,
    store: Ext.data.StoreManager.lookup('orderstore'),
    columns: [
        { text: 'Id',  dataIndex: 'id' },
        { text: 'Имя документа', dataIndex: 'documentname', flex: 1 },
        { text: 'Дата публикации', dataIndex: 'date', flex:1 }
    ],


  plugins:[{

		ptype:'rowexpandergrid',
		gridConfig:{
     		store:'nestedStore1',
            columns: [
                {xtype: 'rownumberer'},
                { text: "id", dataIndex: 'id' ,menuDisabled : false,resizable:true,editor:'textfield'},
                { text: "Имя пользователя", dataIndex: 'nameAuthor' ,menuDisabled : true,resizable:false,editor:'textfield'},
                { text: "Прикреп. Файл", dataIndex: 'linkfile' ,menuDisabled : true,resizable:false,editor:'numberfield'}
            ],
            columnLines: false,
            border:true,
            plugins:['rowediting'],
            autoWidth: true,
            autoHeight: true,
            frame: false,
            header:false,
            dockedItems:{
                xtype:'pagingtoolbar',
                dock:'bottom',
                layout:{pack:'center'},
                store:'nestedStore1'
            }

		}
    },
             {
                 ptype:'viewport'
             }
            ]

});

