import styled from "styled-components"
import { veryDarkColor, white } from "../../UI/variables"

const StyledButton = styled.button`
  border-radius: 20px;
  background-color: ${veryDarkColor};
  color: ${white};
  font-weight: 800;
  border: none;
  padding: 10px 16px;
  min-width: 100px;

  &:hover{
    background-color: #4b8974;
  }
`

interface Props{
  text: string
}

const Button = ({ text } : Props) => {
  return(
    <StyledButton>
      {text}
    </StyledButton>
  )
}

export default Button