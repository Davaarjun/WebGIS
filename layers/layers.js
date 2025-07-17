var wms_layers = [];


        var lyr_GoogleStreets_0 = new ol.layer.Tile({
            'title': 'Google Streets',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_OSMJakarta_1 = new ol.format.GeoJSON();
var features_OSMJakarta_1 = format_OSMJakarta_1.readFeatures(json_OSMJakarta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSMJakarta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSMJakarta_1.addFeatures(features_OSMJakarta_1);
var lyr_OSMJakarta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OSMJakarta_1, 
                style: style_OSMJakarta_1,
                popuplayertitle: 'OSM Jakarta',
                interactive: true,
                title: '<img src="styles/legend/OSMJakarta_1.png" /> OSM Jakarta'
            });
var format_Jakpus_2 = new ol.format.GeoJSON();
var features_Jakpus_2 = format_Jakpus_2.readFeatures(json_Jakpus_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jakpus_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jakpus_2.addFeatures(features_Jakpus_2);
var lyr_Jakpus_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jakpus_2, 
                style: style_Jakpus_2,
                popuplayertitle: 'Jakpus',
                interactive: true,
                title: '<img src="styles/legend/Jakpus_2.png" /> Jakpus'
            });
var format_Masjiddijakpus_3 = new ol.format.GeoJSON();
var features_Masjiddijakpus_3 = format_Masjiddijakpus_3.readFeatures(json_Masjiddijakpus_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masjiddijakpus_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masjiddijakpus_3.addFeatures(features_Masjiddijakpus_3);
var lyr_Masjiddijakpus_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masjiddijakpus_3, 
                style: style_Masjiddijakpus_3,
                popuplayertitle: 'Masjid di jakpus',
                interactive: true,
                title: '<img src="styles/legend/Masjiddijakpus_3.png" /> Masjid di jakpus'
            });
var format_Gereja_4 = new ol.format.GeoJSON();
var features_Gereja_4 = format_Gereja_4.readFeatures(json_Gereja_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gereja_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gereja_4.addFeatures(features_Gereja_4);
var lyr_Gereja_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gereja_4, 
                style: style_Gereja_4,
                popuplayertitle: 'Gereja',
                interactive: true,
                title: '<img src="styles/legend/Gereja_4.png" /> Gereja'
            });
var format_KantorPemerintah_5 = new ol.format.GeoJSON();
var features_KantorPemerintah_5 = format_KantorPemerintah_5.readFeatures(json_KantorPemerintah_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorPemerintah_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorPemerintah_5.addFeatures(features_KantorPemerintah_5);
var lyr_KantorPemerintah_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KantorPemerintah_5, 
                style: style_KantorPemerintah_5,
                popuplayertitle: 'Kantor Pemerintah',
                interactive: true,
                title: '<img src="styles/legend/KantorPemerintah_5.png" /> Kantor Pemerintah'
            });
var format_BangunanDissolve_6 = new ol.format.GeoJSON();
var features_BangunanDissolve_6 = format_BangunanDissolve_6.readFeatures(json_BangunanDissolve_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanDissolve_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanDissolve_6.addFeatures(features_BangunanDissolve_6);
var lyr_BangunanDissolve_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanDissolve_6, 
                style: style_BangunanDissolve_6,
                popuplayertitle: 'Bangunan Dissolve',
                interactive: true,
                title: '<img src="styles/legend/BangunanDissolve_6.png" /> Bangunan Dissolve'
            });
var format_Jalan_OSM_48s_7 = new ol.format.GeoJSON();
var features_Jalan_OSM_48s_7 = format_Jalan_OSM_48s_7.readFeatures(json_Jalan_OSM_48s_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_OSM_48s_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_OSM_48s_7.addFeatures(features_Jalan_OSM_48s_7);
var lyr_Jalan_OSM_48s_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_OSM_48s_7, 
                style: style_Jalan_OSM_48s_7,
                popuplayertitle: 'Jalan_OSM_48s',
                interactive: true,
                title: '<img src="styles/legend/Jalan_OSM_48s_7.png" /> Jalan_OSM_48s'
            });
