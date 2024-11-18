var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LPSZone_2 = new ol.format.GeoJSON();
var features_LPSZone_2 = format_LPSZone_2.readFeatures(json_LPSZone_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LPSZone_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LPSZone_2.addFeatures(features_LPSZone_2);
var lyr_LPSZone_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LPSZone_2, 
                style: style_LPSZone_2,
                popuplayertitle: "LPS Zone",
                interactive: false,
    title: 'LPS Zone<br />\
    <img src="styles/legend/LPSZone_2_0.png" /> Canal development<br />\
    <img src="styles/legend/LPSZone_2_1.png" /> Caravan / chalet park<br />\
    <img src="styles/legend/LPSZone_2_2.png" /> Civic / cultural<br />\
    <img src="styles/legend/LPSZone_2_3.png" /> Commercial<br />\
    <img src="styles/legend/LPSZone_2_4.png" /> Environmental conservation<br />\
    <img src="styles/legend/LPSZone_2_5.png" /> Farmlet<br />\
    <img src="styles/legend/LPSZone_2_6.png" /> Hills landscape protection<br />\
    <img src="styles/legend/LPSZone_2_7.png" /> Hotel / motel<br />\
    <img src="styles/legend/LPSZone_2_8.png" /> Industry<br />\
    <img src="styles/legend/LPSZone_2_9.png" /> Local road<br />\
    <img src="styles/legend/LPSZone_2_10.png" /> Major highway<br />\
    <img src="styles/legend/LPSZone_2_11.png" /> Nambeelup industrial development<br />\
    <img src="styles/legend/LPSZone_2_12.png" /> Nambeelup Industrial Development<br />\
    <img src="styles/legend/LPSZone_2_13.png" /> No zone<br />\
    <img src="styles/legend/LPSZone_2_14.png" /> Primary distributor road<br />\
    <img src="styles/legend/LPSZone_2_15.png" /> Private clubs and institutions<br />\
    <img src="styles/legend/LPSZone_2_16.png" /> Private recreation<br />\
    <img src="styles/legend/LPSZone_2_17.png" /> Public purposes<br />\
    <img src="styles/legend/LPSZone_2_18.png" /> Public recreation / conservation<br />\
    <img src="styles/legend/LPSZone_2_19.png" /> Railway<br />\
    <img src="styles/legend/LPSZone_2_20.png" /> Residential<br />\
    <img src="styles/legend/LPSZone_2_21.png" /> Residential development<br />\
    <img src="styles/legend/LPSZone_2_22.png" /> Road to be closed<br />\
    <img src="styles/legend/LPSZone_2_23.png" /> Rural<br />\
    <img src="styles/legend/LPSZone_2_24.png" /> Rural 1 - general farming<br />\
    <img src="styles/legend/LPSZone_2_25.png" /> Rural 4 - hills face<br />\
    <img src="styles/legend/LPSZone_2_26.png" /> Rural residential<br />\
    <img src="styles/legend/LPSZone_2_27.png" /> Service commercial<br />\
    <img src="styles/legend/LPSZone_2_28.png" /> Special development<br />\
    <img src="styles/legend/LPSZone_2_29.png" /> Special residential<br />\
    <img src="styles/legend/LPSZone_2_30.png" /> Special rural<br />\
    <img src="styles/legend/LPSZone_2_31.png" /> Special use<br />\
    <img src="styles/legend/LPSZone_2_32.png" /> State Forest<br />\
    <img src="styles/legend/LPSZone_2_33.png" /> Town centre<br />'
        });
var format_RegionSchemeZones_3 = new ol.format.GeoJSON();
var features_RegionSchemeZones_3 = format_RegionSchemeZones_3.readFeatures(json_RegionSchemeZones_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegionSchemeZones_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionSchemeZones_3.addFeatures(features_RegionSchemeZones_3);
var lyr_RegionSchemeZones_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegionSchemeZones_3, 
                style: style_RegionSchemeZones_3,
                popuplayertitle: "Region Scheme Zones",
                interactive: false,
    title: 'Region Scheme Zones<br />\
    <img src="styles/legend/RegionSchemeZones_3_0.png" /> Central city area<br />\
    <img src="styles/legend/RegionSchemeZones_3_1.png" /> Civic and cultural<br />\
    <img src="styles/legend/RegionSchemeZones_3_2.png" /> Industrial<br />\
    <img src="styles/legend/RegionSchemeZones_3_3.png" /> Industrial deferred<br />\
    <img src="styles/legend/RegionSchemeZones_3_4.png" /> Other regional roads<br />\
    <img src="styles/legend/RegionSchemeZones_3_5.png" /> Parks and recreation<br />\
    <img src="styles/legend/RegionSchemeZones_3_6.png" /> Parks and recreation<br />\
    <img src="styles/legend/RegionSchemeZones_3_7.png" /> Port installations<br />\
    <img src="styles/legend/RegionSchemeZones_3_8.png" /> Primary regional roads<br />\
    <img src="styles/legend/RegionSchemeZones_3_9.png" /> Private recreation<br />\
    <img src="styles/legend/RegionSchemeZones_3_10.png" /> Public purposes<br />\
    <img src="styles/legend/RegionSchemeZones_3_11.png" /> Public purposes - airport<br />\
    <img src="styles/legend/RegionSchemeZones_3_12.png" /> Public purposes - car park<br />\
    <img src="styles/legend/RegionSchemeZones_3_13.png" /> Public purposes - Commonwealth Government<br />\
    <img src="styles/legend/RegionSchemeZones_3_14.png" /> Public purposes - high school<br />\
    <img src="styles/legend/RegionSchemeZones_3_15.png" /> Public purposes - hospital<br />\
    <img src="styles/legend/RegionSchemeZones_3_16.png" /> Public purposes - prison<br />\
    <img src="styles/legend/RegionSchemeZones_3_17.png" /> Public purposes - public utilities<br />\
    <img src="styles/legend/RegionSchemeZones_3_18.png" /> Public purposes - special uses<br />\
    <img src="styles/legend/RegionSchemeZones_3_19.png" /> Public purposes - State Energy Commission<br />\
    <img src="styles/legend/RegionSchemeZones_3_20.png" /> Public purposes - technical school<br />\
    <img src="styles/legend/RegionSchemeZones_3_21.png" /> Public purposes - university<br />\
    <img src="styles/legend/RegionSchemeZones_3_22.png" /> Public purposes - Water Authority of WA<br />\
    <img src="styles/legend/RegionSchemeZones_3_23.png" /> Railways<br />\
    <img src="styles/legend/RegionSchemeZones_3_24.png" /> Regional centre<br />\
    <img src="styles/legend/RegionSchemeZones_3_25.png" /> Regional open space<br />\
    <img src="styles/legend/RegionSchemeZones_3_26.png" /> Rural<br />\
    <img src="styles/legend/RegionSchemeZones_3_27.png" /> Rural - water protection<br />\
    <img src="styles/legend/RegionSchemeZones_3_28.png" /> Special industrial<br />\
    <img src="styles/legend/RegionSchemeZones_3_29.png" /> State forests<br />\
    <img src="styles/legend/RegionSchemeZones_3_30.png" /> Urban<br />\
    <img src="styles/legend/RegionSchemeZones_3_31.png" /> Urban deferred<br />\
    <img src="styles/legend/RegionSchemeZones_3_32.png" /> Waterways<br />'
        });
var format_PerthandPeelLandUse_4 = new ol.format.GeoJSON();
var features_PerthandPeelLandUse_4 = format_PerthandPeelLandUse_4.readFeatures(json_PerthandPeelLandUse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerthandPeelLandUse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerthandPeelLandUse_4.addFeatures(features_PerthandPeelLandUse_4);
var lyr_PerthandPeelLandUse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerthandPeelLandUse_4, 
                style: style_PerthandPeelLandUse_4,
                popuplayertitle: "Perth and Peel Land Use",
                interactive: false,
    title: 'Perth and Peel Land Use<br />\
    <img src="styles/legend/PerthandPeelLandUse_4_0.png" /> Planning Investigation<br />\
    <img src="styles/legend/PerthandPeelLandUse_4_1.png" /> Rural Residential<br />\
    <img src="styles/legend/PerthandPeelLandUse_4_2.png" /> Rural Residential Investigation<br />\
    <img src="styles/legend/PerthandPeelLandUse_4_3.png" /> Urban<br />\
    <img src="styles/legend/PerthandPeelLandUse_4_4.png" /> Urban Deferred<br />\
    <img src="styles/legend/PerthandPeelLandUse_4_5.png" /> Urban Expansion<br />\
    <img src="styles/legend/PerthandPeelLandUse_4_6.png" /> Urban Investigation<br />\
    <img src="styles/legend/PerthandPeelLandUse_4_7.png" /> <br />'
        });
var format_CoastalPlanExtents_5 = new ol.format.GeoJSON();
var features_CoastalPlanExtents_5 = format_CoastalPlanExtents_5.readFeatures(json_CoastalPlanExtents_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoastalPlanExtents_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastalPlanExtents_5.addFeatures(features_CoastalPlanExtents_5);
var lyr_CoastalPlanExtents_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoastalPlanExtents_5, 
                style: style_CoastalPlanExtents_5,
                popuplayertitle: "Coastal Plan Extents",
                interactive: false,
                title: '<img src="styles/legend/CoastalPlanExtents_5.png" /> Coastal Plan Extents'
            });
var format_GovernmentSeweragePolicy_6 = new ol.format.GeoJSON();
var features_GovernmentSeweragePolicy_6 = format_GovernmentSeweragePolicy_6.readFeatures(json_GovernmentSeweragePolicy_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GovernmentSeweragePolicy_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GovernmentSeweragePolicy_6.addFeatures(features_GovernmentSeweragePolicy_6);
var lyr_GovernmentSeweragePolicy_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GovernmentSeweragePolicy_6, 
                style: style_GovernmentSeweragePolicy_6,
                popuplayertitle: "Government Sewerage Policy",
                interactive: false,
                title: '<img src="styles/legend/GovernmentSeweragePolicy_6.png" /> Government Sewerage Policy'
            });
