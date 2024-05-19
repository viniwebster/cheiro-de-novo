import styled from "styled-components";
import CartItem from "./CartItem/CartItem";
import { IProduct } from "../../interfaces/IProduct";
import { darkColor, lightColor } from "../../UI/variables";
import { useRemoveItemCart } from "../../hooks/useRemoveItemCart";
import { v4 as uuidv4 } from "uuid";

const StyledCart = styled.ul<{ open: boolean }>`
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  top: 150%;

  width: 350px;
  min-height: 200px;
  padding: 1rem;
  box-sizing: border-box;

  background-color: ${lightColor};
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.08);
  color: ${darkColor};
  border-radius: 7px;

  font-weight: bold;
  z-index: 111;

  position: absolute;
  right: 0;

  @media screen and (max-width: 500px) {
    width: 100vw;
    top: 114px;
    right: -33px;
  }
`;

interface Props {
  items: IProduct[];
  open: boolean;
}

const Cart = ({ items, open }: Props) => {
  const setRemoveItem = useRemoveItemCart();

  const deleteItem = (buyId: string) => {
    setRemoveItem(buyId)    
  };

  return (
    <StyledCart open={open}>
      {items.length === 0
        ? <p>Your Cart is empty</p>
        : items.map((compra) => (
            <CartItem
              key={uuidv4()}
              buyId={compra.buyId!}
              img={compra.image}
              name={compra.title}
              price={compra.price}
              deleteItem={deleteItem}
            />
          ))}
    </StyledCart>
  );
};

export default Cart;
