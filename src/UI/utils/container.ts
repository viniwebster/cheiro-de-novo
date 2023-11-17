import styled from "styled-components";
import ramo from "../../assets/background/ramo.png";
import ramo2 from "../../assets/background/ramo2.png";

export const StyledContainer = styled.section`
  padding: 62px 0;
  margin: auto;
  display: flex;
  min-height: calc(100vh - 90px);

  background: no-repeat right bottom/7% url(${ramo}),
    no-repeat left bottom/5% url(${ramo2});

  @media screen and (max-width: 500px) {
    background: no-repeat right bottom/20% url(${ramo}),
      no-repeat left bottom/20% url(${ramo2});
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  /* padding: 0 32px; */
  box-sizing: border-box;
`;