var format_LandsofInterest_7 = new ol.format.GeoJSON();
var features_LandsofInterest_7 = format_LandsofInterest_7.readFeatures(json_LandsofInterest_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandsofInterest_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandsofInterest_7.addFeatures(features_LandsofInterest_7);
var lyr_LandsofInterest_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandsofInterest_7, 
                style: style_LandsofInterest_7,
                popuplayertitle: "Lands of Interest",
                interactive: false,
                title: '<img src="styles/legend/LandsofInterest_7.png" /> Lands of Interest'
            });
var format_LegislatedLandsandWaters_8 = new ol.format.GeoJSON();
var features_LegislatedLandsandWaters_8 = format_LegislatedLandsandWaters_8.readFeatures(json_LegislatedLandsandWaters_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LegislatedLandsandWaters_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LegislatedLandsandWaters_8.addFeatures(features_LegislatedLandsandWaters_8);
var lyr_LegislatedLandsandWaters_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LegislatedLandsandWaters_8, 
                style: style_LegislatedLandsandWaters_8,
                popuplayertitle: "Legislated Lands and Waters",
                interactive: false,
                title: '<img src="styles/legend/LegislatedLandsandWaters_8.png" /> Legislated Lands and Waters'
            });
var format_PerthandPeelUrbanLandDevelopmentOutlookResidential_9 = new ol.format.GeoJSON();
var features_PerthandPeelUrbanLandDevelopmentOutlookResidential_9 = format_PerthandPeelUrbanLandDevelopmentOutlookResidential_9.readFeatures(json_PerthandPeelUrbanLandDevelopmentOutlookResidential_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerthandPeelUrbanLandDevelopmentOutlookResidential_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerthandPeelUrbanLandDevelopmentOutlookResidential_9.addFeatures(features_PerthandPeelUrbanLandDevelopmentOutlookResidential_9);
var lyr_PerthandPeelUrbanLandDevelopmentOutlookResidential_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerthandPeelUrbanLandDevelopmentOutlookResidential_9, 
                style: style_PerthandPeelUrbanLandDevelopmentOutlookResidential_9,
                popuplayertitle: "Perth and Peel Urban Land Development Outlook Residential",
                interactive: false,
                title: '<img src="styles/legend/PerthandPeelUrbanLandDevelopmentOutlookResidential_9.png" /> Perth and Peel Urban Land Development Outlook Residential'
            });
var format_PlanningReferralsContacts_10 = new ol.format.GeoJSON();
var features_PlanningReferralsContacts_10 = format_PlanningReferralsContacts_10.readFeatures(json_PlanningReferralsContacts_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanningReferralsContacts_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanningReferralsContacts_10.addFeatures(features_PlanningReferralsContacts_10);
var lyr_PlanningReferralsContacts_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanningReferralsContacts_10, 
                style: style_PlanningReferralsContacts_10,
                popuplayertitle: "Planning Referrals Contacts",
                interactive: false,
                title: '<img src="styles/legend/PlanningReferralsContacts_10.png" /> Planning Referrals Contacts'
            });
var format_SPPExclusionAreas_11 = new ol.format.GeoJSON();
var features_SPPExclusionAreas_11 = format_SPPExclusionAreas_11.readFeatures(json_SPPExclusionAreas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPPExclusionAreas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPExclusionAreas_11.addFeatures(features_SPPExclusionAreas_11);
var lyr_SPPExclusionAreas_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPPExclusionAreas_11, 
                style: style_SPPExclusionAreas_11,
                popuplayertitle: "SPP Exclusion Areas",
                interactive: false,
                title: '<img src="styles/legend/SPPExclusionAreas_11.png" /> SPP Exclusion Areas'
            });
var format_SPPExtractionSites_12 = new ol.format.GeoJSON();
var features_SPPExtractionSites_12 = format_SPPExtractionSites_12.readFeatures(json_SPPExtractionSites_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPPExtractionSites_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPExtractionSites_12.addFeatures(features_SPPExtractionSites_12);
var lyr_SPPExtractionSites_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPPExtractionSites_12, 
                style: style_SPPExtractionSites_12,
                popuplayertitle: "SPP Extraction Sites",
                interactive: false,
                title: '<img src="styles/legend/SPPExtractionSites_12.png" /> SPP Extraction Sites'
            });
var format_ClearingRegulationsScheduleOneAreas_13 = new ol.format.GeoJSON();
var features_ClearingRegulationsScheduleOneAreas_13 = format_ClearingRegulationsScheduleOneAreas_13.readFeatures(json_ClearingRegulationsScheduleOneAreas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClearingRegulationsScheduleOneAreas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClearingRegulationsScheduleOneAreas_13.addFeatures(features_ClearingRegulationsScheduleOneAreas_13);
var lyr_ClearingRegulationsScheduleOneAreas_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClearingRegulationsScheduleOneAreas_13, 
                style: style_ClearingRegulationsScheduleOneAreas_13,
                popuplayertitle: "Clearing Regulations Schedule One Areas",
                interactive: false,
                title: '<img src="styles/legend/ClearingRegulationsScheduleOneAreas_13.png" /> Clearing Regulations Schedule One Areas'
            });
var format_10metrecontours_14 = new ol.format.GeoJSON();
var features_10metrecontours_14 = format_10metrecontours_14.readFeatures(json_10metrecontours_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10metrecontours_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10metrecontours_14.addFeatures(features_10metrecontours_14);
var lyr_10metrecontours_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10metrecontours_14, 
                style: style_10metrecontours_14,
                popuplayertitle: "10 metre contours",
                interactive: false,
                title: '<img src="styles/legend/10metrecontours_14.png" /> 10 metre contours'
            });
var format_BushFireProneAreas2021_15 = new ol.format.GeoJSON();
var features_BushFireProneAreas2021_15 = format_BushFireProneAreas2021_15.readFeatures(json_BushFireProneAreas2021_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BushFireProneAreas2021_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BushFireProneAreas2021_15.addFeatures(features_BushFireProneAreas2021_15);
var lyr_BushFireProneAreas2021_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BushFireProneAreas2021_15, 
                style: style_BushFireProneAreas2021_15,
                popuplayertitle: "Bush Fire Prone Areas 2021",
                interactive: false,
                title: '<img src="styles/legend/BushFireProneAreas2021_15.png" /> Bush Fire Prone Areas 2021'
            });
var format_AboriginalCulturalHeritageHistoric_16 = new ol.format.GeoJSON();
var features_AboriginalCulturalHeritageHistoric_16 = format_AboriginalCulturalHeritageHistoric_16.readFeatures(json_AboriginalCulturalHeritageHistoric_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AboriginalCulturalHeritageHistoric_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AboriginalCulturalHeritageHistoric_16.addFeatures(features_AboriginalCulturalHeritageHistoric_16);
var lyr_AboriginalCulturalHeritageHistoric_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AboriginalCulturalHeritageHistoric_16, 
                style: style_AboriginalCulturalHeritageHistoric_16,
                popuplayertitle: "Aboriginal Cultural Heritage Historic",
                interactive: false,
                title: '<img src="styles/legend/AboriginalCulturalHeritageHistoric_16.png" /> Aboriginal Cultural Heritage Historic'
            });
var format_AboriginalCulturalHeritageLodged_17 = new ol.format.GeoJSON();
var features_AboriginalCulturalHeritageLodged_17 = format_AboriginalCulturalHeritageLodged_17.readFeatures(json_AboriginalCulturalHeritageLodged_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AboriginalCulturalHeritageLodged_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AboriginalCulturalHeritageLodged_17.addFeatures(features_AboriginalCulturalHeritageLodged_17);
var lyr_AboriginalCulturalHeritageLodged_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AboriginalCulturalHeritageLodged_17, 
                style: style_AboriginalCulturalHeritageLodged_17,
                popuplayertitle: "Aboriginal Cultural Heritage Lodged",
                interactive: false,
                title: '<img src="styles/legend/AboriginalCulturalHeritageLodged_17.png" /> Aboriginal Cultural Heritage Lodged'
            });
var format_AboriginalCulturalHeritageRegister_18 = new ol.format.GeoJSON();
var features_AboriginalCulturalHeritageRegister_18 = format_AboriginalCulturalHeritageRegister_18.readFeatures(json_AboriginalCulturalHeritageRegister_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AboriginalCulturalHeritageRegister_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AboriginalCulturalHeritageRegister_18.addFeatures(features_AboriginalCulturalHeritageRegister_18);
var lyr_AboriginalCulturalHeritageRegister_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AboriginalCulturalHeritageRegister_18, 
                style: style_AboriginalCulturalHeritageRegister_18,
                popuplayertitle: "Aboriginal Cultural Heritage Register",
                interactive: false,
                title: '<img src="styles/legend/AboriginalCulturalHeritageRegister_18.png" /> Aboriginal Cultural Heritage Register'
            });
var format_AboriginalCulturalHeritageSurveyAreas_19 = new ol.format.GeoJSON();
var features_AboriginalCulturalHeritageSurveyAreas_19 = format_AboriginalCulturalHeritageSurveyAreas_19.readFeatures(json_AboriginalCulturalHeritageSurveyAreas_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AboriginalCulturalHeritageSurveyAreas_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AboriginalCulturalHeritageSurveyAreas_19.addFeatures(features_AboriginalCulturalHeritageSurveyAreas_19);
var lyr_AboriginalCulturalHeritageSurveyAreas_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AboriginalCulturalHeritageSurveyAreas_19, 
                style: style_AboriginalCulturalHeritageSurveyAreas_19,
                popuplayertitle: "Aboriginal Cultural Heritage Survey Areas",
                interactive: false,
                title: '<img src="styles/legend/AboriginalCulturalHeritageSurveyAreas_19.png" /> Aboriginal Cultural Heritage Survey Areas'
            });
var format_MiningTenements_20 = new ol.format.GeoJSON();
var features_MiningTenements_20 = format_MiningTenements_20.readFeatures(json_MiningTenements_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiningTenements_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiningTenements_20.addFeatures(features_MiningTenements_20);
var lyr_MiningTenements_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiningTenements_20, 
                style: style_MiningTenements_20,
                popuplayertitle: "Mining Tenements",
                interactive: false,
                title: '<img src="styles/legend/MiningTenements_20.png" /> Mining Tenements'
            });
