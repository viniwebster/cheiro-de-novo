import { darkColor, white } from "../../UI/variables";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiShoppingBag, BiMenu } from "react-icons/bi";
import { TfiCrown } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai"
import InputText from "../InputSearch/InputSearch";
import { useState } from "react";

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

  @media screen and (max-width: 500px) {
    input {
      grid-area: 3/1;
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
  }
`

const StyledMenuMobile = styled.div`
    display: none;
  @media screen and (max-width: 500px) {
      display: block;
  }
`;

const StyledMenuUser = styled.div<{ $open: boolean }>`
    display: flex;
    align-items: center;
    position: relative;
    gap: 24px;
    @media screen and (max-width: 500px) {
      display: ${props => props.$open ? "flex" : "none"};
      flex-direction: column;

      background-color: ${darkColor};
      padding: 16px;

      position: absolute;
      right: 0px;
      top: 160px;
    }
`

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

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
          <StyledMenuMobile onClick={() => setOpenMenu(!openMenu)}>
            { openMenu ? <AiOutlineClose color="white" size={40} /> : <BiMenu color="white" size={40} />}
          </StyledMenuMobile>
        </StyledUl>
        <StyledContainerInput>
        <InputText placeholder="Busque aqui..." />
        </StyledContainerInput>
        <StyledMenuUser $open={openMenu}>
          <StyledLink to={"/login"}>Entre ou Cadastre-se</StyledLink>
          <StyledLink to={"/bag"}><BiShoppingBag color="white" size={30} /></StyledLink>
        </StyledMenuUser>
      </nav>
    </StyledHeader>
  );
};

export default Header;
