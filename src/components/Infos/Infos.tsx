import styled from "styled-components";
import { darkColor, veryDarkColor, white } from "../../UI/variables";
import Title from "../Title/Title";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Container } from "../../UI/utils/container";

const StyledContainerInfos = styled.section`
  width: 100%;
  border-top: 1px solid black;
  padding-bottom: 64px;

  @media screen and (max-width: 500px){
    padding: 0 32px 64px 32px;
  }
`;

const StyledInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 32px;
`;

const StyledInputEmail = styled.div`
  display: flex;

  input {
    outline: none;
    border: 1px solid black;
    padding: 10px 16px;
    width: 100%;

    &::placeholder {
      font-size: 16px;
    }
  }

  button {
    width: 150px;
    min-height: 100%;
    background-color: black;
    color: ${white};
    outline: none;
    border: none;
  }
`;

const StyledSubtitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${veryDarkColor};
  margin-bottom: 16px;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: ${darkColor};
`;

const StyledSocials = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Infos = () => {
  return (
    <StyledContainerInfos>
      <Container>
        <Title text="Informações" />
        <StyledInfos>
          <div>
            <StyledSubtitle>Siga nas redes sociais</StyledSubtitle>
            <StyledSocials>
              <li>
                <a href="#">
                  <BsInstagram size={30} color={darkColor} />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsFacebook size={30} color={darkColor} />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsWhatsapp size={30} color={darkColor} />
                </a>
              </li>
            </StyledSocials>
          </div>
          <div>
            <StyledSubtitle>Informações</StyledSubtitle>
            <ul>
              <li>
                <StyledA href="#">Nossas lojas</StyledA>
              </li>
              <li>
                <StyledA href="#">Política de trocas e devoluções</StyledA>
              </li>
              <li>
                <StyledA href="#">Formas de pagamento</StyledA>
              </li>
            </ul>
          </div>
          <form>
            <StyledSubtitle>Cadastre-se para receber novidades</StyledSubtitle>
            <StyledInputEmail>
              <input placeholder="Insira seu email" type="email"/>
              <button>Cadastrar</button>
            </StyledInputEmail>
          </form>
        </StyledInfos>
      </Container>
    </StyledContainerInfos>
  );
};

export default Infos;
