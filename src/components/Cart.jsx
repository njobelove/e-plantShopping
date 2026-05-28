import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const navigate = useNavigate();

  const totalCost = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <h2>Your cart is empty 🌱</h2>
          <button onClick={() => navigate('/products')}>Continue Shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="cart-total">
        Total: ${totalCost}
      </div>
      <div className="cart-actions">
        <button onClick={() => navigate('/products')}>Continue Shopping</button>
        <button onClick={() => alert('Proceeding to checkout!')}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;