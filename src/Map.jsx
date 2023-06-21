import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Clusterer, Map, Placemark, Polygon } from '@pbe/react-yandex-maps';
import Swal from 'sweetalert2';
import { Context } from './main';
import config from './config.json';
import Modal from './Modal';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import Loading from './components/Loading';

const MapContainer = () => {
  const [zoom, setZoom] = useState(17);
  const firestore = useContext(Context);
  const [trees, loading] = useCollectionData(collection(firestore, 'trees'));
  const [modalOpen, setModalOpen] = useState(false);
  const [placemarkCoords, setPlacemarkCoords] = useState([
    41.309805, 69.248903,
  ]);
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
    <>
      <Loading isLoading={loading} />
      <nav className='z-10 w-full fixed backdrop-blur  bg-[#fffe] dark:bg-[#0f172a]'>
        <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
          <div className='flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative'>
            <div className='relative z-20 w-full flex justify-between  md:px-0'>
              <Link to='/'>
                <img
                  src='/images/logo.svg'
                  alt=''
                  className='w-24 ease-linear transition-all'
                />
              </Link>
              <span
                onClick={() => setModalOpen(!modalOpen)}
                className='relative flex h-9 items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 cursor-pointer'
              >
                <span className='relative text-sm font-semibold text-white'>
                  Daraxt Qo&apos;shish
                </span>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div className='w-full h-[100vh] overflow-hidden'>
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
              setPlacemarkCoords(
                e.originalEvent.target.geometry.getCoordinates()
              )
            }
          />
        </Map>
      </div>
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        placemarkCoords={placemarkCoords}
        setPlacemarkCoords={setPlacemarkCoords}
      />
    </>
  );
};

export default MapContainer;
