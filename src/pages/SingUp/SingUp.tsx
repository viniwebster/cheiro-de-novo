import styled from "styled-components";
import { StyledContainer } from "../../UI/utils/container";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { darkColor, veryDarkColor } from "../../UI/variables";
import { Link } from "react-router-dom";
import { useState } from "react";
import { singUp } from "../../auth/singup";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
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
`;

const StyledAlert = styled.p`
  position: absolute;
  text-align: center;
  font-weight: 600;
  top: 91.5%;
  color: ${darkColor};
`

const SingUp = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [cep, setCEP] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("")

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = {
      name,
      surname,
      email,
      password,
      user,
      cep,
      street,
      number,
      city,
      phone
    }
    singUp(newUser)
    setMessage("Usuário cadastrado com sucesso")
    setName("")
    setCEP("")
    setCity("")
    setEmail("")
    setSurname("")
    setPassword("")
    setUser("")
    setStreet("")
    setNumber("")
    setPhone("")
    setTimeout(() => {
      setMessage("")
    }, 3000)
  }

  return (
    <StyledContainer>
      <Container>
        <Box>
          <StyledForm onSubmit={onSubmit}>
            <StyledTitleLogin>Cadastro</StyledTitleLogin>
            <Input
              placeholder="Insira seu nome"
              label="Nome"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Insira seu sobrenome"
              label="Sobrenome"
              value={surname}
              type="text"
              onChange={(e) => setSurname(e.target.value)}
            />
            <Input
              placeholder="Insira seu e-mail"
              label="E-mail"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Insira seu usuario"
              label="Usuário"
              type="text"
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
            <Input
              placeholder="Insira seu CEP"
              label="CEP"
              type="number"
              value={cep}
              onChange={(e) => setCEP(e.target.value)}
            />
            <Input
              placeholder="Insira sua rua"
              label="Rua"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <Input
              placeholder="Insira o número"
              label="Número"
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <Input
              placeholder="Insira sua cidade"
              label="Cidade"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              placeholder="Insira seu telefone"
              label="Telefone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <StyledAlert role="alert">{message}</StyledAlert>
            <StyledContainerButton>
              <Button text="Cadastrar" />
              <br />
              <em>ou</em> <Link to={"/login"}>Faça seu login</Link>
            </StyledContainerButton>
          </StyledForm>
        </Box>
      </Container>
    </StyledContainer>
  );
};

export default SingUp;
