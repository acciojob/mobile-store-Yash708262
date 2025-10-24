import React from "react";
import { useParams, useHistory } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const history = useHistory();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="btn" onClick={() => history.push("/")}>Back</button>
    </div>
  );
};

export default ProductDetails;
