import React, { useState } from "react";

export const Context = React.createContext();

export default function AdminProductContext({ children }) {
  const [products, setProducts] = useState([]);

  const list = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  const listFake = () => {
    setProducts([
      {
        id: 1,
        category: "Categoria",
        description: "Descrição",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 9.99,
        title: "Título do produto",
      },
      {
        id: 2,
        category: "Categoria",
        description: "Descrição",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 9.99,
        title: "Título do produto 2",
      },
    ]);
  }

  const get = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json();
  };

  const create = async (product) => {
    const response = await fetch(`https://fakestoreapi.com/products`, {
      method: "POST",
      body: JSON.stringify(product),
    });
    return response.json();
  }

  return <Context.Provider value={{ products, list, get, create }}>{children}</Context.Provider>;
}
