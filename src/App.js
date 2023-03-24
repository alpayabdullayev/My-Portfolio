import'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.esm'
import './App.css';
import Navbar from './companents/Navbar/Navbar';


import 'atropos/react'


import Footer from './companents/Footer/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homes from './pages/Homes';
import NotFound from './pages/NotFound';
import About from './pages/About/About';

import Services from './pages/Servicess/Services'
import ServicesContainer from './pages/Servicess/ServicesContainer';
import ReviewsContainers from './pages/ReviewsPages/ReviewsContainers';
import Work from './pages/Work/Work'
import Contact from './pages/Contact/Contact';
import AOS from 'aos'
import'aos/dist/aos.css'
AOS.init();





function App() {


  return (
    <>

    <BrowserRouter>
        <Navbar/>

        
       
        
            <Routes>
              
                <Route path='/' element={<Homes />} />
                <Route path='*' element={<NotFound />}/>
                <Route path='/about' element={<div id='content-wrapper'><About /></div>}/>
                <Route path='/xitmetlerimiz' element={<div id='content-wrapper'><ServicesContainer /></div>} />
                <Route path='/reviews' element={<div id='content-wrapper'><ReviewsContainers /></div>} />
                <Route path='/work' element={<div id='content-wrapper'><Work /></div>} />
                <Route path='/contact' element={<div id='content-wrapper'><Contact /></div>} />
            </Routes>
        

    <div id='content-wrapper'><Footer /></div>
        
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
