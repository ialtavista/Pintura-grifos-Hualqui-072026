var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_grifos_2 = new ol.format.GeoJSON();
var features_grifos_2 = format_grifos_2.readFeatures(json_grifos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_grifos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_grifos_2.addFeatures(features_grifos_2);
var lyr_grifos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_grifos_2, 
                style: style_grifos_2,
                popuplayertitle: 'grifos',
                interactive: true,
    title: 'grifos<br />\
    <img src="styles/legend/grifos_2_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/grifos_2_1.png" /> PINTADO<br />\
    <img src="styles/legend/grifos_2_2.png" /> ROTULADO VV DE PIE<br />\
    <img src="styles/legend/grifos_2_3.png" /> ROTULADO ID<br />\
    <img src="styles/legend/grifos_2_4.png" /> ROTULADO COMPLETO<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelite_1.setVisible(true);lyr_grifos_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelite_1,lyr_grifos_2];
lyr_grifos_2.set('fieldAliases', {'fid': 'fid', 'ID_GRIFO': 'ID_GRIFO', 'UBICACION': 'UBICACION', 'ESTADO': 'ESTADO', 'FOTO_ANTES': 'FOTO_ANTES', 'FOTO_PINTURA': 'FOTO_PINTURA', 'COMUNA': 'COMUNA', 'COLOR AMARILLO REY': 'COLOR AMARILLO REY', 'VV_PIE_VISIBLE': 'VV_PIE_VISIBLE', 'FUGA': 'FUGA', 'TAPA_BOCA': 'TAPA_BOCA', 'HILO_BUENO': 'HILO_BUENO', 'E': 'E', 'n': 'n', 'FOTO_ROTULADO_VV': 'FOTO_ROTULADO_VV', 'FOTO_ROTULADO_ID': 'FOTO_ROTULADO_ID', 'ROTULADO_VVPIE': 'ROTULADO_VVPIE', 'ROTULADO_ID': 'ROTULADO_ID', });
lyr_grifos_2.set('fieldImages', {'fid': 'TextEdit', 'ID_GRIFO': 'TextEdit', 'UBICACION': 'TextEdit', 'ESTADO': 'ValueMap', 'FOTO_ANTES': 'ExternalResource', 'FOTO_PINTURA': 'ExternalResource', 'COMUNA': 'TextEdit', 'COLOR AMARILLO REY': 'TextEdit', 'VV_PIE_VISIBLE': 'TextEdit', 'FUGA': 'TextEdit', 'TAPA_BOCA': 'TextEdit', 'HILO_BUENO': 'TextEdit', 'E': 'Range', 'n': 'Range', 'FOTO_ROTULADO_VV': 'ExternalResource', 'FOTO_ROTULADO_ID': 'ExternalResource', 'ROTULADO_VVPIE': 'TextEdit', 'ROTULADO_ID': 'TextEdit', });
lyr_grifos_2.set('fieldLabels', {'fid': 'hidden field', 'ID_GRIFO': 'inline label - visible with data', 'UBICACION': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'FOTO_ANTES': 'inline label - visible with data', 'FOTO_PINTURA': 'inline label - visible with data', 'COMUNA': 'hidden field', 'COLOR AMARILLO REY': 'hidden field', 'VV_PIE_VISIBLE': 'hidden field', 'FUGA': 'hidden field', 'TAPA_BOCA': 'hidden field', 'HILO_BUENO': 'hidden field', 'E': 'hidden field', 'n': 'hidden field', 'FOTO_ROTULADO_VV': 'inline label - visible with data', 'FOTO_ROTULADO_ID': 'inline label - visible with data', 'ROTULADO_VVPIE': 'hidden field', 'ROTULADO_ID': 'hidden field', });
lyr_grifos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});