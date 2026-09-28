import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
import { useState } from 'react';
import axios from 'axios';
import type getLocationType from './types/locationType';
import type { setResponseType } from './types/locationType';
import Footer from './components/Footer';

function App() {
  const [location, setLocation] = useState<setResponseType|null>(null);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [locationButtonLoader, setLocationButtonLoader] = useState<boolean>(false);

  // Function to get Current Location
  const getLocation = (): void => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const {latitude, longitude} = pos.coords;
      const url: string = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      setLocationButtonLoader(true);
      try {
        const location = await axios.get<getLocationType>(url);
        setLocation(location.data.address);
        setOpenDropdown(false);
        setLocationButtonLoader(false);
      } catch(err) {
        console.log(err);
      }
      });
    }
    // ---

  return(
    <>
    <NavBar location={location} getLocation={getLocation} locationButtonLoader={locationButtonLoader} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
