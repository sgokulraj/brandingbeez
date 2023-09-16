import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Home';
import Highlights from './Highlights';
import Curriculum from './Curriculam';
import Instructor from './Instructor';
import Reviews from './Review';

function App() {
  return (
    <>
      <div style={{color:'black'}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="#highlights" element={<Highlights />} />
            <Route path="#curriculum" element={<Curriculum />} />
            <Route path="#instructor" element={<Instructor />} />
            <Route path="#reviews" element={<Reviews />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
