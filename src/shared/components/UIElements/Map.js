import React from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import './Map.css';

const Map = props => {
  const { center, zoom } = props;
  return (
      <div className={`map ${props.className}`} style={props.style}>
        <MapContainer  center={center} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                    <Popup>
                    
                    </Popup>
                </Marker>
            </MapContainer>
      </div>
    
  );
};

export default Map;