import React from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import config from './config.json';
import Tree from './Tree';

const Map = ({ trees }) => {
  return (
    <MapContainer
      center={config.center}
      zoom={17}
      minZoom={16}
      maxZoom={21}
      zoomControl={false}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Polygon
        pathOptions={{ color: '#0211efaa' }}
        positions={config.tsueArea}
      />
      <div className='trees'>
        {trees?.map(tree => (
          <Tree key={tree.id} data={tree} />
        ))}
      </div>
    </MapContainer>
  );
};

export default Map;
