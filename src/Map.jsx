import { useState } from 'react';
import { Clusterer, Map, Placemark, Polygon } from '@pbe/react-yandex-maps';
import config from './config.json';
import { Container } from './styles/styles';
import Swal from 'sweetalert2';

const MapContainer = ({ trees, setPlacemarkCoords }) => {
  const [zoom, setZoom] = useState(17);
  const handleClick = tree => {
    const customPopup = Swal.mixin({
      customClass: {
        htmlContainer: 'alert',
      },
    });
    customPopup.fire({
      title: `<span className='span-block'><b>Daraxt nomi: </b>${tree.name}</span>`,
      showCloseButton: true,
      theme: 'dark',
      html: `<p>
        <span className='span-block'>
          <b>Ilmiy Nomi: </b>
          ${tree.scientificName}
        </span>
        <span className='span-block'>
          <b>Daraxt yoshi: </b>
          ${new Date().getFullYear() - tree.yearOfPlant}
        </span>
        <span className='span-block'>
          <b>Mas'ul: </b>
          ${tree.maintainedBy}
        </span>
        <span className='span-block'>
          <b>Daraxt IDsi </b>
          ${tree.id}
        </span>
        <span className='span-block'>
          <b>Daraxt diametri: </b>
          ${tree.diameter}cm
        </span>
        <span className='span-block'>
          <b>Joylashuvi: </b>
          ${tree.coordinates[0]}N, ${tree.coordinates[1]}E
        </span>
      </p>`,
    });
  };
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
              onClick={() => handleClick(tree)}
              options={{
                preset: 'islands#circleIcon',
                iconColor: '#1aa73c',
              }}
            />
          ))}
        </Clusterer>

        <Placemark
          geometry={config.center}
          options={{ draggable: true }}
          state={zoom}
          onDragEnd={e =>
            setPlacemarkCoords(e.originalEvent.target.geometry.getCoordinates())
          }
        />
      </Map>
    </Container>
  );
};

export default MapContainer;
