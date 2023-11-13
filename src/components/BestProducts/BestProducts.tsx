import styled from "styled-components";
import { getAllProducts } from "../../http/http";
import { IProduct } from "../../interfaces/IProduct";
import Card from "../Card/Card";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { Container } from "../../UI/utils/container";
import { veryDarkColor, white } from "../../UI/variables";

export const StyledContainerProducts = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
  padding-bottom: 64px;
  box-sizing: border-box;

  @media screen and (max-width: 890px) {
    justify-content: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 16px 0;
  background-color: ${veryDarkColor};
  color: ${white};
  font-weight: 600;
  font-size: 24px;
  outline: none;
  border: none;
  margin-bottom: 64px;
  
  &:hover{
    cursor: pointer;
    transition: .3s;
    background-color: #398169;
  }
`;

const BestProducts = () => {
  const { data } = useQuery<IProduct[]>(["products"], () => getAllProducts());
  const products = data?.slice(0, data.length / 3);
  const navigate = useNavigate();

  return (
    <Container>
      <StyledContainerProducts>
        {products?.map((product) => (
          <StyledLink to={`/product/${product.id}`} key={product.id}>
            <Card
              price={product.price}
              title={product.title}
              image={product.image}
            />
          </StyledLink>
        ))}
      </StyledContainerProducts>
      <StyledButton onClick={() => navigate('/products')}>Ver todos</StyledButton>
    </Container>
  );
};

export default BestProducts;
