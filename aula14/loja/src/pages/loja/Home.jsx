import { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import ProductCategoryList from "./components/ProductCategoryList";
import { Context } from "./context/ProductContext";

export default function Home() {
  const { listCategories, categories } = useContext(Context);

  useEffect(() => {
    listCategories();
  }, []);

  return (
    <Container>
      <h2>Home</h2>
      {categories.map((category) => (
        <ProductCategoryList category={category} />
      ))}
    </Container>
  );
}
