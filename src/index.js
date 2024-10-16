import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RealEstateProvider } from './context/RealEstate';
import { CarsProvider } from './context/Cars';
import { RandomBoolProvider } from './context/RandomBoolContext';
import { ToastContainer } from 'react-toast';
import "react-toastify/dist/ReactToastify.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RealEstateProvider>
      <CarsProvider>
        <RandomBoolProvider>
          <App />
          <ToastContainer />
        </RandomBoolProvider>
      </CarsProvider>
    </RealEstateProvider>
  </BrowserRouter>
);


