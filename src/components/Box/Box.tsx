import { ReactElement } from "react"
import styled from "styled-components"

 
const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  box-shadow: 0px 0px 20px -10px black;
  padding: 64px;
  box-sizing: border-box;

  @media screen and (max-width: 890px){
    padding: 64px 32px;
  }
`

interface Props{
  children: ReactElement
}

const Box = ({ children } : Props) => {
  return(
    <StyledBox>
      {children}
    </StyledBox>
  )
}

export default Box