import React, { useContext, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { Context } from './main';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import Loading from './Loading';
import Map from './Map';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Admin from './Admin';
function App() {
  const firestore = useContext(Context);
  const [trees, loading, error] = useCollectionData(
    collection(firestore, 'trees')
  );
  return (
    <div className='App' style={{ width: '100%', height: '100vh' }}>
      <Navbar />
      <Loading isLoading={loading} />
      <Routes>
        <Route path='/' element={<Map trees={trees} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
