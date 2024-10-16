import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import RealEstate from './components/RealEstate';
import Cars from './components/Cars';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import RealEstateTemplate from './components/RealEstateTemplate';
import CarsTemplate from './components/CarsTemplate';
import PaymentTemplate from './components/PaymentTemplate';
import Congratulations from './components/Congratulations';
import PaymentTemplateRealestate from './components/PaymentTemplateRealestate';
import CongratulationInCar from './components/CongratulationInCar';


function App() {

  return (
    <div className="App">

      <ScrollToTop />
      <Navbar />
                              
      {/* <Routes>
        <Route path='/' element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path='/realestate' element={<RealEstate />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/realestate' element={<RealEstate />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/realestate/template' element={<RealEstateTemplate />}/>
        <Route path='/cars/template' element={<CarsTemplate />}/>
        <Route path='/checkout' element={<PaymentTemplate/>} />
        <Route path='/congrats' element={<Congratulations/>} />
        <Route path='/checkoutRealestate' element={<PaymentTemplateRealestate/>} />
        <Route path='/congratsCar' element={<CongratulationInCar/>} />
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
