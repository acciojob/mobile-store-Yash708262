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
        { id: 1, name: "iPhone 14", price: 999, description: "Apple smartphone", image: "https://picsum.photos/id/1011/150" },
        { id: 2, name: "Samsung Galaxy S23", price: 899, description: "Samsung smartphone", image: "https://picsum.photos/id/1012/150" },
        { id: 3, name: "Pixel 7", price: 799, description: "Google smartphone", image: "https://picsum.photos/id/1013/150" },
        { id: 4, name: "OnePlus 11", price: 699, description: "OnePlus smartphone", image: "https://picsum.photos/id/1014/150" },
        { id: 5, name: "Xiaomi 13", price: 599, description: "Xiaomi smartphone", image: "https://picsum.photos/id/1015/150" },
        { id: 6, name: "Oppo Find X6", price: 649, description: "Oppo smartphone", image: "https://picsum.photos/id/1016/150" },
        { id: 7, name: "Vivo X90", price: 579, description: "Vivo smartphone", image: "https://picsum.photos/id/1017/150" },
        { id: 8, name: "Motorola Edge", price: 499, description: "Motorola smartphone", image: "https://picsum.photos/id/1018/150" },
        { id: 9, name: "Nokia XR20", price: 459, description: "Nokia smartphone", image: "https://picsum.photos/id/1019/150" },
        { id: 10, name: "Sony Xperia 1", price: 699, description: "Sony smartphone", image: "https://picsum.photos/id/1020/150" },
        { id: 11, name: "LG Wing", price: 649, description: "LG smartphone", image: "https://picsum.photos/id/1021/150" },
        { id: 12, name: "Asus ROG Phone", price: 899, description: "Asus smartphone", image: "https://picsum.photos/id/1022/150" }
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
