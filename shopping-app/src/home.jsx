import React, { useState, useEffect } from "react";
import "./home.css";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch("https://fakestoreapi.com/products");
        const response = await result.json();
        setData(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Product Store</h1>
      <div className="product-list">
        {data.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} className="product-image" />
            <h2 className="product-title">{item.title}</h2>
            <p className="product-price">Price: ${item.price}</p>
            <p className="product-description">{item.description}</p>
            <button className="product-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
