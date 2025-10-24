import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import "regenerator-runtime/runtime";


const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = [
        { id: 1, name: "iPhone 14", price: 999, description: "Apple smartphone", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Samsung Galaxy S23", price: 899, description: "Samsung smartphone", image: "https://via.placeholder.com/150" },
        
      ];
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/admin">Admin Panel</Link>
      </nav>
      <Switch>
        <Route exact path="/" render={() => <ProductList products={products} />} />
        <Route path="/products/:id" render={() => <ProductDetails products={products} />} />
        <Route path="/admin" render={() => <AdminPanel products={products} setProducts={setProducts} />} />
      </Switch>
    </Router>
  );
};

export default App;
