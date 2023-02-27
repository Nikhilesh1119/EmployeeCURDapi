import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Update } from './components/Update';
import Info from './components/Info';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/update' element={<Update/>} />
          <Route path='/info' element={<Info/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
