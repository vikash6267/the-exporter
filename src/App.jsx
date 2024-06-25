import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import Aboutus from './Pages/Aboutus';
import AllProduct from './Pages/AllProduct';
import Navbar from './component/Header/Navbar';
import Footer from './component/common/Footer';
function App() {
  return (
    <div className="App">
<Navbar></Navbar>
    <Routes>
    <Route element={<Home/>} path='/' />
    <Route element={<ContactUs/>} path='/contact' />
    <Route element={<Aboutus/>} path='/about' />
    <Route element={<AllProduct/>} path='/product' />


    </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
