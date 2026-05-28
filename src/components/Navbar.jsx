import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  // Get cart count for the badge
  const cartCount = useSelector(state => 
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <nav className="navbar">
      <h2>🌿 Paradise Nursery</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/products">Plants</Link></li>
        <li>
          <Link to="/cart" className="cart-icon">
            🛒 Cart
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
