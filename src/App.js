import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Entry from './component/Entry';
import View from './component/View';

function App() {
  return (
    <>
    <BrowserRouter> 
    <Routes>
      <Route path="/" exact element={<Entry/>}/>
      <Route path="/" exact element={<View/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
    
  );
}

export default App;
