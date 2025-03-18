var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Nutrientsedimentloss_1 = new ol.format.GeoJSON();
var features_Nutrientsedimentloss_1 = format_Nutrientsedimentloss_1.readFeatures(json_Nutrientsedimentloss_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nutrientsedimentloss_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nutrientsedimentloss_1.addFeatures(features_Nutrientsedimentloss_1);
var lyr_Nutrientsedimentloss_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nutrientsedimentloss_1, 
                style: style_Nutrientsedimentloss_1,
                popuplayertitle: "Nutrient/sediment loss ",
                interactive: true,
    title: 'Nutrient/sediment loss <br />\
    <img src="styles/legend/Nutrientsedimentloss_1_0.png" /> High importance<br />\
    <img src="styles/legend/Nutrientsedimentloss_1_1.png" /> Low importance<br />\
    <img src="styles/legend/Nutrientsedimentloss_1_2.png" /> Moderate importance<br />'
        });
var format_Photos_2 = new ol.format.GeoJSON();
var features_Photos_2 = format_Photos_2.readFeatures(json_Photos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Photos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Photos_2.addFeatures(features_Photos_2);
var lyr_Photos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Photos_2, 
                style: style_Photos_2,
                popuplayertitle: "Photos",
                interactive: true,
                title: '<img src="styles/legend/Photos_2.png" /> Photos'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Nutrientsedimentloss_1.setVisible(true);lyr_Photos_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Nutrientsedimentloss_1,lyr_Photos_2];
lyr_Nutrientsedimentloss_1.set('fieldAliases', {'Ranking': 'Ranking', 'Site notes': 'Site notes', 'ID': 'ID', 'Site/desk': 'Site/desk', });
lyr_Photos_2.set('fieldAliases', {'fid_1': 'fid_1', 'Photo1': 'Photo1', 'photo2': 'photo2', 'photo3': 'photo3', });
lyr_Nutrientsedimentloss_1.set('fieldImages', {'Ranking': 'TextEdit', 'Site notes': 'TextEdit', 'ID': 'TextEdit', 'Site/desk': 'TextEdit', });
lyr_Photos_2.set('fieldImages', {'fid_1': 'TextEdit', 'Photo1': 'ExternalResource', 'photo2': 'ExternalResource', 'photo3': 'ExternalResource', });
lyr_Nutrientsedimentloss_1.set('fieldLabels', {'Ranking': 'inline label - always visible', 'Site notes': 'inline label - always visible', 'ID': 'inline label - always visible', 'Site/desk': 'inline label - always visible', });
lyr_Photos_2.set('fieldLabels', {'fid_1': 'hidden field', 'Photo1': 'no label', 'photo2': 'no label', 'photo3': 'no label', });
lyr_Photos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});