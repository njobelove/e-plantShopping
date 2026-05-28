import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../store/CartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const itemTotal = item.price * item.quantity;

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
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
        <label>Quantity: </label>
        <input type="number" min="0" value={item.quantity} onChange={handleQuantityChange} style={{ width: '60px', margin: '0 10px' }} />
      </div>
      <div><strong>Total: ${itemTotal}</strong></div>
      <button onClick={handleRemove}>Delete 🗑️</button>
    </div>
  );
}

export default CartItem;
