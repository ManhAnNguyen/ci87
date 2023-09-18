import React from "react";
import products from "../../data.json";

import "./styles.css";
import Product from "../../components/Product";

const Products = () => {
  return (
    <div className="product-list">
      {products.map((item, index) => {
        return <Product key={index} item={item} />;
      })}
    </div>
  );
};

export default Products;
