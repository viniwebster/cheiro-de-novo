import styled from "styled-components";
import { StyledContainer } from "../../UI/utils/container";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { darkColor, veryDarkColor } from "../../UI/variables";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import http from "../../http/http";
import { useSetUserState } from "../../hooks/useSetUserState";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;

  p {
    color: #d98f8f;
    font-size: 18px;
    font-weight: 600;
    position: absolute;
    top: 245px;
  }
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
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)
  const setLogin = useSetUserState();
  const navigate = useNavigate();

  const userLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    http.post('/auth/login', {
      username: user,
      password: password
    })
      .then(() => {
        setUser("");
        setPassword("");
        setLogin(true);  
        navigate("/");
      })
        .catch(() => {
          setError(true)
          setTimeout(() => {
            setError(false)
          }, 5000)
        })
  }

  return (
    <StyledContainer>
      <Container>
        <Box>
          <StyledForm onSubmit={userLogin}>
            <StyledTitleLogin>Login</StyledTitleLogin>
            <Input
              placeholder="Insira seu nome de usuário"
              label="Usuário"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <Input
              placeholder="Insira sua senha"
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p role="alert">Usuário ou senha incorretos</p>}
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
