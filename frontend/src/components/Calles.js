import { MapContainer,TileLayer, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './styles/map.css'
import Layers from './Asfaltos.js'
// import Zonas from './zones'
// import GeoZonas from './zones';

const callesMapa = () => { 
    return (<MapContainer center={[-34.518524, -58.751895]} className='mapClass' zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <LayersControl>
         <Layers />
    </LayersControl>
    </MapContainer>)
}

export default callesMapa;