import styled from "styled-components"
import { Link } from "react-router-dom"
import 'react-circular-progressbar/dist/styles.css';


export default function FooterTodayPage({percentage}) {
    return (
        <FooterContainer>
            <StyledLink to={"/habits"}>
                <h2>Hábitos</h2>
            </StyledLink>
            <StyledLink to={"/today"}>
                <div>
                    <p>Hoje</p>                 
                </div>
            </StyledLink>
            <StyledLink to={"/historic"}>
                <h2>Histórico</h2>
            </StyledLink>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    background-color: #FFFFFF;
    height: 70px;
    width: 100%;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;

    h2 {
        color: #52B6FF;
        font-family: "Lexend Deca", sans-serif;
        font-size: 18px;
        cursor: pointer;
    }

    div {
        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 18px;
        margin-bottom: 10px;
        border-radius: 50%;
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 0;
        left: 37%;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
`
