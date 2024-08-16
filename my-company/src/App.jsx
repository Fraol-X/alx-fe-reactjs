import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';

function App () {

    return (

            <BrowserRouter>

            <div style={{fontFamily: 'Arial'}}>

                <Navbar />

                <Routes>
                    <Route path='/home' element= {<Home />} />
                    <Route path='/about' element= {<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>

            </div>

            </BrowserRouter>
        
    );
}

export default App; 