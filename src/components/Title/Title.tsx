import styled from "styled-components";
import { darkColor } from "../../UI/variables";

const StyledTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  color: ${darkColor};
  margin: 32px 0;
`

interface Props {
  text: string
}

const Title = ({ text } : Props) => {
  return (
    <StyledTitle>
      {text}
    </StyledTitle>
  )
}

export default Title