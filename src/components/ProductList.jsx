import { useDispatch } from 'react-redux';
import { addToCart } from '../store/CartSlice';

const plantsData = {
  aromatic: [
    { id: 1, name: 'Lavender', price: 15, image: 'https://images.unsplash.com/photo-1612528443702-f6741f4c2e7a?w=300', description: 'Calming purple blooms with soothing fragrance', category: 'Aromatic' },
    { id: 2, name: 'Rosemary', price: 12, image: 'https://images.unsplash.com/photo-1585747865715-247223c6b2c1?w=300', description: 'Fragrant herb perfect for cooking', category: 'Aromatic' },
    { id: 3, name: 'Mint', price: 8, image: 'https://images.unsplash.com/photo-1585609569449-3f23675c9709?w=300', description: 'Fresh mint leaves for tea and cooking', category: 'Aromatic' },
  ],
  medicinal: [
    { id: 4, name: 'Aloe Vera', price: 18, image: 'https://images.unsplash.com/photo-1602173574767-37e76c6bb2ea?w=300', description: 'Healing gel for skin care', category: 'Medicinal' },
    { id: 5, name: 'Tulsi (Holy Basil)', price: 20, image: 'https://images.unsplash.com/photo-1620655581873-7c6b16b1e273?w=300', description: 'Ayurvedic immunity booster', category: 'Medicinal' },
    { id: 6, name: 'Echinacea', price: 22, image: 'https://images.unsplash.com/photo-1602002398782-9c6ae18f75b8?w=300', description: 'Cold and flu fighter', category: 'Medicinal' },
  ],
};

function ProductList() {
  const dispatch = useDispatch();

  const PlantCard = ({ plant }) => (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <div className="price">${plant.price}</div>
      <button onClick={() => dispatch(addToCart(plant))}>Add to Cart 🌿</button>
    </div>
  );

  return (
    <div>
      <h2 className="section-title">🌿 Aromatic Plants 🌿</h2>
      <div className="product-grid">
        {plantsData.aromatic.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>

      <h2 className="section-title">🌱 Medicinal Plants 🌱</h2>
      <div className="product-grid">
        {plantsData.medicinal.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;