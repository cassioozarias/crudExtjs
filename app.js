Ext.Loader.setPath('Ext', './extjs/src');

Ext.Loader.setConfig({
    enabled: true,
    disableCaching: true
});

Ext.require([
    'Ext.tree.*',
    'Ext.data.*',
    'Ext.tip.*',
]);

Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.layout.container.Fit', 'Ext.fx.target.Sprite']);

Ext.application({
    name: 'WSExt',
    appFolder: 'app',
    controllers: [
        'TipoDespesa',
        'TipoGanho',
        'ControleDespesa',
        'ControleGanho',
        'ControleFinanca',
        'Financa',
        'Ganho',
        'Despesa',
        'TipoDespesaGanho'
    ],
    autoCreateViewport: true,
    launch: function() {
        WSExt.app = this;
    }
});