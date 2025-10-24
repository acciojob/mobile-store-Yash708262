import React, { useState } from "react";

const AdminPanel = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.description || !newProduct.image) {
      alert("Please fill all fields");
      return;
    }
    const id = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
    setProducts([...products, { id, ...newProduct, price: parseFloat(newProduct.price) }]);
    setNewProduct({ name: "", price: "", description: "", image: "" });
  };

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleEdit = (id) => {
    const newPrice = prompt("Enter new price:", products.find(p => p.id === id)?.price);
    if (newPrice && !isNaN(newPrice)) {
      setProducts(products.map(p => p.id === id ? { ...p, price: parseFloat(newPrice) } : p));
    }
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
        {products.map((product, index) => (
          <div className={`col${index + 1}`} key={product.id}>
            <div>
              <a href="#">
                <div className="row">
                  <div className="col">{product.name}</div>
                  <div className="col">${product.price}</div>
                </div>
              </a>
              <button className="float-right" onClick={() => handleEdit(product.id)}>Edit</button>
              <button className="float-right" onClick={() => handleDelete(product.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container { padding: 20px; }
        .form-control { display:block; margin:10px 0; padding:8px; width:100%; max-width:300px; }
        button { margin:5px; padding:6px 12px; cursor:pointer; }
        .float-right { margin-left:5px; }
        .product-list { margin-top:20px; }
        .row { display:flex; justify-content:space-between; padding:10px; border:1px solid #ddd; margin-bottom:10px; border-radius:4px; text-decoration:none; color:black; }
        .row:hover { background-color:#f9f9f9; }
      `}</style>
    </div>
  );
};

export default AdminPanel;
