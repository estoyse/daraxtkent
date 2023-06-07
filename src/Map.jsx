import { useState } from 'react';
import { Clusterer, Map, Placemark, Polygon } from '@pbe/react-yandex-maps';
import config from './config.json';
import { Container } from './styles/styles';

const MapContainer = ({ trees, setPlacemarkCoords, modalOpen }) => {
  const [zoom, setZoom] = useState(17);
  return (
    <Container>
      <Map
        defaultState={{ center: config.center, zoom: 17 }}
        height='100%'
        width='100%'
        defaultOptions={{ minZoom: 13 }}
        onWheel={e => setZoom(e.originalEvent.map.action._zoom)}
      >
        <Polygon
          defaultGeometry={config.tsueArea}
          defaultOptions={{ fillColor: '#0211ef', fillOpacity: 0.2 }}
        />
        <Clusterer
          options={{
            preset: 'islands#invertedGreenClusterIcons',
            groupByCoordinates: zoom >= 20,
          }}
        >
          {trees?.map(tree => (
            <Placemark
              key={tree.id}
              geometry={tree.coordinates}
              onClick={() => console.log('clicked', tree.id)}
              options={{
                preset: 'islands#circleIcon',
                iconColor: '#1aa73c',
              }}
            />
          ))}
        </Clusterer>
        {modalOpen && (
          <Placemark
            geometry={config.center}
            options={{ draggable: true }}
            state={zoom}
            onDragEnd={e =>
              setPlacemarkCoords(
                e.originalEvent.target.geometry.getCoordinates()
              )
            }
          />
        )}
      </Map>
    </Container>
  );
};

export default MapContainer;
