import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './pages/Layouts';


import './App.css';

function App() {
  return (
    <>
     <BrowserRouter>
      {/* <NavSection /> */}
      <Routes>
        <Route path="/" element={<Layouts />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App; 