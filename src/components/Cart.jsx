import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

function Cart() {
  const { items } = useSelector(state => state.cart);
  const navigate = useNavigate();

  // Calculate total cart amount by iterating through all items
  const totalCartAmount = items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  if (items.length === 0) {
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
      <div className="cart-items">
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-total">
        <h3>Total Cart Amount: ${totalCartAmount.toFixed(2)}</h3>
      </div>
      <div className="cart-actions">
        <button onClick={() => navigate('/products')}>Continue Shopping</button>
        <button onClick={() => alert('Proceeding to checkout! Total: $' + totalCartAmount.toFixed(2))}>
          Checkout (${totalCartAmount.toFixed(2)})
        </button>
      </div>
    </div>
  );
}

export default Cart;
