//@ts-nocheck
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

const center = { lat: 37.9631388, lng: -87.5670065 };

const DynamicMap = () => {
  return (
    <MapContainer
      className="z-20 relative"
      center={center}
      zoom={12}
      style={{ height: '460px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        position={center}
        icon={L.icon({
          iconUrl: '/favicon.png',
        })}
      />
      <ChangeView coords={center} />
    </MapContainer>
  );
};

export default DynamicMap;
