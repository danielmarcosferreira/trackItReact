import styled from "styled-components"
import ellipse from "../assets/images/ellipse.png"

export default function Footer() {
    return (
        <FooterContainer>
            <h2>Hábitos</h2>
            <img src={ellipse} alt="Controle do Hábito Hoje" />
            <h2>Histórico</h2>
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

    img {
        position: fixed;
        bottom: 0;
        left: 40%;
        margin-bottom: 10px;
        cursor: pointer;
    }
`