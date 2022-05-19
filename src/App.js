import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Entry from './component/Entry';

function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" exact element={<Entry/>}/>
    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
