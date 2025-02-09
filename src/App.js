import './App.css';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App container">
      <Navbar/>
      <Products/>
    </div>
  );
}

export default App;
