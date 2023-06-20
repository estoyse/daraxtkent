import { useContext, useState } from 'react';
import { Context } from './main';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import Loading from './components/Loading';
import Map from './Map';
import Navbar from './components/Navbar';
import Modal from './Modal';
function App() {
  const firestore = useContext(Context);
  const [trees, loading] = useCollectionData(collection(firestore, 'trees'));
  const [modalOpen, setModalOpen] = useState(false);
  const [placemarkCoords, setPlacemarkCoords] = useState([
    41.309805, 69.248903,
  ]);

  return (
    <>
      <Navbar modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Loading isLoading={loading} />
      <Map
        trees={trees}
        setPlacemarkCoords={setPlacemarkCoords}
        modalOpen={modalOpen}
      />
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        placemarkCoords={placemarkCoords}
        setPlacemarkCoords={setPlacemarkCoords}
      />
    </>
  );
}

export default App;
