import styled from "styled-components";
import ramo from "../../assets/background/ramo.png"
import ramo2 from "../../assets/background/ramo2.png"

export const StyledContainer = styled.section`
  padding: 62px 0;
  margin: auto;
  display: flex;
  align-items: center;
  min-height: calc(100vh - 90px);

  background: no-repeat right bottom/10% url(${ramo}),
  no-repeat left bottom/10% url(${ramo2})
  ;
`