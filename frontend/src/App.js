// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import DetileProduct from './pages/DetileProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/' element={<Home />} />
        <Route path='/detile-product' element={<DetileProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user-cart' element={<Cart />} /> 
      </Routes>
    </div>
  );
}

export default App;
