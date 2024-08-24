import './App.css';
import Navbar from './components/header/Navbar';
import Maincomponent from './components/home/Maincomponent';
import Newnav from './components/newnavbaar/Newnav';
import Footer from './components/footer/footer';
import Sign_in from "./components/signin/sign_in";
import Sign_up from "./components/signin/sign_up";
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import {Route, Routes } from 'react-router-dom';
function App() {
  return (
    <><Navbar/>
    <Newnav/>
    <Routes>
      <Route path='/' element={<Maincomponent/>}/>
      <Route path='/login' element={<Sign_in/>}/>
      <Route path='/register' element={<Sign_up/>}/>
      <Route path='/getproductone/:id' element={<Cart/>}/>
      <Route path='/buynow' element={<Buynow/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
