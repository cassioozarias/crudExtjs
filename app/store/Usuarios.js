Ext.define('ExtMVC.store.Usuarios', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Usuarios',
    autoLoand: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35, },
 
    proxy: {
         type: 'ajax',
         api: {
             create: 'php/criaUsuarios.php',
             read:   'php/listaUsuarios.php',
             update: 'php/atualizaUsuarios.php'
             destroy: 'php/deleta/Usuarios.php',
          },
           reader: {
                type: 'json',
                root: 'usuarios',
                successProperty: 'success'
          },
           whiter: {
                 type: 'json',
                 writeAllFields: true,
                 encode: true,
                 root: 'usuarios'
              }
            }
      });
