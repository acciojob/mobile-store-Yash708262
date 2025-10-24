import React, { useState } from "react";

const AdminPanel = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({
    name: "", price: "", description: "", image: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setNewProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.description || !newProduct.image) {
      alert("Please fill all fields");
      return;
    }
    
    const id = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
    setProducts([...products, { 
      id, 
      ...newProduct, 
      price: parseFloat(newProduct.price) 
    }]);
    setNewProduct({ name: "", price: "", description: "", image: "" });
  };

  const handleDelete = id => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleEdit = (id, key, value) => {
    setProducts(products.map(p => p.id === id ? { ...p, [key]: value } : p));
  };

  return (
    <div className="container">
      <h1>Admin Panel</h1>

      <h2>Add Product</h2>
      <input name="name" placeholder="Name" value={newProduct.name} onChange={handleChange} className="form-control"/>
      <input name="description" placeholder="Description" value={newProduct.description} onChange={handleChange} className="form-control"/>
      <input name="image" placeholder="Image URL" value={newProduct.image} onChange={handleChange} className="form-control"/>
      <input name="price" type="number" placeholder="Price" value={newProduct.price} onChange={handleChange} className="form-control"/>
      <button onClick={handleAdd}>Add Product</button>

      <h2>Existing Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div className="product-item" key={product.id}>
            <div className="product-info">
              <img src={product.image} alt={product.name} width="50" />
              <div className="product-details">
                <strong>{product.name}</strong>
                <span>${product.price}</span>
              </div>
            </div>
            <div className="product-actions">
              <button 
                onClick={() => {
                  const newPrice = prompt("Enter new price:", product.price);
                  if (newPrice && !isNaN(newPrice)) {
                    handleEdit(product.id, "price", parseFloat(newPrice));
                  }
                }}
              >
                Edit Price
              </button>
              <button 
                className="delete-btn"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          padding: 20px;
        }
        .form-control {
          display: block;
          margin: 10px 0;
          padding: 8px;
          width: 100%;
          max-width: 300px;
        }
        button {
          margin: 5px;
          padding: 8px 16px;
          cursor: pointer;
        }
        .delete-btn {
          background: #ff4444;
          color: white;
          border: none;
        }
        .product-list {
          margin-top: 20px;
        }
        .product-item {
          display: flex;
          justify-content: between;
          align-items: center;
          padding: 10px;
          border: 1px solid #ddd;
          margin: 10px 0;
          border-radius: 4px;
        }
        .product-info {
          display: flex;
          align-items: center;
          flex: 1;
        }
        .product-details {
          margin-left: 15px;
        }
        .product-details strong {
          display: block;
        }
        .product-actions {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </div>
  );
};

export default AdminPanel;