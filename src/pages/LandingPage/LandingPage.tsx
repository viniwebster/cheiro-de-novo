import styled from "styled-components";
import logo from "../../assets/landing-name.png";
import landingImg from "../../assets/landing-img.png";
import { StyledContainer } from "../../UI/utils/container";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
  padding: 0 32px;
  justify-content: space-around;
  width: 100%;

  @media screen and (max-width: 1300px) {
    figure {
      width: 40%;
      img {
        width: 100%;
      }
    }
    gap: 64px;
    justify-content: space-around;
  }
  @media screen and (max-width: 890px) {
    figure {
      width: 100%;
      img {
        width: 100%;
      }
    }
    gap: 64px;
    flex-direction: column;
  }
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
