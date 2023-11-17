import styled from "styled-components"
import { darkColor, lightColor, white } from "../../UI/variables"
import { useState } from "react"

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  color: ${white};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background-color: ${darkColor};
  font-size: 24px;
  cursor: pointer;
  &:disabled{
    background-color: #9ea59f;
  }
`

const StyledQtd = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${lightColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`


const InputAmount = () => {
  const [qtd, setQtd] = useState(1);

  return(
    <StyledDiv>
      <StyledButton onClick={() => setQtd(qtd - 1)} disabled={qtd <= 1}> - </StyledButton>
      <StyledQtd> {qtd} </StyledQtd>
      <StyledButton onClick={() => setQtd(qtd + 1)}> + </StyledButton>
    </StyledDiv>
  )
}

export default InputAmount;