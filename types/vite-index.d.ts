/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Tuesday, September 20th 2022, 4:51:45 pm
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2022 黑发
 */
import BaiduMap from './map/Map.vue';
import BmScale from './controls/Scale.vue';
import BmNavigation from './controls/Navigation.vue';
import BmMapType from './controls/MapType.vue';
import BmOverviewMap from './controls/OverviewMap.vue';
import BmGeolocation from './controls/Geolocation.vue';
import BmCopyright from './controls/Copyright.vue';
import BmCityList from './controls/CityList.vue';
import BmPanorama from './controls/Panorama.vue';
import BmControl from './controls/Control.vue';
import BmMarker from './overlays/Marker.vue';
import BmPointCollection from './overlays/PointCollection.vue';
import BmPolyline from './overlays/Polyline.vue';
import BmPolygon from './overlays/Polygon.vue';
import BmCircle from './overlays/Circle.vue';
import BmGround from './overlays/Ground.vue';
import BmLabel from './overlays/Label.vue';
import BmInfoWindow from './overlays/InfoWindow.vue';
import BmOverlay from './overlays/Overlay.vue';
import BmContextMenu from './context-menu/Menu.vue';
import BmContextMenuItem from './context-menu/Item.vue';
import BmLocalSearch from './search/LocalSearch.vue';
import BmTransit from './search/Transit.vue';
import BmWalking from './search/Walking.vue';
import BmDriving from './search/Driving.vue';
import BmBus from './search/Bus.vue';
import BmTile from './layers/Tile.vue';
import BmTraffic from './layers/Traffic.vue';
import BmBoundary from './others/Boundary.vue';
import BmAutoComplete from './others/AutoComplete.vue';
import BmlMarkerClusterer from './extra/MarkerClusterer.vue';
import BmlLushu from './extra/Lushu.vue';
import BmlHeatmap from './extra/Heatmap.vue';
import BmlCurveLine from './extra/CurveLine.vue';
import { getConfig } from './base/util';
import { getAddressByPoints, getPointByAddress, getPointsTransfer } from './utils';
declare const _default: {
    install(Vue: any, options?: {}): void;
};
export default _default;
export { BaiduMap, BmScale, BmNavigation, BmMapType, BmOverviewMap, BmGeolocation, BmCopyright, BmCityList, BmPanorama, BmControl, BmMarker, BmPointCollection, BmPolyline, BmPolygon, BmCircle, BmGround, BmLabel, BmInfoWindow, BmOverlay, BmContextMenu, BmContextMenuItem, BmLocalSearch, BmTransit, BmWalking, BmDriving, BmBus, BmTile, BmTraffic, BmBoundary, BmAutoComplete, BmlMarkerClusterer, BmlLushu, BmlHeatmap, BmlCurveLine };
export { getAddressByPoints, getPointByAddress, getPointsTransfer, getConfig };
