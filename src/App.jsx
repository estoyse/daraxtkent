import { Routes, Route } from 'react-router-dom';
import Map from './Map';
import Home from './Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </>
  );
}

//   <Map
//     trees={trees}
//     setPlacemarkCoords={setPlacemarkCoords}
//     modalOpen={modalOpen}
//   />
//
// </>
export default App;
