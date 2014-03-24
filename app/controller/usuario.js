Ext.define('ExtMVC.controller.Usuario', {
    extend: 'Ext.app.Controller',

    stores: ['Usuarios'],
    models: ['Usuario'],
    views:  ['Usuario.Formulario','usuario.Grid'],
    refs:   [{
                ref: 'usuarioPanel',
                selector: 'panel'
           },{
               ref:'usuarioGrid',
               selector: 'grid'   
              }
          ],

          init: function() {
              this.control({
                  'usuariogrid dataview': {
                     itemdblclick: this.editarUsuario
                  },
                  'usuariogrid button[action=add]': {
                   click: this.editarUsuario
                  },
                  'usuariogrid button[action=save]': {
                   click: this.updateUsuario
                  },
                  'usuariogrid button[action=delete]': {
                   click: this.deletarUsuario
                  }
              });
           },
 
           editarUsuario: function(grid, record) {
                var edit = Ext.create('Ext.MVC.usuario.Formulario').show();
 
                if(record){
                   edit.down('form').loadRecord(record);
                }
            },

          updateUsuario: function (button) {
              var win     = button.up('window'),
                  form    = wind.down('form'),
                  record  = form.getRecord(),
                  values  = form.getValues();

              var novo = false;
 
              if (novo){ //faz um reload para atualizar
                  this.UsuariosStore().load();
               }
           },

           deleteUsuario: fuction(button) {

           var grid = this.getUsuariogrid(),
           record = grid.getselectionModel().getselection(),
           store = this.getUsuarioStore();

           store.remove(record);
           this.getUsuarioStore().sync();

           //faz reload para atualizar
           this.get.UsuariosStore().load();
         }
    });      
