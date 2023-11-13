import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";

const StyledList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  margin-bottom: 10px;

  padding: 1rem 0.5rem;
  box-sizing: border-box;

  border-radius: 7px;
  background-color: #fff;
`;

const StyledName = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  img {
    margin-right: 10px;
    width: 50px;
  }
`;

const StyledPrice = styled.div`
  display: flex;
    align-items: center;
    gap: 5px;
`

interface Props {
  img: string;
  name: string;
  price: number;
  deleteItem: (id: number) => void;
  id: number;
}

const CartItem = ({ img, name, price, deleteItem, id }: Props) => {
  return (
    <StyledList>
      <StyledName>
        <img src={img} alt="foto do produto" />
        <span> {name} </span>
      </StyledName>

      <StyledPrice>
        <span> R$ {price} </span>
        <AiFillDelete onClick={() => deleteItem(id)} />
      </StyledPrice>
    </StyledList>
  );
};

export default CartItem;
