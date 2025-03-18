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

        var lyr_GoogleMapsSatelliteImagery_1 = new ol.layer.Tile({
            'title': 'Google Maps Satellite Imagery',
            'type': 'base',
            'opacity': 0.498000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Nutrientsedimentloss_2 = new ol.format.GeoJSON();
var features_Nutrientsedimentloss_2 = format_Nutrientsedimentloss_2.readFeatures(json_Nutrientsedimentloss_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nutrientsedimentloss_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nutrientsedimentloss_2.addFeatures(features_Nutrientsedimentloss_2);
var lyr_Nutrientsedimentloss_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nutrientsedimentloss_2, 
                style: style_Nutrientsedimentloss_2,
                popuplayertitle: "Nutrient/sediment loss ",
                interactive: true,
    title: 'Nutrient/sediment loss <br />\
    <img src="styles/legend/Nutrientsedimentloss_2_0.png" /> High importance<br />\
    <img src="styles/legend/Nutrientsedimentloss_2_1.png" /> Low importance<br />\
    <img src="styles/legend/Nutrientsedimentloss_2_2.png" /> Moderate importance<br />'
        });
var format_Photos_3 = new ol.format.GeoJSON();
var features_Photos_3 = format_Photos_3.readFeatures(json_Photos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Photos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Photos_3.addFeatures(features_Photos_3);
var lyr_Photos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Photos_3, 
                style: style_Photos_3,
                popuplayertitle: "Photos",
                interactive: true,
                title: '<img src="styles/legend/Photos_3.png" /> Photos'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMapsSatelliteImagery_1.setVisible(true);lyr_Nutrientsedimentloss_2.setVisible(true);lyr_Photos_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMapsSatelliteImagery_1,lyr_Nutrientsedimentloss_2,lyr_Photos_3];
lyr_Nutrientsedimentloss_2.set('fieldAliases', {'Ranking': 'Ranking', 'Site notes': 'Site notes', 'ID': 'ID', 'Site/desk': 'Site/desk', 'length': 'length', });
lyr_Photos_3.set('fieldAliases', {'fid_1': 'fid_1', 'Photo1': 'Photo1', 'photo2': 'photo2', 'photo3': 'photo3', });
lyr_Nutrientsedimentloss_2.set('fieldImages', {'Ranking': 'TextEdit', 'Site notes': 'TextEdit', 'ID': 'TextEdit', 'Site/desk': 'TextEdit', 'length': 'Range', });
lyr_Photos_3.set('fieldImages', {'fid_1': 'TextEdit', 'Photo1': 'ExternalResource', 'photo2': 'ExternalResource', 'photo3': 'ExternalResource', });
lyr_Nutrientsedimentloss_2.set('fieldLabels', {'Ranking': 'inline label - always visible', 'Site notes': 'inline label - always visible', 'ID': 'inline label - always visible', 'Site/desk': 'inline label - always visible', 'length': 'hidden field', });
lyr_Photos_3.set('fieldLabels', {'fid_1': 'hidden field', 'Photo1': 'no label', 'photo2': 'no label', 'photo3': 'no label', });
lyr_Photos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});