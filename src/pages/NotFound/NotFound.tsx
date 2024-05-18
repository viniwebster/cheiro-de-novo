import styled from "styled-components"
import { darkColor, lightColor, veryDarkColor } from "../../UI/variables"
import { Link } from "react-router-dom"


const StyledContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    height: 100vh;
    p {
        color: ${darkColor};
        text-align: center;
    }

    a {
        text-align: center;
        color: ${lightColor};
        text-decoration: none;
        background-color: ${veryDarkColor};
        border-radius: 20px;
        padding: 12px 16px;
        margin-top: 12px;
        &:hover{
            background-color: ${darkColor};
            color: ${lightColor};
            transition: .2s;
        }
    }
`

const StyledH1 = styled.h1`
    font-size: 16rem;
    color: ${veryDarkColor};
    @media screen and (max-width: 600px){
        font-size: 10rem;
    }
`

const NotFound = () => {
    return(
        <StyledContainer>
            <StyledH1>404</StyledH1>
            <p>Parece que voce foi longe demais</p>
            <Link to={"/"}>Volte ao inicio</Link>
        </StyledContainer>
    )
}

export default NotFound