var format_FPMFloodplainArea_21 = new ol.format.GeoJSON();
var features_FPMFloodplainArea_21 = format_FPMFloodplainArea_21.readFeatures(json_FPMFloodplainArea_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPMFloodplainArea_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPMFloodplainArea_21.addFeatures(features_FPMFloodplainArea_21);
var lyr_FPMFloodplainArea_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FPMFloodplainArea_21, 
                style: style_FPMFloodplainArea_21,
                popuplayertitle: "FPM Floodplain Area",
                interactive: false,
                title: '<img src="styles/legend/FPMFloodplainArea_21.png" /> FPM Floodplain Area'
            });
var format_StatePlanningPolicyTransportNoiseCorridor_22 = new ol.format.GeoJSON();
var features_StatePlanningPolicyTransportNoiseCorridor_22 = format_StatePlanningPolicyTransportNoiseCorridor_22.readFeatures(json_StatePlanningPolicyTransportNoiseCorridor_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StatePlanningPolicyTransportNoiseCorridor_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StatePlanningPolicyTransportNoiseCorridor_22.addFeatures(features_StatePlanningPolicyTransportNoiseCorridor_22);
var lyr_StatePlanningPolicyTransportNoiseCorridor_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StatePlanningPolicyTransportNoiseCorridor_22, 
                style: style_StatePlanningPolicyTransportNoiseCorridor_22,
                popuplayertitle: "State Planning Policy Transport Noise Corridor",
                interactive: false,
                title: '<img src="styles/legend/StatePlanningPolicyTransportNoiseCorridor_22.png" /> State Planning Policy Transport Noise Corridor'
            });
var format_Floodfringe_23 = new ol.format.GeoJSON();
var features_Floodfringe_23 = format_Floodfringe_23.readFeatures(json_Floodfringe_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Floodfringe_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Floodfringe_23.addFeatures(features_Floodfringe_23);
var lyr_Floodfringe_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Floodfringe_23, 
                style: style_Floodfringe_23,
                popuplayertitle: "Flood fringe",
                interactive: false,
                title: '<img src="styles/legend/Floodfringe_23.png" /> Flood fringe'
            });
var format_AcidSulfateSoilRisk_24 = new ol.format.GeoJSON();
var features_AcidSulfateSoilRisk_24 = format_AcidSulfateSoilRisk_24.readFeatures(json_AcidSulfateSoilRisk_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcidSulfateSoilRisk_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcidSulfateSoilRisk_24.addFeatures(features_AcidSulfateSoilRisk_24);
var lyr_AcidSulfateSoilRisk_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcidSulfateSoilRisk_24, 
                style: style_AcidSulfateSoilRisk_24,
                popuplayertitle: "Acid Sulfate Soil Risk",
                interactive: false,
                title: '<img src="styles/legend/AcidSulfateSoilRisk_24.png" /> Acid Sulfate Soil Risk'
            });
var format_WBWaterwaysBuffered_25 = new ol.format.GeoJSON();
var features_WBWaterwaysBuffered_25 = format_WBWaterwaysBuffered_25.readFeatures(json_WBWaterwaysBuffered_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WBWaterwaysBuffered_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WBWaterwaysBuffered_25.addFeatures(features_WBWaterwaysBuffered_25);
var lyr_WBWaterwaysBuffered_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WBWaterwaysBuffered_25, 
                style: style_WBWaterwaysBuffered_25,
                popuplayertitle: "WB - Waterways Buffered",
                interactive: false,
                title: '<img src="styles/legend/WBWaterwaysBuffered_25.png" /> WB - Waterways Buffered'
            });
var format_FWFloodway_26 = new ol.format.GeoJSON();
var features_FWFloodway_26 = format_FWFloodway_26.readFeatures(json_FWFloodway_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FWFloodway_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FWFloodway_26.addFeatures(features_FWFloodway_26);
var lyr_FWFloodway_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FWFloodway_26, 
                style: style_FWFloodway_26,
                popuplayertitle: "FW - Floodway",
                interactive: false,
                title: '<img src="styles/legend/FWFloodway_26.png" /> FW - Floodway'
            });
var format_HAHeritageAgreements_27 = new ol.format.GeoJSON();
var features_HAHeritageAgreements_27 = format_HAHeritageAgreements_27.readFeatures(json_HAHeritageAgreements_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAHeritageAgreements_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAHeritageAgreements_27.addFeatures(features_HAHeritageAgreements_27);
var lyr_HAHeritageAgreements_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HAHeritageAgreements_27, 
                style: style_HAHeritageAgreements_27,
                popuplayertitle: "HA - Heritage Agreements",
                interactive: false,
                title: '<img src="styles/legend/HAHeritageAgreements_27.png" /> HA - Heritage Agreements'
            });
var format_PAProtectedAreas_28 = new ol.format.GeoJSON();
var features_PAProtectedAreas_28 = format_PAProtectedAreas_28.readFeatures(json_PAProtectedAreas_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAProtectedAreas_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAProtectedAreas_28.addFeatures(features_PAProtectedAreas_28);
var lyr_PAProtectedAreas_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAProtectedAreas_28, 
                style: style_PAProtectedAreas_28,
                popuplayertitle: "PA - Protected Areas",
                interactive: false,
                title: '<img src="styles/legend/PAProtectedAreas_28.png" /> PA - Protected Areas'
            });
var format_APAssessmentProgram_29 = new ol.format.GeoJSON();
var features_APAssessmentProgram_29 = format_APAssessmentProgram_29.readFeatures(json_APAssessmentProgram_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APAssessmentProgram_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APAssessmentProgram_29.addFeatures(features_APAssessmentProgram_29);
var lyr_APAssessmentProgram_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APAssessmentProgram_29, 
                style: style_APAssessmentProgram_29,
                popuplayertitle: "AP - Assessment Program",
                interactive: false,
                title: '<img src="styles/legend/APAssessmentProgram_29.png" /> AP - Assessment Program'
            });
var format_HAHeritageArea_30 = new ol.format.GeoJSON();
var features_HAHeritageArea_30 = format_HAHeritageArea_30.readFeatures(json_HAHeritageArea_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAHeritageArea_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAHeritageArea_30.addFeatures(features_HAHeritageArea_30);
var lyr_HAHeritageArea_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HAHeritageArea_30, 
                style: style_HAHeritageArea_30,
                popuplayertitle: "HA - Heritage Area",
                interactive: false,
                title: '<img src="styles/legend/HAHeritageArea_30.png" /> HA - Heritage Area'
            });
var format_HLHeritageList_31 = new ol.format.GeoJSON();
var features_HLHeritageList_31 = format_HLHeritageList_31.readFeatures(json_HLHeritageList_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HLHeritageList_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HLHeritageList_31.addFeatures(features_HLHeritageList_31);
var lyr_HLHeritageList_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HLHeritageList_31, 
                style: style_HLHeritageList_31,
                popuplayertitle: "HL - Heritage List",
                interactive: false,
                title: '<img src="styles/legend/HLHeritageList_31.png" /> HL - Heritage List'
            });
var format_LSLocalSurvey_32 = new ol.format.GeoJSON();
var features_LSLocalSurvey_32 = format_LSLocalSurvey_32.readFeatures(json_LSLocalSurvey_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSLocalSurvey_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSLocalSurvey_32.addFeatures(features_LSLocalSurvey_32);
var lyr_LSLocalSurvey_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSLocalSurvey_32, 
                style: style_LSLocalSurvey_32,
                popuplayertitle: "LS - Local Survey",
                interactive: false,
                title: '<img src="styles/legend/LSLocalSurvey_32.png" /> LS - Local Survey'
            });
var format_POProtectionOrder_33 = new ol.format.GeoJSON();
var features_POProtectionOrder_33 = format_POProtectionOrder_33.readFeatures(json_POProtectionOrder_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POProtectionOrder_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POProtectionOrder_33.addFeatures(features_POProtectionOrder_33);
var lyr_POProtectionOrder_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POProtectionOrder_33, 
                style: style_POProtectionOrder_33,
                popuplayertitle: "PO - Protection Order",
                interactive: false,
                title: '<img src="styles/legend/POProtectionOrder_33.png" /> PO - Protection Order'
            });
var format_SRStateRegister_34 = new ol.format.GeoJSON();
var features_SRStateRegister_34 = format_SRStateRegister_34.readFeatures(json_SRStateRegister_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SRStateRegister_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SRStateRegister_34.addFeatures(features_SRStateRegister_34);
var lyr_SRStateRegister_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SRStateRegister_34, 
                style: style_SRStateRegister_34,
                popuplayertitle: "SR - State Register",
                interactive: false,
                title: '<img src="styles/legend/SRStateRegister_34.png" /> SR - State Register'
            });
var format_WAPPWAPetroleumPipeline_35 = new ol.format.GeoJSON();
var features_WAPPWAPetroleumPipeline_35 = format_WAPPWAPetroleumPipeline_35.readFeatures(json_WAPPWAPetroleumPipeline_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WAPPWAPetroleumPipeline_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WAPPWAPetroleumPipeline_35.addFeatures(features_WAPPWAPetroleumPipeline_35);
var lyr_WAPPWAPetroleumPipeline_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WAPPWAPetroleumPipeline_35, 
                style: style_WAPPWAPetroleumPipeline_35,
                popuplayertitle: "WAPP - WA Petroleum Pipeline",
                interactive: false,
                title: '<img src="styles/legend/WAPPWAPetroleumPipeline_35.png" /> WAPP - WA Petroleum Pipeline'
            });
var format_RSSARegionSchemeSpecialAreas_36 = new ol.format.GeoJSON();
var features_RSSARegionSchemeSpecialAreas_36 = format_RSSARegionSchemeSpecialAreas_36.readFeatures(json_RSSARegionSchemeSpecialAreas_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSSARegionSchemeSpecialAreas_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSSARegionSchemeSpecialAreas_36.addFeatures(features_RSSARegionSchemeSpecialAreas_36);
var lyr_RSSARegionSchemeSpecialAreas_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSSARegionSchemeSpecialAreas_36, 
                style: style_RSSARegionSchemeSpecialAreas_36,
                popuplayertitle: "RSSA - Region Scheme Special Areas",
                interactive: false,
                title: '<img src="styles/legend/RSSARegionSchemeSpecialAreas_36.png" /> RSSA - Region Scheme Special Areas'
            });
