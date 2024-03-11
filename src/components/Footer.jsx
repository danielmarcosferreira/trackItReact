import styled from "styled-components"
import { Link } from "react-router-dom"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import 'react-circular-progressbar/dist/styles.css';


export default function Footer() {
    const {percentage} = useContext(AuthContext)
    return (
        <FooterContainer>
            <StyledLink to={"/habits"}>
                <h2>Hábitos</h2>
            </StyledLink>
            <StyledLink to={"/today"}>
                <div>
                    <CircularProgressbar
                        value={percentage}
                        label={"Background"}
                        backgroundPadding={6}
                        text="Hoje"
                        styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })} />
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
        margin-bottom: 10px;
        border-radius: 50%;
        width: 90px;
        padding: 4px;
        position: fixed;
        bottom: 0;
        left: 37%;
        cursor: pointer;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
`
