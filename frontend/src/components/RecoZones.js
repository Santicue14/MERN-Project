import React from 'react';
import {GeoJSON, LayersControl, MapContainer, TileLayer} from 'react-leaflet';
import Jcp_Zonas from './mapas/JOSE_C_PAZ_ZONAS.json';
import './styles/map.css'
/*let asfaltica_2017 = {color: 'green'};
let asfaltica_2018 = {color: 'black'};
let asfaltica_2020 = {color: 'blue'};
let hormigon_2017 = {color: 'yellow'};
let hormigon_2019 = {color: 'red'};
let hormigon_2020 = {color: 'red'};
let nac_y_prov2021 = {color:'orange'};*/
const info = JSON.parse(JSON.stringify(Jcp_Zonas.features))

function capitalizar(str){
  return str.replace(/\w\S*/g, function(e) {
    return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
});
}
const GeoZones = () => {
    const createZone = (zoneData) => (
      <LayersControl.Overlay key={zoneData.properties.Name} checked name={capitalizar(zoneData.properties.Name)}>
        <GeoJSON
          data={zoneData}
          style={(feature) => ({
            color: feature.color,
            weight: 0.5,
            opacity: 1,
          })}
          onEachFeature={(feature, zone) => {
            zone.bindPopup(`${capitalizar(feature.properties.Name)}`);
          }}
        />
      </LayersControl.Overlay>
    );
  
    return (
      info.map((zone) => createZone(zone))
    );
  }
  const MapReco = () => { 
    return (<div className='map-container'>
    <MapContainer center={[-34.518524, -58.751895]} className='mapClass' zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <LayersControl>
     {/* <Layers />  */}
     <GeoZones /> 
    </LayersControl>
    </MapContainer>
    </div>)
}

export default MapReco;