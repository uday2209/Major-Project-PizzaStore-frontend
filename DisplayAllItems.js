import { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/items')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}: ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayItems;