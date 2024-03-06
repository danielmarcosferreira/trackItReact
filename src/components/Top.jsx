import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Top({ image }) {
    return (
        <TopContainer>
            <StyledLink to={"/"}>
                <h1>TrackIt</h1>
            </StyledLink>
            <img src={image} alt="trackIt image" />
        </TopContainer>
    )
}

const TopContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0px 4px 4px 0px #00000026;
    h1 {
        font-family: "Playball", cursive;
        font-size: 40px;
        color: white;
        text-decoration: none;
    }
    img {
            height: 60px;
            width: 70px;
            border-radius: 25px;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
`