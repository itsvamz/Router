import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import { useSelector } from 'react-redux';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const route = useSelector(state => state.route);

  useEffect(() => {
    // You can add any side effects here, like updating the map when the route changes
  }, [route]);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {route.coordinates && (
        <Polyline positions={route.coordinates} color="blue" />
      )}
    </MapContainer>
  );
};

export default Map;

