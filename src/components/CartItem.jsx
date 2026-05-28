import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../store/CartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const itemTotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <div>Unit: ${item.price}</div>
      <div>
        <div className="quantity-controls">
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>
      </div>
      <div><strong>Total: ${itemTotal}</strong></div>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Delete 🗑️</button>
    </div>
  );
}

export default CartItem;