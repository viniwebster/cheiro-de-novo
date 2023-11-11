import { useParams } from "react-router-dom";
import { Container, StyledContainer } from "../../UI/utils/container";
import { getProduct } from "../../http/http";
import { useQuery } from "react-query";
import { IProduct } from "../../interfaces/IProduct";
import styled from "styled-components";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import { veryDarkColor } from "../../UI/variables";
import SelectSize from "../../components/SelectSize/SelectSize";
import InputAmount from "../../components/InputAmount/InputAmount";
import LoaderContainer from "../../components/LoaderContainer/LoaderContainer";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  box-sizing: border-box;
  flex-wrap: wrap;
  /* gap: 64px; */

  @media screen and (max-width: 890px) {
    grid-template-columns: 100%;
    gap: 64px;
  }

  @media screen and (max-width: 500px) {
    padding: 0;
  }

  section {
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

      @media screen and (max-width: 1300px) {
        width: 80%;
      }
      
      img {
        width: 350px;
        object-fit: contain;
      }
  }
`;

const StyledProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  gap: 32px;

  h1 {
    font-size: 24px;
    margin-bottom: 24px;
    font-weight: 600;
    color: ${veryDarkColor};
  }

  p {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 24px;
    color: ${veryDarkColor};
  }

  span {
    font-size: 32px;
    font-weight: 600;
    color: ${veryDarkColor};
  }
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`;

const sizeOption = [
  {
    id: 1,
    size: "P",
  },
  {
    id: 2,
    size: "M",
  },
  {
    id: 3,
    size: "G",
  },
];

const Product = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery<IProduct>(["product", id], () =>
    getProduct(id ?? "")
  );

  if (isLoading) {
    return <LoaderContainer />;
  }

  return (
    <StyledContainer>
      <Container>
        <StyledSection>
          <section>
            <figure>
              <img src={product?.image} alt="" />
            </figure>
          </section>
          <Box>
            <StyledProductDescription>
              <div>
                <h1>{product?.title}</h1>
                <p>{product?.description}</p>
                <span>R$ {product?.price}</span>
              </div>
              <SelectSize sizeOptions={sizeOption} />
              <StyledButtonsContainer>
                <InputAmount />
                <Button text="Comprar" />
              </StyledButtonsContainer>
            </StyledProductDescription>
          </Box>
        </StyledSection>
      </Container>
    </StyledContainer>
  );
};

export default Product;
