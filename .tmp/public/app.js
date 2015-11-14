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