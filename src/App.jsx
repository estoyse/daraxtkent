import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import About from './pages/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/map' element={<Map />} />
        <Route path='/more' element={<About />} />
      </Routes>
    </>
  );
}
export default App;
