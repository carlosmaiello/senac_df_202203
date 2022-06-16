import React, { useEffect, useState } from "react";

export const Context = React.createContext();

export default function ProductContext({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

  const list = () => {
    if (category)
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((json) => setProducts(json));
    else
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json));
  };
  const listCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  };

    const get = async (id) => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      return response.json();
    };


    const getProductsByCategory = async (category, limit=3) => {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}?limit=${limit}`);
      return response.json();
    };



  useEffect(() => {
    list();
  }, [category]);

  return <Context.Provider value={{ products, categories, list, listCategories, setCategory, get, getProductsByCategory }}>{children}</Context.Provider>;
}
