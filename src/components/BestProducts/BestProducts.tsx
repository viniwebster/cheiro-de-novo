import styled from "styled-components";
import { useEffect, useState } from "react";
import http, { getProducts } from "../../http/http";
import { IProduct } from "../../interfaces/IProduct";
import Card from "../Card/Card";

const StyledContainerProducts = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
  max-width: 1600px;
  margin: auto;
  padding: 64px 0;
`;

const BestProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    http.get("products").then((response) => setProducts(response.data));
  }, []);

  return (
    <StyledContainerProducts>
      {products.map((product) => (
        <Card
          key={product.id}
          price={product.price}
          title={product.title}
          image={product.image}
        />
      ))}
    </StyledContainerProducts>
  );
};

export default BestProducts;
