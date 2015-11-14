/**
 * Created by Moon on 13.11.2015.
 */


Ext.application({
  name : 'NestedGrid',

  launch : function() {
    //Ext.Msg.alert('Fiddle', 'Welcome to Sencha Fiddle!');
    Ext.create('NestedGrid',{
      //plugins:[{ptype:'viewport'}],
      renderTo:Ext.getBody()
    });
  }
});


Ext.onReady(function() {

Ext.create('Ext.data.Store', {
  storeId:'orderstore',
  fields:['orderid', 'amt', 'date'],
  data:{'items':[
    { 'orderid': 'O12',  "amt":"1000",  "date":"29/05/2015"  },
    { 'orderid': 'O121',  "amt":"1200",  "date":"29/05/2015" },
    { 'orderid': 'O122', "amt":"1100",  "date":"29/05/2015"  },
    { 'orderid': 'O123', "amt":"900", "date":"29/05/2015"  }
  ]},
  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      rootProperty: 'items'
    }
  }
});

Ext.create('Ext.data.Store', {
  storeId:'nestedStore1',
  fields:['productid', 'productName', 'qty'],
  data:{'items':[
    { 'productid': 'pr-1',  "productName":"Orange",  "qty":"5"  },
    { 'productid': 'pr-2',  "productName":"Apple",  "qty":"6" },
    { 'productid': 'pr-3', "productName":"papaya",  "qty":"3"  },
    { 'productid': 'pr-4', "productName":"Mango", "qty":"9"  }
  ]},
  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      rootProperty: 'items'
    }
  }
});

Ext.define('NestedGrid',{
  extend:'Ext.grid.Panel',
  xtype:'nestedgrid',
  requires:['Ext.grid.Panel','NestedGrid.ux.RowExpanderGrid'],
  title: 'Orders',
  autoHeight:true,
  store: Ext.data.StoreManager.lookup('orderstore'),
  columns: [
    { text: 'Order Id',  dataIndex: 'orderid' },
    { text: 'Amount', dataIndex: 'amt', flex: 1 },
    { text: 'Date', dataIndex: 'date' }
  ],
  plugins:[{

    ptype:'rowexpandergrid',
    gridConfig:{
      store:'nestedStore1',
      columns: [
        {xtype: 'rownumberer'},
        { text: "Product ID", dataIndex: 'productid' ,menuDisabled : false,resizable:true,editor:'textfield'},
        { text: "Product Name", dataIndex: 'productName' ,menuDisabled : true,resizable:false,editor:'textfield'},
        { text: "Qty", dataIndex: 'qty' ,menuDisabled : true,resizable:false,editor:'numberfield'}
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
});




