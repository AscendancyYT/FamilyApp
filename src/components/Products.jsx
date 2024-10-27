import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = ({ userRole }) => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const addProduct = async () => {
    if (newProduct.trim()) {
      try {
        const response = await axios.post('http://localhost:5000/api/products', { name: newProduct });
        setProducts([...products, response.data]);
        setNewProduct('');
      } catch (error) {
        console.error('Error adding product:', error);
      }
    }
  };

  return (
    <div className="container protected-content">
      <h2>Needed Products</h2>
      {userRole === 'mom' && (
        <div>
          <input
            type="text"
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
            placeholder="Add a product"
          />
          <button onClick={addProduct}>Add Product</button>
        </div>
      )}
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
