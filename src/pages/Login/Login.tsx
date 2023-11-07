import styled from "styled-components";
import { StyledContainer } from "../../UI/utils/container";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { darkColor, veryDarkColor } from "../../UI/variables";
import { Link } from "react-router-dom";
import { useState } from "react";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Container = styled.section`
  width: 40%;
  margin: auto;

  @media screen and (max-width: 890px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const StyledTitleLogin = styled.h2`
  color: ${veryDarkColor};
  font-weight: 800;
  font-size: 24px;
`;

const StyledContainerButton = styled.div`
  margin: auto;
  text-align: center;
  button {
    margin-bottom: 16px;
  }

  a {
    text-decoration: none;
    font-weight: 800;
    color: ${darkColor};
  }
`

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledContainer>
      <Container>
        <Box>
          <StyledForm>
            <StyledTitleLogin>Login</StyledTitleLogin>
            <Input
              placeholder="Insira seu e-mail"
              label="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Insira sua senha"
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <StyledContainerButton>
              <Button text="Entre" />
              <br />
              <em>ou</em> <Link to={"/singup"}>Cadastre-se</Link>
            </StyledContainerButton>
          </StyledForm>
        </Box>
      </Container>
    </StyledContainer>
  );
};

export default Login;
