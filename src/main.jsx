import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { BrowserRouter } from 'react-router-dom';
import { YMaps } from '@pbe/react-yandex-maps';

const app = initializeApp({
  apiKey: 'AIzaSyCi1qwNgo1CByx5hsGN4tBqbci7CldFbqk',
  authDomain: 'tsue-urban-tree-managment.firebaseapp.com',
  projectId: 'tsue-urban-tree-managment',
  storageBucket: 'tsue-urban-tree-managment.appspot.com',
  messagingSenderId: '1088272268359',
  appId: '1:1088272268359:web:5b95df87ca562093f04562',
});
export const firestore = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <YMaps>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </YMaps>
  </React.StrictMode>
);