var format_TKSDSMPSMASMK_8 = new ol.format.GeoJSON();
var features_TKSDSMPSMASMK_8 = format_TKSDSMPSMASMK_8.readFeatures(json_TKSDSMPSMASMK_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TKSDSMPSMASMK_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TKSDSMPSMASMK_8.addFeatures(features_TKSDSMPSMASMK_8);
var lyr_TKSDSMPSMASMK_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TKSDSMPSMASMK_8, 
                style: style_TKSDSMPSMASMK_8,
                popuplayertitle: 'TK, SD, SMP, SMA, SMK',
                interactive: true,
                title: '<img src="styles/legend/TKSDSMPSMASMK_8.png" /> TK, SD, SMP, SMA, SMK'
            });
var format_TK_9 = new ol.format.GeoJSON();
var features_TK_9 = format_TK_9.readFeatures(json_TK_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TK_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TK_9.addFeatures(features_TK_9);
var lyr_TK_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TK_9, 
                style: style_TK_9,
                popuplayertitle: 'TK',
                interactive: true,
                title: '<img src="styles/legend/TK_9.png" /> TK'
            });
var format_Paud_10 = new ol.format.GeoJSON();
var features_Paud_10 = format_Paud_10.readFeatures(json_Paud_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paud_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paud_10.addFeatures(features_Paud_10);
var lyr_Paud_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paud_10, 
                style: style_Paud_10,
                popuplayertitle: 'Paud',
                interactive: true,
                title: '<img src="styles/legend/Paud_10.png" /> Paud'
            });
var format_PerguruanTinggi_11 = new ol.format.GeoJSON();
var features_PerguruanTinggi_11 = format_PerguruanTinggi_11.readFeatures(json_PerguruanTinggi_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerguruanTinggi_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerguruanTinggi_11.addFeatures(features_PerguruanTinggi_11);
var lyr_PerguruanTinggi_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerguruanTinggi_11, 
                style: style_PerguruanTinggi_11,
                popuplayertitle: 'Perguruan Tinggi',
                interactive: true,
                title: '<img src="styles/legend/PerguruanTinggi_11.png" /> Perguruan Tinggi'
            });
var format_SMA_12 = new ol.format.GeoJSON();
var features_SMA_12 = format_SMA_12.readFeatures(json_SMA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMA_12.addFeatures(features_SMA_12);
var lyr_SMA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMA_12, 
                style: style_SMA_12,
                popuplayertitle: 'SMA',
                interactive: true,
                title: '<img src="styles/legend/SMA_12.png" /> SMA'
            });
var format_SMP_13 = new ol.format.GeoJSON();
var features_SMP_13 = format_SMP_13.readFeatures(json_SMP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMP_13.addFeatures(features_SMP_13);
var lyr_SMP_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMP_13, 
                style: style_SMP_13,
                popuplayertitle: 'SMP',
                interactive: true,
                title: '<img src="styles/legend/SMP_13.png" /> SMP'
            });
var format_SDdijakartaPusat_14 = new ol.format.GeoJSON();
var features_SDdijakartaPusat_14 = format_SDdijakartaPusat_14.readFeatures(json_SDdijakartaPusat_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDdijakartaPusat_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDdijakartaPusat_14.addFeatures(features_SDdijakartaPusat_14);
var lyr_SDdijakartaPusat_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDdijakartaPusat_14, 
                style: style_SDdijakartaPusat_14,
                popuplayertitle: 'SD di jakarta Pusat',
                interactive: true,
                title: '<img src="styles/legend/SDdijakartaPusat_14.png" /> SD di jakarta Pusat'
            });
var group_Sekolah = new ol.layer.Group({
                                layers: [lyr_TKSDSMPSMASMK_8,lyr_TK_9,lyr_Paud_10,lyr_PerguruanTinggi_11,lyr_SMA_12,lyr_SMP_13,lyr_SDdijakartaPusat_14,],
                                fold: 'open',
                                title: 'Sekolah'});
var group_Bangunan = new ol.layer.Group({
                                layers: [lyr_Masjiddijakpus_3,lyr_Gereja_4,lyr_KantorPemerintah_5,lyr_BangunanDissolve_6,],
                                fold: 'open',
                                title: 'Bangunan'});

