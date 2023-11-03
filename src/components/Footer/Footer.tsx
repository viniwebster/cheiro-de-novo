import { darkColor, white } from "../../UI/variables";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  background-color: ${darkColor};
  padding: 32px 0;
  font-size: 22px;
  font-weight: 600;
  color: ${white};
`;

const Footer = () => {
  return (
    <StyledFooter>
      Desenvolvido por Vinicius
    </StyledFooter>
  );
};

export default Footer
