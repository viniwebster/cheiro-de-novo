import styled from "styled-components";
import { IProduct } from "../../interfaces/IProduct";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 10px;
  width: 350px;
  height: 500px;
  border: 1px dashed black;
  text-align: center;
  background-color: white;

  figure {
    height: 300px;
    background-color: white;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      color: #27374d;
      font-size: 24px;
      font-weight: 600;
    }
  }
`;

const StyledProductTitle = styled.h3`
  color: #27374d;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

const Card = ({ image, title, price }: IProduct) => {
  return (
    <StyledDiv>
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div>
        <StyledProductTitle>{title}</StyledProductTitle>
        <span>R$ {price}</span>
      </div>
    </StyledDiv>
  );
};

export default Card;
