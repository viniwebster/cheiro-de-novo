import styled from "styled-components"
import { veryDarkColor, white } from "../../UI/variables"

const StyledButton = styled.button`
  border-radius: 30px;
  background-color: ${veryDarkColor};
  color: ${white};
  font-weight: 800;
  border: none;
  padding: 10px 16px;
  min-width: 150px;
  height: 50px;

  &:hover{
    background-color: #4b8974;
    transition: .3s;
    cursor: pointer;
  }
`

interface Props{
  text: string
  onClick?: () => void
}

const Button = ({ text, onClick } : Props) => {
  return(
    <StyledButton onClick={onClick}>
      {text}
    </StyledButton>
  )
}

export default Button