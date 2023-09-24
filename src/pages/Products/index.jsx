import React, { useEffect, useState } from "react";
// import products from "../../data.json";

import "./styles.css";
import Product from "../../components/Product";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const Products = () => {
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsloading] = useState(false);
  // const [error, setError] = useState("");

  const [product, setProducts] = useState({
    data: [],
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    (async () => {
      try {
        setProducts((prev) => ({ ...prev, isLoading: true }));
        const response = await axios.get("https://fakestoreapi.com/products");

        setProducts((prev) => ({ ...prev, data: response.data }));
      } catch (err) {
        setProducts((prev) => ({ ...prev, error: err.message }));
      }

      setProducts((prev) => ({ ...prev, isLoading: false }));
    })();

    // getData();
  }, []);

  const { isLoading, error, data: products } = product;
  return (
    <>
      {isLoading && (
        <div className="isLoading">
          {" "}
          <BeatLoader />
        </div>
      )}

      {error && (
        <div className="isLoading">
          {" "}
          <h1 style={{ color: "red" }}>{error}</h1>
        </div>
      )}
      <div className="product-list">
        {products.map((item, index) => {
          return <Product key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default Products;
