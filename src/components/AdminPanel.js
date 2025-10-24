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
    const id = products.length ? products[products.length - 1].id + 1 : 1;
    setProducts([...products, { id, ...newProduct }]);
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
      <input name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} className="form-control"/>
      <button onClick={handleAdd}>Add</button>

      <h2>Existing Products</h2>
      <div className="row">
        {products.map(p => (
          <div className="col-12" key={p.id}>
            <div>
              <a href="#">
                <div className="row">
                  <div>{p.name}</div>
                  <div>${p.price}</div>
                </div>
              </a>
              <button className="float-right" onClick={() => handleDelete(p.id)}>Delete</button>
              <button className="float-right" onClick={() => {
                const newPrice = prompt("Enter new price:", p.price);
                if (newPrice) handleEdit(p.id, "price", newPrice);
              }}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
