import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/cartPage/Cart';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
