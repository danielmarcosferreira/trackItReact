import styled from "styled-components"
import user from "../assets/images/user.png"
import { Link } from "react-router-dom"

export default function Top() {
    return (
        <TopContainer>
            <Link to={"/"}>
                <h1>TrackIt</h1>
            </Link>
            <img src={user} alt="trackIt image" />
        </TopContainer>
    )
}

const TopContainer = styled.div`
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
    }
    img {
            height: 50px;
            cursor: pointer;
        }
`