var format_StructurePlanBoundaries_37 = new ol.format.GeoJSON();
var features_StructurePlanBoundaries_37 = format_StructurePlanBoundaries_37.readFeatures(json_StructurePlanBoundaries_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StructurePlanBoundaries_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StructurePlanBoundaries_37.addFeatures(features_StructurePlanBoundaries_37);
var lyr_StructurePlanBoundaries_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StructurePlanBoundaries_37, 
                style: style_StructurePlanBoundaries_37,
                popuplayertitle: "Structure Plan Boundaries",
                interactive: false,
    title: 'Structure Plan Boundaries<br />\
    <img src="styles/legend/StructurePlanBoundaries_37_0.png" /> District structure plan<br />\
    <img src="styles/legend/StructurePlanBoundaries_37_1.png" /> Structure plan<br />'
        });
var format_MurrayLGA_38 = new ol.format.GeoJSON();
var features_MurrayLGA_38 = format_MurrayLGA_38.readFeatures(json_MurrayLGA_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MurrayLGA_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MurrayLGA_38.addFeatures(features_MurrayLGA_38);
var lyr_MurrayLGA_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MurrayLGA_38, 
                style: style_MurrayLGA_38,
                popuplayertitle: "Murray LGA",
                interactive: false,
                title: '<img src="styles/legend/MurrayLGA_38.png" /> Murray LGA'
            });
var format_Suburb_39 = new ol.format.GeoJSON();
var features_Suburb_39 = format_Suburb_39.readFeatures(json_Suburb_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suburb_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburb_39.addFeatures(features_Suburb_39);
var lyr_Suburb_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburb_39, 
                style: style_Suburb_39,
                popuplayertitle: "Suburb",
                interactive: false,
                title: '<img src="styles/legend/Suburb_39.png" /> Suburb'
            });
var format_ParcelAttributes_40 = new ol.format.GeoJSON();
var features_ParcelAttributes_40 = format_ParcelAttributes_40.readFeatures(json_ParcelAttributes_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelAttributes_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelAttributes_40.addFeatures(features_ParcelAttributes_40);
var lyr_ParcelAttributes_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelAttributes_40, 
                style: style_ParcelAttributes_40,
                popuplayertitle: "Parcel Attributes",
                interactive: true,
                title: '<img src="styles/legend/ParcelAttributes_40.png" /> Parcel Attributes'
            });
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_MurrayLGA_38,lyr_Suburb_39,lyr_ParcelAttributes_40,],
                                fold: "open",
                                title: "Administrative"});
var group_PSPGrowthAreaBoundary = new ol.layer.Group({
                                layers: [lyr_StructurePlanBoundaries_37,],
                                fold: "open",
                                title: "PSP / Growth Area Boundary"});
var group_NDHDeductedOverlays = new ol.layer.Group({
                                layers: [lyr_WBWaterwaysBuffered_25,lyr_FWFloodway_26,lyr_HAHeritageAgreements_27,lyr_PAProtectedAreas_28,lyr_APAssessmentProgram_29,lyr_HAHeritageArea_30,lyr_HLHeritageList_31,lyr_LSLocalSurvey_32,lyr_POProtectionOrder_33,lyr_SRStateRegister_34,lyr_WAPPWAPetroleumPipeline_35,lyr_RSSARegionSchemeSpecialAreas_36,],
                                fold: "open",
                                title: "NDH Deducted Overlays"});
var group_NotetoDD = new ol.layer.Group({
                                layers: [lyr_10metrecontours_14,lyr_BushFireProneAreas2021_15,lyr_AboriginalCulturalHeritageHistoric_16,lyr_AboriginalCulturalHeritageLodged_17,lyr_AboriginalCulturalHeritageRegister_18,lyr_AboriginalCulturalHeritageSurveyAreas_19,lyr_MiningTenements_20,lyr_FPMFloodplainArea_21,lyr_StatePlanningPolicyTransportNoiseCorridor_22,lyr_Floodfringe_23,lyr_AcidSulfateSoilRisk_24,],
                                fold: "open",
                                title: "Note to DD"});
var group_OtherOverlays = new ol.layer.Group({
                                layers: [lyr_CoastalPlanExtents_5,lyr_GovernmentSeweragePolicy_6,lyr_LandsofInterest_7,lyr_LegislatedLandsandWaters_8,lyr_PerthandPeelUrbanLandDevelopmentOutlookResidential_9,lyr_PlanningReferralsContacts_10,lyr_SPPExclusionAreas_11,lyr_SPPExtractionSites_12,lyr_ClearingRegulationsScheduleOneAreas_13,],
                                fold: "open",
                                title: "Other Overlays"});
var group_Zoning = new ol.layer.Group({
                                layers: [lyr_LPSZone_2,lyr_RegionSchemeZones_3,lyr_PerthandPeelLandUse_4,],
                                fold: "open",
                                title: "Zoning"});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: "Base Layer"});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_LPSZone_2.setVisible(false);lyr_RegionSchemeZones_3.setVisible(false);lyr_PerthandPeelLandUse_4.setVisible(false);lyr_CoastalPlanExtents_5.setVisible(false);lyr_GovernmentSeweragePolicy_6.setVisible(false);lyr_LandsofInterest_7.setVisible(false);lyr_LegislatedLandsandWaters_8.setVisible(false);lyr_PerthandPeelUrbanLandDevelopmentOutlookResidential_9.setVisible(false);lyr_PlanningReferralsContacts_10.setVisible(false);lyr_SPPExclusionAreas_11.setVisible(false);lyr_SPPExtractionSites_12.setVisible(false);lyr_ClearingRegulationsScheduleOneAreas_13.setVisible(false);lyr_10metrecontours_14.setVisible(false);lyr_BushFireProneAreas2021_15.setVisible(false);lyr_AboriginalCulturalHeritageHistoric_16.setVisible(false);lyr_AboriginalCulturalHeritageLodged_17.setVisible(false);lyr_AboriginalCulturalHeritageRegister_18.setVisible(false);lyr_AboriginalCulturalHeritageSurveyAreas_19.setVisible(false);lyr_MiningTenements_20.setVisible(false);lyr_FPMFloodplainArea_21.setVisible(false);lyr_StatePlanningPolicyTransportNoiseCorridor_22.setVisible(false);lyr_Floodfringe_23.setVisible(false);lyr_AcidSulfateSoilRisk_24.setVisible(false);lyr_WBWaterwaysBuffered_25.setVisible(false);lyr_FWFloodway_26.setVisible(false);lyr_HAHeritageAgreements_27.setVisible(false);lyr_PAProtectedAreas_28.setVisible(false);lyr_APAssessmentProgram_29.setVisible(false);lyr_HAHeritageArea_30.setVisible(false);lyr_HLHeritageList_31.setVisible(false);lyr_LSLocalSurvey_32.setVisible(false);lyr_POProtectionOrder_33.setVisible(false);lyr_SRStateRegister_34.setVisible(false);lyr_WAPPWAPetroleumPipeline_35.setVisible(false);lyr_RSSARegionSchemeSpecialAreas_36.setVisible(false);lyr_StructurePlanBoundaries_37.setVisible(false);lyr_MurrayLGA_38.setVisible(true);lyr_Suburb_39.setVisible(true);lyr_ParcelAttributes_40.setVisible(true);
