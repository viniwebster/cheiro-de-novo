import { darkColor, white } from "../../UI/variables";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiShoppingBag } from "react-icons/bi";
import { FaUserCircle  } from "react-icons/fa";
import { TfiCrown } from "react-icons/tfi";
import InputText from "../InputSearch/InputSearch";
import { useState } from "react";
import { useUserState } from "../../hooks/useUserState";
import Cart from "../Cart/Cart";
import { useCartState } from "../../hooks/useCartState";

const StyledHeader = styled.header`
  width: 100%;
  background-color: ${darkColor};
  padding: 24px 32px;

  nav {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 500px) {
      display: grid;
      gap: 16px;
      align-items: initial;
      justify-content: inherit;
    }
  }
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: 500px) {
    justify-content: space-between;
  }
`;

const StyledLink = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: ${white};
`;

const StyledContainerInput = styled.div`
  width: 50%;

  @media screen and (max-width: 500px){
    width: 100%;
    grid-area: 2/1;
    grid-column-end: 4;
  }
`

const StyledMenuUser = styled.div<{ $open: boolean }>`
    display: flex;
    align-items: center;
    position: relative;
    grid-area: 1/3;
    gap: 24px;
`

const Header = () => {
  const [login] = useUserState();

  const cart = useCartState();
  const [openCart, setOpenCart] = useState(false);

  return (
    <StyledHeader>
      <nav>
        <StyledUl>
          <li>
            <StyledLink to={"/"}>
              <TfiCrown size={30} />
            </StyledLink>
          </li>
          <li>
            <StyledLink to={"/"}>Home</StyledLink>
          </li>
          <li>
            <StyledLink to={"/products"}>Produtos</StyledLink>
          </li>
        </StyledUl>
        <StyledContainerInput>
        <InputText placeholder="Busque aqui..." />
        </StyledContainerInput>
        <StyledMenuUser $open={true}>
          {!login ? <StyledLink to={"/login"}><FaUserCircle  size={30}/></StyledLink> : (<StyledLink to={"/account"}>Minha Conta</StyledLink>)}
          <BiShoppingBag color="white" size={30} onClick={() => setOpenCart(!openCart)} />
          <Cart items={cart} open={openCart}/>
        </StyledMenuUser>
      </nav>
    </StyledHeader>
  );
};

export default Header;
