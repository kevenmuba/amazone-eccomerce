import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { initialState, reducer } from './Utility/reducer';
import { DataProvider } from './components/DataProvider/DataProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <DataProvider reducer={reducer} initialState={initialState} >
    <App />
    </DataProvider>
    
    </BrowserRouter>
    
  </React.StrictMode>
);

/*
children yemilew app componentu slehonr le reducer and initial state lay expect yemiyaregewun degmo ke utility reducer.js ametanlet */