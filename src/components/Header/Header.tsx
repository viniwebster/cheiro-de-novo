import { darkColor, white } from "../../UI/variables";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiShoppingBag } from "react-icons/bi";
import { TfiCrown } from "react-icons/tfi"
import InputText from "../InputText/InputText";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${darkColor};
  padding: 24px 32px;

  div {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const StyledLink = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: ${white};
`;

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <StyledUl>
          <li>
            <StyledLink to={"/"}><TfiCrown size={30}/></StyledLink>
          </li>
          <li>
            <StyledLink to={"/"}>Home</StyledLink>
          </li>
          <li>
            <StyledLink to={"/products"}>Produtos</StyledLink>
          </li>
        </StyledUl>
      </nav>
      <InputText placeholder="Busque aqui..."/>
      <div>
        <StyledLink to={"/login"}>Entre ou Cadastre-se</StyledLink>
        <BiShoppingBag color="white" size={30} />
      </div>
    </StyledHeader>
  );
};

export default Header;
