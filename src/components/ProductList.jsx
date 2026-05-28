import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/CartSlice';

const plantsData = {
  aromatic: [
    { id: 1, name: 'Lavender', price: 15, image: 'https://images.unsplash.com/photo-1612528443702-f6741f4c2e7a?w=300', description: 'Calming purple blooms with soothing fragrance' },
    { id: 2, name: 'Rosemary', price: 12, image: 'https://images.unsplash.com/photo-1585747865715-247223c6b2c1?w=300', description: 'Fragrant herb perfect for cooking' },
    { id: 3, name: 'Mint', price: 8, image: 'https://images.unsplash.com/photo-1585609569449-3f23675c9709?w=300', description: 'Fresh mint leaves for tea and cooking' },
    { id: 4, name: 'Jasmine', price: 20, image: 'https://images.unsplash.com/photo-1599661046285-e8d1f7aec6fb?w=300', description: 'Sweet fragrance fills the air' },
    { id: 5, name: 'Eucalyptus', price: 18, image: 'https://images.unsplash.com/photo-1609439547168-c9732b4b5b6e?w=300', description: 'Refreshing scent for relaxation' },
    { id: 6, name: 'Sage', price: 14, image: 'https://images.unsplash.com/photo-1599571231811-e9f30b2e1fc9?w=300', description: 'Earthy aroma for cooking and wellness' },
  ],
  medicinal: [
    { id: 7, name: 'Aloe Vera', price: 18, image: 'https://images.unsplash.com/photo-1602173574767-37e76c6bb2ea?w=300', description: 'Healing gel for skin care' },
    { id: 8, name: 'Tulsi', price: 20, image: 'https://images.unsplash.com/photo-1620655581873-7c6b16b1e273?w=300', description: 'Ayurvedic immunity booster' },
    { id: 9, name: 'Echinacea', price: 22, image: 'https://images.unsplash.com/photo-1602002398782-9c6ae18f75b8?w=300', description: 'Cold and flu fighter' },
    { id: 10, name: 'Ginger', price: 16, image: 'https://images.unsplash.com/photo-1596041154024-a9b7e94cba2c?w=300', description: 'Digestive health and anti-inflammatory' },
    { id: 11, name: 'Turmeric', price: 19, image: 'https://images.unsplash.com/photo-1615485500704-8e990f3d6c3a?w=300', description: 'Powerful antioxidant properties' },
    { id: 12, name: 'Peppermint', price: 13, image: 'https://images.unsplash.com/photo-1599571231811-e9f30b2e1fc9?w=300', description: 'Soothes digestive issues' },
  ],
};

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems(prev => ({ ...prev, [plant.id]: true }));
  };

  const PlantCard = ({ plant }) => {
    const isAdded = addedItems[plant.id];
    
    return (
      <div className="plant-card">
        <img src={plant.image} alt={plant.name} />
        <h3>{plant.name}</h3>
        <p>{plant.description}</p>
        <div className="price">${plant.price}</div>
        <button 
          onClick={() => handleAddToCart(plant)}
          disabled={isAdded}
        >
          {isAdded ? '✓ Added to Cart' : 'Add to Cart 🌿'}
        </button>
      </div>
    );
  };

  return (
    <div>
      <h2 className="section-title">🌿 Aromatic Plants (6 varieties) 🌿</h2>
      <div className="product-grid">
        {plantsData.aromatic.map(plant => <PlantCard key={plant.id} plant={plant} />)}
      </div>
      <h2 className="section-title">🌱 Medicinal Plants (6 varieties) 🌱</h2>
      <div className="product-grid">
        {plantsData.medicinal.map(plant => <PlantCard key={plant.id} plant={plant} />)}
      </div>
    </div>
  );
}

export default ProductList;
