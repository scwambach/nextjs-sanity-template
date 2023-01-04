//@ts-nocheck
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import FdMarker from '@meronex/icons/fd/FdMarker';
export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

const DynamicMap = () => {
  const [geoData, setGeoData] = useState({ lat: 37.9631388, lng: -87.5670065 });

  const center = [geoData.lat, geoData.lng];

  return (
    <MapContainer
      className="z-20 relative"
      center={center}
      zoom={12}
      style={{ height: '460px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geoData.lat && geoData.lng && (
        <Marker
          position={[geoData.lat, geoData.lng]}
          icon={L.icon({
            iconUrl: '/favicon.png',
          })}
        />
      )}
      <ChangeView coords={center} />
    </MapContainer>
  );
};

export default DynamicMap;
