import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../store/CartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const itemTotal = item.price * item.quantity;

  // Increment quantity
  const increment = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  // Decrement quantity
  const decrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  // Handle quantity change from input
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <div>Unit: ${item.price}</div>
      <div>
        <button onClick={decrement} className="qty-btn">-</button>
        <input 
          type="number" 
          min="0" 
          value={item.quantity}
          onChange={handleQuantityChange}
          className="qty-input"
        />
        <button onClick={increment} className="qty-btn">+</button>
      </div>
      <div><strong>Total: ${itemTotal.toFixed(2)}</strong></div>
      <button onClick={handleRemove} className="delete-btn">Delete 🗑️</button>
    </div>
  );
}

export default CartItem;
