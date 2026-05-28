import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>🌿 Welcome to Paradise Nursery 🌿</h1>
      <p>Bring nature home with our premium house plants</p>
      <button onClick={() => navigate('/products')}>
        🌱 Shop Now 🌱
      </button>
    </div>
  );
}

export default Landing;