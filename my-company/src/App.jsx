import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

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
