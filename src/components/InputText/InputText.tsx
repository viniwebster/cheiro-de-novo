import styled from "styled-components";
import { white } from "../../UI/variables";

const StyledInput = styled.input`
  outline: none;
  background-color: transparent;
  border: 1px solid ${white};
  border-radius: 30px;
  padding: 10px 16px;
  width: 350px;
  box-sizing: border-box;
  color: ${white};

  &::placeholder {
    color: ${white};
  }
`

interface Props {
  placeholder: string
}

const InputText = ({ placeholder }: Props) => {
  return(
    <StyledInput placeholder={placeholder}/>
  )
}

export default InputText