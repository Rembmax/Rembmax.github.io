var wms_layers = [];

var format_VillaRosa_0 = new ol.format.GeoJSON();
var features_VillaRosa_0 = format_VillaRosa_0.readFeatures(json_VillaRosa_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VillaRosa_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaRosa_0.addFeatures(features_VillaRosa_0);
var lyr_VillaRosa_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VillaRosa_0, 
                style: style_VillaRosa_0,
                interactive: true,
                title: 'Villa Rosa'
            });
var format_Lagomarsino_1 = new ol.format.GeoJSON();
var features_Lagomarsino_1 = format_Lagomarsino_1.readFeatures(json_Lagomarsino_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lagomarsino_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lagomarsino_1.addFeatures(features_Lagomarsino_1);
var lyr_Lagomarsino_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lagomarsino_1, 
                style: style_Lagomarsino_1,
                interactive: true,
                title: 'Lagomarsino'
            });

        var lyr_Maps_2 = new ol.layer.Tile({
            'title': 'Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ign_municipio_3 = new ol.format.GeoJSON();
var features_ign_municipio_3 = format_ign_municipio_3.readFeatures(json_ign_municipio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ign_municipio_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ign_municipio_3.addFeatures(features_ign_municipio_3);
var lyr_ign_municipio_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ign_municipio_3, 
                style: style_ign_municipio_3,
                interactive: true,
                title: '<img src="styles/legend/ign_municipio_3.png" /> ign_municipio'
            });
var group_VillaRosaPilar = new ol.layer.Group({
                                layers: [lyr_VillaRosa_0,lyr_Lagomarsino_1,],
                                title: "Villa Rosa, Pilar"});

lyr_VillaRosa_0.setVisible(true);lyr_Lagomarsino_1.setVisible(true);lyr_Maps_2.setVisible(true);lyr_ign_municipio_3.setVisible(true);
var layersList = [group_VillaRosaPilar,lyr_Maps_2,lyr_ign_municipio_3];
lyr_VillaRosa_0.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'name': 'name', });
lyr_Lagomarsino_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'name': 'name', });
lyr_ign_municipio_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entidad': 'Entidad', 'Objeto': 'Objeto', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'SAG': 'SAG', 'FDC': 'FDC', 'IN1': 'IN1', 'SHAPE_STAr': 'SHAPE_STAr', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_VillaRosa_0.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'name': 'TextEdit', });
lyr_Lagomarsino_1.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'name': 'TextEdit', });
lyr_ign_municipio_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entidad': 'TextEdit', 'Objeto': 'TextEdit', 'FNA': 'TextEdit', 'GNA': 'TextEdit', 'NAM': 'TextEdit', 'SAG': 'TextEdit', 'FDC': 'TextEdit', 'IN1': 'TextEdit', 'SHAPE_STAr': 'TextEdit', 'SHAPE_STLe': 'TextEdit', });
lyr_VillaRosa_0.set('fieldLabels', {});
lyr_Lagomarsino_1.set('fieldLabels', {});
lyr_ign_municipio_3.set('fieldLabels', {'OBJECTID': 'header label', 'Entidad': 'header label', 'Objeto': 'header label', 'FNA': 'header label', 'GNA': 'header label', 'NAM': 'header label', 'SAG': 'header label', 'FDC': 'header label', 'IN1': 'header label', 'SHAPE_STAr': 'header label', 'SHAPE_STLe': 'header label', });
lyr_ign_municipio_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});