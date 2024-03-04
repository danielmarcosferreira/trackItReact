import styled from "styled-components"
import WeekDiv from "./WeekDiv"
import trashCan from "../../assets/images/trashCan.png"

export default function HabitsList() {
    return (
        <HabitsListContainer>
            Ler 1 capítulo de livro
            <WeekDiv />
            <img src={trashCan}/>
        </HabitsListContainer>
    )
}

const HabitsListContainer = styled.div`
    background-color: #FFFFFF;
    color: #666666;
    font-family: Lexend Deca;
    font-size: 20px;
    width: 100%;
    height: 90px;
    border-radius: 10px;
    padding-left: 20px;  
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;  
    position: relative;

    img {
        width: 13px;
        height: 15px;
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
    }
`