import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

function Cart() {
  const { items, totalAmount } = useSelector(state => state.cart);
  const navigate = useNavigate();

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
      {items.map(item => <CartItem key={item.id} item={item} />)}
      <div className="cart-total">
        <h3>Total Cart Amount: ${totalAmount}</h3>
      </div>
      <div className="cart-actions">
        <button onClick={() => navigate('/products')}>Continue Shopping</button>
        <button onClick={() => alert('Proceeding to checkout! Total: $' + totalAmount)}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