lyr_GoogleStreets_0.setVisible(true);lyr_OSMJakarta_1.setVisible(true);lyr_Jakpus_2.setVisible(true);lyr_Masjiddijakpus_3.setVisible(true);lyr_Gereja_4.setVisible(true);lyr_KantorPemerintah_5.setVisible(true);lyr_BangunanDissolve_6.setVisible(true);lyr_Jalan_OSM_48s_7.setVisible(true);lyr_TKSDSMPSMASMK_8.setVisible(true);lyr_TK_9.setVisible(true);lyr_Paud_10.setVisible(true);lyr_PerguruanTinggi_11.setVisible(true);lyr_SMA_12.setVisible(true);lyr_SMP_13.setVisible(true);lyr_SDdijakartaPusat_14.setVisible(true);
var layersList = [lyr_GoogleStreets_0,lyr_OSMJakarta_1,lyr_Jakpus_2,group_Bangunan,lyr_Jalan_OSM_48s_7,group_Sekolah];
lyr_OSMJakarta_1.set('fieldAliases', {'KAB_NAME': 'KAB_NAME', });
lyr_Jakpus_2.set('fieldAliases', {'KAB_NAME': 'KAB_NAME', });
lyr_Masjiddijakpus_3.set('fieldAliases', {'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'access_roo': 'access_roo', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'building': 'building', 'building_m': 'building_m', 'name': 'name', 'roof_mater': 'roof_mater', });
lyr_Gereja_4.set('fieldAliases', {'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'access_roo': 'access_roo', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'building': 'building', 'building_m': 'building_m', 'name': 'name', 'roof_mater': 'roof_mater', });
lyr_KantorPemerintah_5.set('fieldAliases', {'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'access_roo': 'access_roo', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'building': 'building', 'building_m': 'building_m', 'name': 'name', 'roof_mater': 'roof_mater', });
lyr_BangunanDissolve_6.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'access_roo': 'access_roo', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'building': 'building', 'building_m': 'building_m', 'name': 'name', 'roof_mater': 'roof_mater', });
lyr_Jalan_OSM_48s_7.set('fieldAliases', {'osm_id': 'osm_id', 'bridge': 'bridge', 'highway': 'highway', 'layer': 'layer', 'name': 'name', 'oneway': 'oneway', 'smoothness': 'smoothness', 'surface': 'surface', 'tunnel': 'tunnel', 'width': 'width', 'z_index': 'z_index', });
lyr_TKSDSMPSMASMK_8.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', });
lyr_TK_9.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', });
lyr_Paud_10.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', });
lyr_PerguruanTinggi_11.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', });
lyr_SMA_12.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', });
lyr_SMP_13.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', });
lyr_SDdijakartaPusat_14.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', });
lyr_OSMJakarta_1.set('fieldImages', {'KAB_NAME': 'TextEdit', });
lyr_Jakpus_2.set('fieldImages', {'KAB_NAME': 'TextEdit', });
lyr_Masjiddijakpus_3.set('fieldImages', {'osm_id': 'TextEdit', 'osm_way_id': 'TextEdit', 'access_roo': 'TextEdit', 'addr_house': 'TextEdit', 'addr_stree': 'TextEdit', 'building': 'TextEdit', 'building_m': 'TextEdit', 'name': 'TextEdit', 'roof_mater': 'TextEdit', });
lyr_Gereja_4.set('fieldImages', {'osm_id': '', 'osm_way_id': '', 'access_roo': '', 'addr_house': '', 'addr_stree': '', 'building': '', 'building_m': '', 'name': '', 'roof_mater': '', });
lyr_KantorPemerintah_5.set('fieldImages', {'osm_id': 'TextEdit', 'osm_way_id': 'TextEdit', 'access_roo': 'TextEdit', 'addr_house': 'TextEdit', 'addr_stree': 'TextEdit', 'building': 'TextEdit', 'building_m': 'TextEdit', 'name': 'TextEdit', 'roof_mater': 'TextEdit', });
lyr_BangunanDissolve_6.set('fieldImages', {'fid': '', 'osm_id': '', 'osm_way_id': '', 'access_roo': '', 'addr_house': '', 'addr_stree': '', 'building': '', 'building_m': '', 'name': '', 'roof_mater': '', });
lyr_Jalan_OSM_48s_7.set('fieldImages', {'osm_id': '', 'bridge': '', 'highway': '', 'layer': '', 'name': '', 'oneway': '', 'smoothness': '', 'surface': '', 'tunnel': '', 'width': '', 'z_index': '', });
lyr_TKSDSMPSMASMK_8.set('fieldImages', {'addr_full': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'type_id': 'TextEdit', 'name_id': 'TextEdit', 'operator': 'TextEdit', 'SDT': 'TextEdit', 'SDN': 'TextEdit', 'Alamat': 'TextEdit', 'KAB_NAME': 'TextEdit', });
lyr_TK_9.set('fieldImages', {'addr_full': '', 'name': '', 'type': '', 'type_id': '', 'name_id': '', 'operator': '', 'SDT': '', 'SDN': '', 'Alamat': '', 'KAB_NAME': '', });
lyr_Paud_10.set('fieldImages', {'addr_full': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'type_id': 'TextEdit', 'name_id': 'TextEdit', 'operator': 'TextEdit', 'SDT': 'TextEdit', 'SDN': 'TextEdit', 'Alamat': 'TextEdit', 'KAB_NAME': 'TextEdit', });
lyr_PerguruanTinggi_11.set('fieldImages', {'addr_full': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'type_id': 'TextEdit', 'name_id': 'TextEdit', 'operator': 'TextEdit', 'SDT': 'TextEdit', 'SDN': 'TextEdit', 'Alamat': 'TextEdit', 'KAB_NAME': 'TextEdit', });
lyr_SMA_12.set('fieldImages', {'addr_full': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'type_id': 'TextEdit', 'name_id': 'TextEdit', 'operator': 'TextEdit', 'SDT': 'TextEdit', 'SDN': 'TextEdit', 'Alamat': 'TextEdit', 'KAB_NAME': 'TextEdit', });
lyr_SMP_13.set('fieldImages', {'addr_full': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'type_id': 'TextEdit', 'name_id': 'TextEdit', 'operator': 'TextEdit', 'SDT': 'TextEdit', 'SDN': 'TextEdit', 'Alamat': 'TextEdit', 'KAB_NAME': 'TextEdit', });
lyr_SDdijakartaPusat_14.set('fieldImages', {'addr_full': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'type_id': 'TextEdit', 'name_id': 'TextEdit', 'operator': 'TextEdit', 'SDT': 'TextEdit', 'SDN': 'TextEdit', 'Alamat': 'TextEdit', 'KAB_NAME': 'TextEdit', });
lyr_OSMJakarta_1.set('fieldLabels', {'KAB_NAME': 'no label', });
lyr_Jakpus_2.set('fieldLabels', {'KAB_NAME': 'no label', });
lyr_Masjiddijakpus_3.set('fieldLabels', {'osm_id': 'no label', 'osm_way_id': 'no label', 'access_roo': 'no label', 'addr_house': 'no label', 'addr_stree': 'no label', 'building': 'no label', 'building_m': 'no label', 'name': 'no label', 'roof_mater': 'no label', });
lyr_Gereja_4.set('fieldLabels', {'osm_id': 'no label', 'osm_way_id': 'no label', 'access_roo': 'no label', 'addr_house': 'no label', 'addr_stree': 'no label', 'building': 'no label', 'building_m': 'no label', 'name': 'no label', 'roof_mater': 'no label', });
lyr_KantorPemerintah_5.set('fieldLabels', {'osm_id': 'no label', 'osm_way_id': 'no label', 'access_roo': 'no label', 'addr_house': 'no label', 'addr_stree': 'no label', 'building': 'no label', 'building_m': 'no label', 'name': 'no label', 'roof_mater': 'no label', });
lyr_BangunanDissolve_6.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_way_id': 'no label', 'access_roo': 'no label', 'addr_house': 'no label', 'addr_stree': 'no label', 'building': 'no label', 'building_m': 'no label', 'name': 'no label', 'roof_mater': 'no label', });
lyr_Jalan_OSM_48s_7.set('fieldLabels', {'osm_id': 'no label', 'bridge': 'no label', 'highway': 'no label', 'layer': 'no label', 'name': 'inline label - visible with data', 'oneway': 'no label', 'smoothness': 'no label', 'surface': 'no label', 'tunnel': 'no label', 'width': 'no label', 'z_index': 'no label', });
lyr_TKSDSMPSMASMK_8.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', });
lyr_TK_9.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', });
lyr_Paud_10.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', });
lyr_PerguruanTinggi_11.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', });
lyr_SMA_12.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', });
lyr_SMP_13.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', });
lyr_SDdijakartaPusat_14.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', });
lyr_SDdijakartaPusat_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});