import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function Landing() {
  const navigate = useNavigate();
  
  return (
    <div className="landing background-image">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Bring nature home with our premium house plants</p>
      <button onClick={() => navigate('/products')}>
        Get Started
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
