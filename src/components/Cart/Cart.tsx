import styled from "styled-components";
import CartItem from "./CartItem/CartItem";
import { IProduct } from "../../interfaces/IProduct";
import { darkColor, lightColor } from "../../UI/variables";
import { useSetCart } from "../../hooks/useSetCart";

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
  const setItemCart = useSetCart();

  const deleteItem = (id: number) => {
    const filter = items.filter((item) => item.id !== id);
  };

  return (
    <StyledCart open={open}>
      {items.length === 0
        ? "Your Cart is empty"
        : items.map((compra) => (
            <CartItem
              key={compra.id}
              id={compra.id!}
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
