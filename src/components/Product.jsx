import React from "react";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  const { id, image, title, price } = item;
  return (
    <Link to={`/products/${title}`} className="product-item">
      <img src={image} />
      <h3 className="name">{title}</h3>
      <strong className="price">{price}</strong>
    </Link>
  );
};

export default Product;
