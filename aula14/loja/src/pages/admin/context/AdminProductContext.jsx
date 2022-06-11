import React, { useState } from "react";

export const Context = React.createContext();

export default function AdminProductContext({ children }) {
  const [products, setProducts] = useState([]);

  const list = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  const get = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json();
  }

  return <Context.Provider value={{ products, list, get }}>{children}</Context.Provider>;
}
