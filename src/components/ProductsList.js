import React, { useState, useEffect } from "react";
function ProductsList() {
  const [products, setProduct] = useState([]);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  useEffect(() => {
    const cachedProducts = localStorage.getItem('cachedProducts');
    if (cachedProducts) {
      setProduct(JSON.parse(cachedProducts));
      setLoadingMessage("Loaded from localStorage");
    } else {
      setLoadingMessage("Fetching from API...");
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
          setProduct(data.products);
          localStorage.setItem('cachedProducts', JSON.stringify(data.products));
          setLoadingMessage("Fetched from API and cached");
        })
        .catch(err => {
          console.error('Error', err);
          setLoadingMessage("Error fetching data");
        });
    }
  }, []);
  return (
    <div>
      <h2>ProductsList :</h2>
      <p>{loadingMessage}</p> 
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.id}. {product.title} -- Description: {product.description} Category: {product.category}
           
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductsList;