var layersList = [group_BaseLayer,group_Zoning,group_OtherOverlays,group_NotetoDD,group_NDHDeductedOverlays,group_PSPGrowthAreaBoundary,group_Administrative];
lyr_LPSZone_2.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'zone_numbe': 'Zone number', 'zone': 'Zone', 'add_label': 'Additional use label', 'rest_label': 'Restricted use label', 'specadd_la': 'Special additional use label', 'special_la': 'Special label', 'label': 'Label', 'label_desc': 'Label description', 'gazettal_d': 'Gazettal date', 'scheme_nam': 'Scheme name', 'lga': 'LGA', 'scheme_no': 'Scheme number', });
lyr_RegionSchemeZones_3.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'rs_code': 'Region scheme code', 'descriptio': 'Description', 'label': 'Label', 'rs_class': 'Zone or Reserve', 'reg_scheme': 'Region scheme', });
lyr_PerthandPeelLandUse_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoastalPlanExtents_5.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'planid': 'Plan ID', 'plan_name': 'Place name', 'plan_title': 'Plan title', 'plan_date': 'Plan date', 'plan_type': 'Plan type', 'author': 'author', 'summary': 'summary', 'status': 'status', 'study_area': 'Study area', 'region': 'region', 'comments': 'comments', });
lyr_GovernmentSeweragePolicy_6.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'layer': 'Policy title', 'feature_ty': 'feature_ty', 'feature_na': 'feature_na', 'label': 'label', 'policy_num': 'policy_num', });
lyr_LandsofInterest_7.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'loi_pin': 'Pin', 'loi_poly_a': 'loi_poly_a', 'loi_identi': 'loi_identi', 'loi_regno': 'Register No.', 'loi_tenure': 'Tenure Category', 'loi_act': 'Act', 'loi_catego': 'loi_catego', 'loi_notes': 'Notes', 'loi_prprie': 'loi_prprie', });
lyr_LegislatedLandsandWaters_8.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'leg_pin': 'Pin', 'leg_poly_a': 'leg_poly_a', 'leg_class': 'Reserve Class', 'leg_identi': 'leg_identi', 'leg_purpos': 'leg_purpos', 'leg_vestin': 'leg_vestin', 'leg_name': 'Reserve Name', 'leg_name_s': 'leg_name_s', 'leg_iucn': 'IUCN Category', 'leg_tenure': 'Tenure Category', 'leg_act': 'Act', 'leg_catego': 'leg_catego', 'leg_notes': 'Notes', 'leg_agreem': 'leg_agreem', 'leg_classi': 'leg_classi', 'leg_regno': 'Register No.', });
lyr_PerthandPeelUrbanLandDevelopmentOutlookResidential_9.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'project_id': 'Project ID', 'lga': 'lga', 'suburb': 'suburb', 'estate_nam': 'Estate Name', 'dev_type': 'Development Type', 'staging': 'staging', 'plus_10yrs': 'Long-term (10+ years)', 'zero_5yrs': 'Short-term (0-5 years)', 'six_10yrs': 'Medium-term (6-10 years)', 'com_floors': 'Amount of floor space', });
lyr_PlanningReferralsContacts_10.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'prc_referr': 'prc_referr', 'prc_contac': 'prc_contac', 'prc_postal': 'prc_postal', 'prc_teleph': 'prc_teleph', 'prc_fax_nu': 'prc_fax_nu', 'prc_email': 'Email Address', 'st_perimet': 'st_perimet', });
lyr_SPPExclusionAreas_11.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'status': 'status', 'extract_da': 'extract_da', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_SPPExtractionSites_12.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'status': 'status', 'extract_da': 'extract_da', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_ClearingRegulationsScheduleOneAreas_13.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'schedule1_': 'schedule1_', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_10metrecontours_14.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'elevation': 'elevation', });
lyr_BushFireProneAreas2021_15.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'lga': 'lga', 'designatio': 'designatio', 'type': 'type', 'designat_1': 'designat_1', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_AboriginalCulturalHeritageHistoric_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ach_identi': 'ach_identi', 'name': 'name', 'place_stat': 'place_stat', 'place_type': 'place_type', 'region': 'region', 'culturally': 'culturally', 'cultural_1': 'cultural_1', 'restricted': 'restricted', 'boundary_r': 'boundary_r', 'knowledge_': 'knowledge_', 'legacy_id': 'legacy_id', 'boundary_l': 'boundary_l', 'objectid': 'objectid', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_AboriginalCulturalHeritageLodged_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ach_identi': 'ach_identi', 'name': 'name', 'place_stat': 'place_stat', 'place_type': 'place_type', 'region': 'region', 'culturally': 'culturally', 'cultural_1': 'cultural_1', 'restricted': 'restricted', 'boundary_r': 'boundary_r', 'knowledge_': 'knowledge_', 'legacy_id': 'legacy_id', 'boundary_l': 'boundary_l', 'objectid': 'objectid', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_AboriginalCulturalHeritageRegister_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ach_identi': 'ach_identi', 'name': 'name', 'place_stat': 'place_stat', 'place_type': 'place_type', 'region': 'region', 'culturally': 'culturally', 'cultural_1': 'cultural_1', 'restricted': 'restricted', 'boundary_r': 'boundary_r', 'knowledge_': 'knowledge_', 'legacy_id': 'legacy_id', 'boundary_l': 'boundary_l', 'objectid': 'objectid', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_AboriginalCulturalHeritageSurveyAreas_19.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'survey_rep': 'survey_rep', 'survey_r_1': 'survey_r_1', 'survey_are': 'survey_are', 'survey_a_1': 'survey_a_1', 'legacy_are': 'legacy_are', 'report_tit': 'report_tit', 'report_aut': 'report_aut', 'area_descr': 'area_descr', 'survey_typ': 'survey_typ', 'spatial_ac': 'spatial_ac', 'field_surv': 'field_surv', 'desktop_su': 'desktop_su', 'boundary_l': 'boundary_l', });
lyr_MiningTenements_20.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'gid': 'gid', 'tenid': 'tenid', 'type': 'type', 'survstatus': 'survstatus', 'tenstatus': 'tenstatus', 'holdercnt': 'holdercnt', 'holder1': 'holder1', 'addr1': 'addr1', 'holder2': 'holder2', 'addr2': 'addr2', 'holder3': 'holder3', 'addr3': 'addr3', 'holder4': 'holder4', 'addr4': 'addr4', 'holder5': 'holder5', 'addr5': 'addr5', 'holder6': 'holder6', 'addr6': 'addr6', 'holder7': 'holder7', 'addr7': 'addr7', 'holder8': 'holder8', 'addr8': 'addr8', 'holder9': 'holder9', 'addr9': 'addr9', 'fmt_tenid': 'fmt_tenid', 'legal_area': 'legal_area', 'unit_of_me': 'unit_of_me', 'special_in': 'special_in', 'extract_da': 'extract_da', 'grantdate': 'grantdate', 'granttime': 'granttime', 'startdate': 'startdate', 'starttime': 'starttime', 'enddate': 'enddate', 'endtime': 'endtime', 'st_area(th': 'st_area(th', 'st_perimet': 'st_perimet', });
lyr_FPMFloodplainArea_21.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'ext_type': 'ext_type', 'status': 'status', 'start_date': 'start_date', 'location': 'location', 'vert_datum': 'vert_datum', 'date_check': 'date_check', 'source': 'source', 'comments': 'comments', 'ufi': 'ufi', 'crt_date': 'crt_date', 'src_date': 'src_date', 'edit_by': 'edit_by', 'auth_by': 'auth_by', 'cap_meth': 'cap_meth', 'cap_scale': 'cap_scale', 'hyd_name': 'hyd_name', 'basin_no': 'basin_no', 'basin_name': 'basin_name', 'p_site_id': 'p_site_id', 'p_site_nam': 'p_site_nam', 'p_stage_le': 'p_stage_le', 'p_ahd_conv': 'p_ahd_conv', 'p_telemetr': 'p_telemetr', 's_site_id': 's_site_id', 's_site_nam': 's_site_nam', 's_stage_le': 's_stage_le', 's_ahd_conv': 's_ahd_conv', 's_telemetr': 's_telemetr', 'fwa_no': 'fwa_no', 'fwa_name': 'fwa_name', 'online': 'online', });
lyr_StatePlanningPolicyTransportNoiseCorridor_22.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'layer': 'layer', 'feature_ty': 'feature_ty', 'feature_na': 'feature_na', 'label': 'label', 'policy_num': 'policy_num', });
lyr_Floodfringe_23.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'ext_type': 'ext_type', 'status': 'status', 'start_date': 'start_date', 'location': 'location', 'vert_datum': 'vert_datum', 'date_check': 'date_check', 'source': 'source', 'comments': 'comments', 'ufi': 'ufi', 'crt_date': 'crt_date', 'src_date': 'src_date', 'edit_by': 'edit_by', 'auth_by': 'auth_by', 'cap_meth': 'cap_meth', 'cap_scale': 'cap_scale', 'online': 'online', });
lyr_AcidSulfateSoilRisk_24.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'createdate': 'Creation Date', 'capture': 'Capture Method', 'riskclass': 'Risk Class', 'risk_categ': 'risk_categ', 'natcode': 'Nat.Code', });
lyr_WBWaterwaysBuffered_25.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_FWFloodway_26.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'ext_type': 'ext_type', 'status': 'status', 'start_date': 'start_date', 'location': 'location', 'vert_datum': 'vert_datum', 'date_check': 'date_check', 'source': 'source', 'comments': 'comments', 'ufi': 'ufi', 'crt_date': 'crt_date', 'src_date': 'src_date', 'edit_by': 'edit_by', 'auth_by': 'auth_by', 'cap_meth': 'cap_meth', 'cap_scale': 'cap_scale', 'online': 'online', });
lyr_HAHeritageAgreements_27.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'her_record': 'her_record', 'date_modif': 'date_modif', 'cluster': 'cluster', 'more_info': 'more_info', });
lyr_PAProtectedAreas_28.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'protecteda': 'protecteda', 'place_name': 'place_name', 'gazette_da': 'gazette_da', 'conditions': 'conditions', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_APAssessmentProgram_29.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'her_record': 'her_record', 'date_modif': 'date_modif', 'cluster': 'cluster', 'more_info': 'more_info', });
lyr_HAHeritageArea_30.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'more_info': 'more_info', 'shape_leng': 'shape_leng', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_HLHeritageList_31.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'more_info': 'more_info', 'shape_leng': 'shape_leng', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_LSLocalSurvey_32.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'her_record': 'her_record', 'date_modif': 'date_modif', 'cluster': 'cluster', 'more_info': 'more_info', });
lyr_POProtectionOrder_33.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'her_record': 'her_record', 'date_modif': 'date_modif', 'cluster': 'cluster', 'more_info': 'more_info', });
lyr_SRStateRegister_34.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'her_record': 'her_record', 'date_modif': 'date_modif', 'cluster': 'cluster', 'more_info': 'more_info', });
lyr_WAPPWAPetroleumPipeline_35.set('fieldAliases', {'oid': 'oid', 'gid': 'gid', 'title_id': 'title_id', 'type': 'type', 'issued': 'issued', 'expiry': 'expiry', 'status': 'status', 'act_abbrev': 'act_abbrev', 'coverage': 'coverage', 'holder_1': 'holder_1', 'holder_2': 'holder_2', 'holder_3': 'holder_3', 'holder_4': 'holder_4', 'holder_5': 'holder_5', 'holder_6': 'holder_6', 'holder_7': 'holder_7', 'holder_8': 'holder_8', 'purpose': 'purpose', 'name': 'name', 'start_poin': 'start_poin', 'end_point': 'end_point', 'built': 'built', 'extract_da': 'extract_da', 'st_area(th': 'st_area(th', 'st_perimet': 'st_perimet', });
lyr_RSSARegionSchemeSpecialAreas_36.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'rs_code': 'rs_code', 'descriptio': 'descriptio', 'site_no': 'site_no', 'label': 'label', 'reg_scheme': 'reg_scheme', });
lyr_StructurePlanBoundaries_37.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'filenumber': 'filenumber', 'alt_title': 'alt_title', 'status': 'status', 'endorsed_d': 'endorsed_d', 'sp_area_ha': 'sp_area_ha', 'type': 'type', });
lyr_MurrayLGA_38.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'boundary_i': 'boundary_i', 'type_code': 'type_code', 'type_descr': 'type_descr', 'feature_nu': 'feature_nu', 'name': 'name', 'abs_lga_nu': 'abs_lga_nu', 'postcode': 'postcode', 'land_area': 'land_area', 'area_deriv': 'area_deriv', });
lyr_Suburb_39.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ParcelAttributes_40.set('fieldAliases', {'fid': 'fid', 'object_id': 'object_id', 'Unique ID': 'Unique ID', 'Suburb': 'Suburb', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned / Rezone': 'Zoned / Rezone', 'Zoning': 'Zoning', 'Strategy': 'Strategy', 'Strat Link': 'Strat Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 20dw/HA (450m2)': 'Lot Yield @ 20dw/HA (450m2)', 'VALUE @ 450m2': 'VALUE @ 450m2', 'Value @ 20%DM': 'Value @ 20%DM', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Value @ 10%DM': 'Value @ 10%DM', 'Value @ 12%DM': 'Value @ 12%DM', 'Value @ 15%DM': 'Value @ 15%DM', 'Value @ 25%DM': 'Value @ 25%DM', 'Value @ 30%DM': 'Value @ 30%DM', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 
    'Vendor Address': 'Vendor Address', 'Vendor Mobile': 'Vendor Mobile', 'Vendor Email': 'Vendor Email', 'Lead Link': 'Lead Link', 'location_address': 'location_address', });
