import React, { useState } from "react";

export const Context = React.createContext();

export default function AdminProductContext({ children }) {
  const [products, setProducts] = useState([]);

  const list = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  return <Context.Provider value={{ products, list }}>{children}</Context.Provider>;
}
