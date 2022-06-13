import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/AdminProductContext";


export default function ProdutoDetalhes() {
    const { id } = useParams();
    const { get } = useContext(Context);
    const [product, setProduct] = useState();

    useEffect(() => {
        get(id).then(json => setProduct(json));
    }, []);

    if (!product) return <p>Carregando ...</p>;

    return (
      <>
        <h1>
          #{product.id} - {product.title}
        </h1>
        <h2>{product.category}</h2>
        <p>Preço: {product.price}</p>
        <p>{product.description}</p>
        <img src={product.image} style={{maxWidth: "100%"}} alt="Foto do produto" />
      </>
    );
}