lyr_LPSZone_2.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'zone_numbe': 'TextEdit', 'zone': 'TextEdit', 'add_label': 'TextEdit', 'rest_label': 'TextEdit', 'specadd_la': 'TextEdit', 'special_la': 'TextEdit', 'label': 'TextEdit', 'label_desc': 'TextEdit', 'gazettal_d': 'DateTime', 'scheme_nam': 'TextEdit', 'lga': 'TextEdit', 'scheme_no': 'TextEdit', });
lyr_RegionSchemeZones_3.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'rs_code': 'TextEdit', 'descriptio': 'TextEdit', 'label': 'TextEdit', 'rs_class': 'TextEdit', 'reg_scheme': 'TextEdit', });
lyr_PerthandPeelLandUse_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'OBJECTID': 'TextEdit', 'LUGROUP': 'TextEdit', 'LUTYPE': 'TextEdit', 'LUSUBTYPE': 'TextEdit', 'SP_TITLE': 'TextEdit', 'SUBREGION': 'TextEdit', 'LABEL': 'TextEdit', 'STAGING': 'TextEdit', 'STAGINGSCH': 'TextEdit', 'CHANGETOFR': 'TextEdit', 'FRAMEWORKL': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'COMMENT_': 'TextEdit', 'ADDITIONAL': 'TextEdit', 'SOURCE': 'TextEdit', 'REF_NO': 'TextEdit', 'TYPOLOGY': 'TextEdit', 'CODE': 'TextEdit', 'CLASSOFACT': 'TextEdit', 'COACOMMENT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoastalPlanExtents_5.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'planid': 'TextEdit', 'plan_name': 'TextEdit', 'plan_title': 'TextEdit', 'plan_date': 'TextEdit', 'plan_type': 'TextEdit', 'author': 'TextEdit', 'summary': 'TextEdit', 'status': 'TextEdit', 'study_area': 'TextEdit', 'region': 'TextEdit', 'comments': 'TextEdit', });
lyr_GovernmentSeweragePolicy_6.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'layer': 'TextEdit', 'feature_ty': 'TextEdit', 'feature_na': 'TextEdit', 'label': 'TextEdit', 'policy_num': 'TextEdit', });
lyr_LandsofInterest_7.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'loi_pin': 'TextEdit', 'loi_poly_a': 'TextEdit', 'loi_identi': 'TextEdit', 'loi_regno': 'TextEdit', 'loi_tenure': 'TextEdit', 'loi_act': 'TextEdit', 'loi_catego': 'TextEdit', 'loi_notes': 'TextEdit', 'loi_prprie': 'TextEdit', });
lyr_LegislatedLandsandWaters_8.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'leg_pin': 'TextEdit', 'leg_poly_a': 'TextEdit', 'leg_class': 'TextEdit', 'leg_identi': 'TextEdit', 'leg_purpos': 'TextEdit', 'leg_vestin': 'TextEdit', 'leg_name': 'TextEdit', 'leg_name_s': 'TextEdit', 'leg_iucn': 'TextEdit', 'leg_tenure': 'TextEdit', 'leg_act': 'TextEdit', 'leg_catego': 'TextEdit', 'leg_notes': 'TextEdit', 'leg_agreem': 'TextEdit', 'leg_classi': 'TextEdit', 'leg_regno': 'TextEdit', });
lyr_PerthandPeelUrbanLandDevelopmentOutlookResidential_9.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'project_id': 'TextEdit', 'lga': 'TextEdit', 'suburb': 'TextEdit', 'estate_nam': 'TextEdit', 'dev_type': 'TextEdit', 'staging': 'TextEdit', 'plus_10yrs': 'TextEdit', 'zero_5yrs': 'TextEdit', 'six_10yrs': 'TextEdit', 'com_floors': 'TextEdit', });
lyr_PlanningReferralsContacts_10.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'prc_referr': 'TextEdit', 'prc_contac': 'TextEdit', 'prc_postal': 'TextEdit', 'prc_teleph': 'TextEdit', 'prc_fax_nu': 'TextEdit', 'prc_email': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_SPPExclusionAreas_11.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'status': 'TextEdit', 'extract_da': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_SPPExtractionSites_12.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'status': 'TextEdit', 'extract_da': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_ClearingRegulationsScheduleOneAreas_13.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'schedule1_': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_10metrecontours_14.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'elevation': 'TextEdit', });
lyr_BushFireProneAreas2021_15.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'lga': 'TextEdit', 'designatio': 'TextEdit', 'type': 'TextEdit', 'designat_1': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_AboriginalCulturalHeritageHistoric_16.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ach_identi': 'TextEdit', 'name': 'TextEdit', 'place_stat': 'TextEdit', 'place_type': 'TextEdit', 'region': 'TextEdit', 'culturally': 'TextEdit', 'cultural_1': 'TextEdit', 'restricted': 'TextEdit', 'boundary_r': 'TextEdit', 'knowledge_': 'TextEdit', 'legacy_id': 'TextEdit', 'boundary_l': 'TextEdit', 'objectid': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_AboriginalCulturalHeritageLodged_17.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ach_identi': 'TextEdit', 'name': 'TextEdit', 'place_stat': 'TextEdit', 'place_type': 'TextEdit', 'region': 'TextEdit', 'culturally': 'TextEdit', 'cultural_1': 'TextEdit', 'restricted': 'TextEdit', 'boundary_r': 'TextEdit', 'knowledge_': 'TextEdit', 'legacy_id': 'TextEdit', 'boundary_l': 'TextEdit', 'objectid': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_AboriginalCulturalHeritageRegister_18.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ach_identi': 'TextEdit', 'name': 'TextEdit', 'place_stat': 'TextEdit', 'place_type': 'TextEdit', 'region': 'TextEdit', 'culturally': 'TextEdit', 'cultural_1': 'TextEdit', 'restricted': 'TextEdit', 'boundary_r': 'TextEdit', 'knowledge_': 'TextEdit', 'legacy_id': 'TextEdit', 'boundary_l': 'TextEdit', 'objectid': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_AboriginalCulturalHeritageSurveyAreas_19.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'survey_rep': 'TextEdit', 'survey_r_1': 'TextEdit', 'survey_are': 'TextEdit', 'survey_a_1': 'TextEdit', 'legacy_are': 'TextEdit', 'report_tit': 'TextEdit', 'report_aut': 'TextEdit', 'area_descr': 'TextEdit', 'survey_typ': 'TextEdit', 'spatial_ac': 'TextEdit', 'field_surv': 'TextEdit', 'desktop_su': 'TextEdit', 'boundary_l': 'TextEdit', });
lyr_MiningTenements_20.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'gid': 'TextEdit', 'tenid': 'TextEdit', 'type': 'TextEdit', 'survstatus': 'TextEdit', 'tenstatus': 'TextEdit', 'holdercnt': 'TextEdit', 'holder1': 'TextEdit', 'addr1': 'TextEdit', 'holder2': 'TextEdit', 'addr2': 'TextEdit', 'holder3': 'TextEdit', 'addr3': 'TextEdit', 'holder4': 'TextEdit', 'addr4': 'TextEdit', 'holder5': 'TextEdit', 'addr5': 'TextEdit', 'holder6': 'TextEdit', 'addr6': 'TextEdit', 'holder7': 'TextEdit', 'addr7': 'TextEdit', 'holder8': 'TextEdit', 'addr8': 'TextEdit', 'holder9': 'TextEdit', 'addr9': 'TextEdit', 'fmt_tenid': 'TextEdit', 'legal_area': 'TextEdit', 'unit_of_me': 'TextEdit', 'special_in': 'TextEdit', 'extract_da': 'TextEdit', 'grantdate': 'TextEdit', 'granttime': 'TextEdit', 'startdate': 'TextEdit', 'starttime': 'TextEdit', 'enddate': 'TextEdit', 'endtime': 'TextEdit', 'st_area(th': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_FPMFloodplainArea_21.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'ext_type': 'TextEdit', 'status': 'TextEdit', 'start_date': 'TextEdit', 'location': 'TextEdit', 'vert_datum': 'TextEdit', 'date_check': 'TextEdit', 'source': 'TextEdit', 'comments': 'TextEdit', 'ufi': 'TextEdit', 'crt_date': 'TextEdit', 'src_date': 'TextEdit', 'edit_by': 'TextEdit', 'auth_by': 'TextEdit', 'cap_meth': 'TextEdit', 'cap_scale': 'TextEdit', 'hyd_name': 'TextEdit', 'basin_no': 'TextEdit', 'basin_name': 'TextEdit', 'p_site_id': 'TextEdit', 'p_site_nam': 'TextEdit', 'p_stage_le': 'TextEdit', 'p_ahd_conv': 'TextEdit', 'p_telemetr': 'TextEdit', 's_site_id': 'TextEdit', 's_site_nam': 'TextEdit', 's_stage_le': 'TextEdit', 's_ahd_conv': 'TextEdit', 's_telemetr': 'TextEdit', 'fwa_no': 'TextEdit', 'fwa_name': 'TextEdit', 'online': 'TextEdit', });
lyr_StatePlanningPolicyTransportNoiseCorridor_22.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'layer': 'TextEdit', 'feature_ty': 'TextEdit', 'feature_na': 'TextEdit', 'label': 'TextEdit', 'policy_num': 'TextEdit', });
lyr_Floodfringe_23.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'ext_type': 'TextEdit', 'status': 'TextEdit', 'start_date': 'TextEdit', 'location': 'TextEdit', 'vert_datum': 'TextEdit', 'date_check': 'TextEdit', 'source': 'TextEdit', 'comments': 'TextEdit', 'ufi': 'TextEdit', 'crt_date': 'TextEdit', 'src_date': 'TextEdit', 'edit_by': 'TextEdit', 'auth_by': 'TextEdit', 'cap_meth': 'TextEdit', 'cap_scale': 'TextEdit', 'online': 'TextEdit', });
lyr_AcidSulfateSoilRisk_24.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'createdate': 'TextEdit', 'capture': 'TextEdit', 'riskclass': 'TextEdit', 'risk_categ': 'TextEdit', 'natcode': 'TextEdit', });
lyr_WBWaterwaysBuffered_25.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_FWFloodway_26.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'ext_type': 'TextEdit', 'status': 'TextEdit', 'start_date': 'TextEdit', 'location': 'TextEdit', 'vert_datum': 'TextEdit', 'date_check': 'TextEdit', 'source': 'TextEdit', 'comments': 'TextEdit', 'ufi': 'TextEdit', 'crt_date': 'TextEdit', 'src_date': 'TextEdit', 'edit_by': 'TextEdit', 'auth_by': 'TextEdit', 'cap_meth': 'TextEdit', 'cap_scale': 'TextEdit', 'online': 'TextEdit', });
lyr_HAHeritageAgreements_27.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'her_record': 'TextEdit', 'date_modif': 'TextEdit', 'cluster': 'TextEdit', 'more_info': 'TextEdit', });
lyr_PAProtectedAreas_28.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'protecteda': 'TextEdit', 'place_name': 'TextEdit', 'gazette_da': 'TextEdit', 'conditions': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_APAssessmentProgram_29.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'her_record': 'TextEdit', 'date_modif': 'TextEdit', 'cluster': 'TextEdit', 'more_info': 'TextEdit', });
lyr_HAHeritageArea_30.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'more_info': 'TextEdit', 'shape_leng': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_HLHeritageList_31.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'more_info': 'TextEdit', 'shape_leng': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_LSLocalSurvey_32.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'her_record': 'TextEdit', 'date_modif': 'TextEdit', 'cluster': 'TextEdit', 'more_info': 'TextEdit', });
lyr_POProtectionOrder_33.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'her_record': 'TextEdit', 'date_modif': 'TextEdit', 'cluster': 'TextEdit', 'more_info': 'TextEdit', });
lyr_SRStateRegister_34.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'her_record': 'TextEdit', 'date_modif': 'TextEdit', 'cluster': 'TextEdit', 'more_info': 'TextEdit', });
lyr_WAPPWAPetroleumPipeline_35.set('fieldImages', {'oid': 'TextEdit', 'gid': 'TextEdit', 'title_id': 'TextEdit', 'type': 'TextEdit', 'issued': 'TextEdit', 'expiry': 'TextEdit', 'status': 'TextEdit', 'act_abbrev': 'TextEdit', 'coverage': 'TextEdit', 'holder_1': 'TextEdit', 'holder_2': 'TextEdit', 'holder_3': 'TextEdit', 'holder_4': 'TextEdit', 'holder_5': 'TextEdit', 'holder_6': 'TextEdit', 'holder_7': 'TextEdit', 'holder_8': 'TextEdit', 'purpose': 'TextEdit', 'name': 'TextEdit', 'start_poin': 'TextEdit', 'end_point': 'TextEdit', 'built': 'TextEdit', 'extract_da': 'TextEdit', 'st_area(th': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_RSSARegionSchemeSpecialAreas_36.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'rs_code': 'TextEdit', 'descriptio': 'TextEdit', 'site_no': 'TextEdit', 'label': 'TextEdit', 'reg_scheme': 'TextEdit', });
lyr_StructurePlanBoundaries_37.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'filenumber': 'TextEdit', 'alt_title': 'TextEdit', 'status': 'TextEdit', 'endorsed_d': 'DateTime', 'sp_area_ha': 'TextEdit', 'type': 'TextEdit', });
lyr_MurrayLGA_38.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'boundary_i': 'TextEdit', 'type_code': 'TextEdit', 'type_descr': 'TextEdit', 'feature_nu': 'TextEdit', 'name': 'TextEdit', 'abs_lga_nu': 'TextEdit', 'postcode': 'TextEdit', 'land_area': 'TextEdit', 'area_deriv': 'TextEdit', });
lyr_Suburb_39.set('fieldImages', {'fid': 'TextEdit', 'SAL_CODE21': '', 'SAL_NAME21': '', 'STE_CODE21': '', 'STE_NAME21': '', 'AUS_CODE21': '', 'AUS_NAME21': '', 'AREASQKM21': '', 'LOCI_URI21': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_ParcelAttributes_40.set('fieldImages', {'fid': 'TextEdit', 'object_id': 'TextEdit', 'Unique ID': 'Range', 'Suburb': 'TextEdit', 'PARCEL': 'TextEdit', 'Address': 'TextEdit', 'Zoned / Rezone': 'TextEdit', 'Zoning': 'TextEdit', 'Strategy': 'TextEdit', 'Strat Link': 'TextEdit', 'Overlays': 'TextEdit', 'Gross HA': 'TextEdit', 'NDH': 'TextEdit', 'Lot Yield @ 20dw/HA (450m2)': 'TextEdit', 'VALUE @ 450m2': 'TextEdit', 'Value @ 20%DM': 'TextEdit', 'Current RLP': 'TextEdit', 'Current OPC': 'TextEdit', 'Value @ 10%DM': 'TextEdit', 'Value @ 12%DM': 'TextEdit', 'Value @ 15%DM': 'TextEdit', 'Value @ 25%DM': 'TextEdit', 'Value @ 30%DM': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'Estate Status': 'TextEdit', 'Developer': 'TextEdit', 'Vendor Company': 'TextEdit', 'Vendor Names': 'TextEdit', 
    'Vendor Address': 'TextEdit', 'Vendor Mobile': 'TextEdit', 'Vendor Email': 'TextEdit', 'Lead Link': 'TextEdit', 'location_address': 'TextEdit', });
lyr_LPSZone_2.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'zone_numbe': 'hidden field', 'zone': 'hidden field', 'add_label': 'hidden field', 'rest_label': 'hidden field', 'specadd_la': 'hidden field', 'special_la': 'hidden field', 'label': 'hidden field', 'label_desc': 'hidden field', 'gazettal_d': 'hidden field', 'scheme_nam': 'hidden field', 'lga': 'hidden field', 'scheme_no': 'hidden field', });
lyr_RegionSchemeZones_3.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'label': 'hidden field', 'rs_class': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_PerthandPeelLandUse_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'OBJECTID': 'hidden field', 'LUGROUP': 'hidden field', 'LUTYPE': 'hidden field', 'LUSUBTYPE': 'hidden field', 'SP_TITLE': 'hidden field', 'SUBREGION': 'hidden field', 'LABEL': 'hidden field', 'STAGING': 'hidden field', 'STAGINGSCH': 'hidden field', 'CHANGETOFR': 'hidden field', 'FRAMEWORKL': 'hidden field', 'DESCRIPTIO': 'hidden field', 'COMMENT_': 'hidden field', 'ADDITIONAL': 'hidden field', 'SOURCE': 'hidden field', 'REF_NO': 'hidden field', 'TYPOLOGY': 'hidden field', 'CODE': 'hidden field', 'CLASSOFACT': 'hidden field', 'COACOMMENT': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_CoastalPlanExtents_5.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'planid': 'hidden field', 'plan_name': 'hidden field', 'plan_title': 'hidden field', 'plan_date': 'hidden field', 'plan_type': 'hidden field', 'author': 'hidden field', 'summary': 'hidden field', 'status': 'hidden field', 'study_area': 'hidden field', 'region': 'hidden field', 'comments': 'hidden field', });
lyr_GovernmentSeweragePolicy_6.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'layer': 'hidden field', 'feature_ty': 'hidden field', 'feature_na': 'hidden field', 'label': 'hidden field', 'policy_num': 'hidden field', });
lyr_LandsofInterest_7.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'loi_pin': 'hidden field', 'loi_poly_a': 'hidden field', 'loi_identi': 'hidden field', 'loi_regno': 'hidden field', 'loi_tenure': 'hidden field', 'loi_act': 'hidden field', 'loi_catego': 'hidden field', 'loi_notes': 'hidden field', 'loi_prprie': 'hidden field', });
lyr_LegislatedLandsandWaters_8.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'leg_pin': 'hidden field', 'leg_poly_a': 'hidden field', 'leg_class': 'hidden field', 'leg_identi': 'hidden field', 'leg_purpos': 'hidden field', 'leg_vestin': 'hidden field', 'leg_name': 'hidden field', 'leg_name_s': 'hidden field', 'leg_iucn': 'hidden field', 'leg_tenure': 'hidden field', 'leg_act': 'hidden field', 'leg_catego': 'hidden field', 'leg_notes': 'hidden field', 'leg_agreem': 'hidden field', 'leg_classi': 'hidden field', 'leg_regno': 'hidden field', });
lyr_PerthandPeelUrbanLandDevelopmentOutlookResidential_9.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'project_id': 'hidden field', 'lga': 'hidden field', 'suburb': 'hidden field', 'estate_nam': 'hidden field', 'dev_type': 'hidden field', 'staging': 'hidden field', 'plus_10yrs': 'hidden field', 'zero_5yrs': 'hidden field', 'six_10yrs': 'hidden field', 'com_floors': 'hidden field', });
lyr_PlanningReferralsContacts_10.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'prc_referr': 'hidden field', 'prc_contac': 'hidden field', 'prc_postal': 'hidden field', 'prc_teleph': 'hidden field', 'prc_fax_nu': 'hidden field', 'prc_email': 'hidden field', 'st_perimet': 'hidden field', });
lyr_SPPExclusionAreas_11.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'status': 'hidden field', 'extract_da': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_SPPExtractionSites_12.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'status': 'hidden field', 'extract_da': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_ClearingRegulationsScheduleOneAreas_13.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'schedule1_': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_10metrecontours_14.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'elevation': 'hidden field', });
lyr_BushFireProneAreas2021_15.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'lga': 'hidden field', 'designatio': 'hidden field', 'type': 'hidden field', 'designat_1': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_AboriginalCulturalHeritageHistoric_16.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'ach_identi': 'hidden field', 'name': 'hidden field', 'place_stat': 'hidden field', 'place_type': 'hidden field', 'region': 'hidden field', 'culturally': 'hidden field', 'cultural_1': 'hidden field', 'restricted': 'hidden field', 'boundary_r': 'hidden field', 'knowledge_': 'hidden field', 'legacy_id': 'hidden field', 'boundary_l': 'hidden field', 'objectid': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_AboriginalCulturalHeritageLodged_17.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'ach_identi': 'hidden field', 'name': 'hidden field', 'place_stat': 'hidden field', 'place_type': 'hidden field', 'region': 'hidden field', 'culturally': 'hidden field', 'cultural_1': 'hidden field', 'restricted': 'hidden field', 'boundary_r': 'hidden field', 'knowledge_': 'hidden field', 'legacy_id': 'hidden field', 'boundary_l': 'hidden field', 'objectid': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_AboriginalCulturalHeritageRegister_18.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'ach_identi': 'hidden field', 'name': 'hidden field', 'place_stat': 'hidden field', 'place_type': 'hidden field', 'region': 'hidden field', 'culturally': 'hidden field', 'cultural_1': 'hidden field', 'restricted': 'hidden field', 'boundary_r': 'hidden field', 'knowledge_': 'hidden field', 'legacy_id': 'hidden field', 'boundary_l': 'hidden field', 'objectid': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_AboriginalCulturalHeritageSurveyAreas_19.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'survey_rep': 'hidden field', 'survey_r_1': 'hidden field', 'survey_are': 'hidden field', 'survey_a_1': 'hidden field', 'legacy_are': 'hidden field', 'report_tit': 'hidden field', 'report_aut': 'hidden field', 'area_descr': 'hidden field', 'survey_typ': 'hidden field', 'spatial_ac': 'hidden field', 'field_surv': 'hidden field', 'desktop_su': 'hidden field', 'boundary_l': 'hidden field', });
lyr_MiningTenements_20.set('fieldLabels', {'fid': 'hidden field', 'oid': 'hidden field', 'gid': 'hidden field', 'tenid': 'hidden field', 'type': 'hidden field', 'survstatus': 'hidden field', 'tenstatus': 'hidden field', 'holdercnt': 'hidden field', 'holder1': 'hidden field', 'addr1': 'hidden field', 'holder2': 'hidden field', 'addr2': 'hidden field', 'holder3': 'hidden field', 'addr3': 'hidden field', 'holder4': 'hidden field', 'addr4': 'hidden field', 'holder5': 'hidden field', 'addr5': 'hidden field', 'holder6': 'hidden field', 'addr6': 'hidden field', 'holder7': 'hidden field', 'addr7': 'hidden field', 'holder8': 'hidden field', 'addr8': 'hidden field', 'holder9': 'hidden field', 'addr9': 'hidden field', 'fmt_tenid': 'hidden field', 'legal_area': 'hidden field', 'unit_of_me': 'hidden field', 'special_in': 'hidden field', 'extract_da': 'hidden field', 'grantdate': 'hidden field', 'granttime': 'hidden field', 'startdate': 'hidden field', 'starttime': 'hidden field', 'enddate': 'hidden field', 'endtime': 'hidden field', 'st_area(th': 'hidden field', 'st_perimet': 'hidden field', });
lyr_FPMFloodplainArea_21.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'ext_type': 'hidden field', 'status': 'hidden field', 'start_date': 'hidden field', 'location': 'hidden field', 'vert_datum': 'hidden field', 'date_check': 'hidden field', 'source': 'hidden field', 'comments': 'hidden field', 'ufi': 'hidden field', 'crt_date': 'hidden field', 'src_date': 'hidden field', 'edit_by': 'hidden field', 'auth_by': 'hidden field', 'cap_meth': 'hidden field', 'cap_scale': 'hidden field', 'hyd_name': 'hidden field', 'basin_no': 'hidden field', 'basin_name': 'hidden field', 'p_site_id': 'hidden field', 'p_site_nam': 'hidden field', 'p_stage_le': 'hidden field', 'p_ahd_conv': 'hidden field', 'p_telemetr': 'hidden field', 's_site_id': 'hidden field', 's_site_nam': 'hidden field', 's_stage_le': 'hidden field', 's_ahd_conv': 'hidden field', 's_telemetr': 'hidden field', 'fwa_no': 'hidden field', 'fwa_name': 'hidden field', 'online': 'hidden field', });
lyr_StatePlanningPolicyTransportNoiseCorridor_22.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'layer': 'hidden field', 'feature_ty': 'hidden field', 'feature_na': 'hidden field', 'label': 'hidden field', 'policy_num': 'hidden field', });
lyr_Floodfringe_23.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'ext_type': 'hidden field', 'status': 'hidden field', 'start_date': 'hidden field', 'location': 'hidden field', 'vert_datum': 'hidden field', 'date_check': 'hidden field', 'source': 'hidden field', 'comments': 'hidden field', 'ufi': 'hidden field', 'crt_date': 'hidden field', 'src_date': 'hidden field', 'edit_by': 'hidden field', 'auth_by': 'hidden field', 'cap_meth': 'hidden field', 'cap_scale': 'hidden field', 'online': 'hidden field', });
lyr_AcidSulfateSoilRisk_24.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'createdate': 'hidden field', 'capture': 'hidden field', 'riskclass': 'hidden field', 'risk_categ': 'hidden field', 'natcode': 'hidden field', });
lyr_WBWaterwaysBuffered_25.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_FWFloodway_26.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'ext_type': 'hidden field', 'status': 'hidden field', 'start_date': 'hidden field', 'location': 'hidden field', 'vert_datum': 'hidden field', 'date_check': 'hidden field', 'source': 'hidden field', 'comments': 'hidden field', 'ufi': 'hidden field', 'crt_date': 'hidden field', 'src_date': 'hidden field', 'edit_by': 'hidden field', 'auth_by': 'hidden field', 'cap_meth': 'hidden field', 'cap_scale': 'hidden field', 'online': 'hidden field', });
lyr_HAHeritageAgreements_27.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'her_record': 'hidden field', 'date_modif': 'hidden field', 'cluster': 'hidden field', 'more_info': 'hidden field', });
lyr_PAProtectedAreas_28.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'protecteda': 'hidden field', 'place_name': 'hidden field', 'gazette_da': 'hidden field', 'conditions': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_APAssessmentProgram_29.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'her_record': 'hidden field', 'date_modif': 'hidden field', 'cluster': 'hidden field', 'more_info': 'hidden field', });
lyr_HAHeritageArea_30.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'more_info': 'hidden field', 'shape_leng': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_HLHeritageList_31.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'more_info': 'hidden field', 'shape_leng': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_LSLocalSurvey_32.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'her_record': 'hidden field', 'date_modif': 'hidden field', 'cluster': 'hidden field', 'more_info': 'hidden field', });
lyr_POProtectionOrder_33.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'her_record': 'hidden field', 'date_modif': 'hidden field', 'cluster': 'hidden field', 'more_info': 'hidden field', });
lyr_SRStateRegister_34.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'her_record': 'hidden field', 'date_modif': 'hidden field', 'cluster': 'hidden field', 'more_info': 'hidden field', });
lyr_WAPPWAPetroleumPipeline_35.set('fieldLabels', {'oid': 'hidden field', 'gid': 'hidden field', 'title_id': 'hidden field', 'type': 'hidden field', 'issued': 'hidden field', 'expiry': 'hidden field', 'status': 'hidden field', 'act_abbrev': 'hidden field', 'coverage': 'hidden field', 'holder_1': 'hidden field', 'holder_2': 'hidden field', 'holder_3': 'hidden field', 'holder_4': 'hidden field', 'holder_5': 'hidden field', 'holder_6': 'hidden field', 'holder_7': 'hidden field', 'holder_8': 'hidden field', 'purpose': 'hidden field', 'name': 'hidden field', 'start_poin': 'hidden field', 'end_point': 'hidden field', 'built': 'hidden field', 'extract_da': 'hidden field', 'st_area(th': 'hidden field', 'st_perimet': 'hidden field', });
lyr_RSSARegionSchemeSpecialAreas_36.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'site_no': 'hidden field', 'label': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_StructurePlanBoundaries_37.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'filenumber': 'hidden field', 'alt_title': 'hidden field', 'status': 'hidden field', 'endorsed_d': 'hidden field', 'sp_area_ha': 'hidden field', 'type': 'hidden field', });
lyr_MurrayLGA_38.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'boundary_i': 'hidden field', 'type_code': 'hidden field', 'type_descr': 'hidden field', 'feature_nu': 'hidden field', 'name': 'hidden field', 'abs_lga_nu': 'hidden field', 'postcode': 'hidden field', 'land_area': 'hidden field', 'area_deriv': 'hidden field', });
lyr_Suburb_39.set('fieldLabels', {'fid': 'hidden field', 'SAL_CODE21': 'hidden field', 'SAL_NAME21': 'hidden field', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM21': 'hidden field', 'LOCI_URI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_ParcelAttributes_40.set('fieldLabels', {'fid': 'hidden field', 'object_id': 'hidden field', 'Unique ID': 'hidden field', 'Suburb': 'hidden field', 'PARCEL': 'header label - always visible', 'Address': 'inline label - always visible', 'Zoned / Rezone': 'inline label - always visible', 'Zoning': 'inline label - always visible', 'Strategy': 'inline label - always visible', 'Strat Link': 'inline label - always visible', 'Overlays': 'inline label - always visible', 'Gross HA': 'inline label - always visible', 'NDH': 'inline label - always visible', 'Lot Yield @ 20dw/HA (450m2)': 'inline label - always visible', 'VALUE @ 450m2': 'header label - always visible', 'Value @ 20%DM': 'inline label - always visible', 'Current RLP': 'inline label - always visible', 'Current OPC': 'inline label - always visible', 'Value @ 10%DM': 'inline label - always visible', 'Value @ 12%DM': 'inline label - always visible', 'Value @ 15%DM': 'inline label - always visible', 'Value @ 25%DM': 'inline label - always visible', 'Value @ 30%DM': 'inline label - always visible', 'OWNERSHIP': 'header label - always visible', 'Estate Status': 'inline label - always visible', 'Developer': 'inline label - always visible', 'Vendor Company': 'inline label - always visible', 'Vendor Names': 'inline label - always visible', 
    'Vendor Address': 'inline label - always visible', 'Vendor Mobile': 'inline label - always visible', 'Vendor Email': 'inline label - always visible', 'Lead Link': 'no label', 'location_address': 'hidden field', });
lyr_ParcelAttributes_40.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});