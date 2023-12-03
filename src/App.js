import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './pages/Layouts';


import './App.css';

function App() {
  return (
    <>
     <BrowserRouter basename='/sample-dashboard'>
      {/* <NavSection /> */}
      <Routes>
        <Route exact path="/" element={<Layouts />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App; 