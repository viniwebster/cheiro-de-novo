import styled from "styled-components";
import logo from "../../assets/landing-name.png";
import landingImg from "../../assets/landing-img.png";
import { StyledContainer } from "../../UI/utils/container";

const StyledDiv = styled.div`
  flex:1;
  display: flex;
  gap: 32px;
  min-height: 100%;
  justify-content: space-between;
  max-width: 1500px;
  margin: auto;
`;

const LandingPage = () => {
  return (
    <StyledContainer>
      <StyledDiv>
        <figure>
          <img src={logo} alt="cheiro de novo" />
        </figure>
        <figure>
          <img src={landingImg} alt="Moça sentada olhando para o lado" />
        </figure>
      </StyledDiv>
    </StyledContainer>
  );
};

export default LandingPage;
