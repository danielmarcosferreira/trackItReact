import styled from "styled-components"
import trackItImage from "../assets/images/TrackIt.png"
import user from "../assets/images/user.png"

export default function Top() {
    return (
        <TopContainer>
            <img src={trackItImage} alt="trackIt image"/>
            <img src={user} alt="trackIt image"/>
        </TopContainer>
    )
}

const TopContainer = styled.div`
    height: 70px;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;

    img {
        &:nth-child(1) {
            height: 30px;
        }
        
    }
`