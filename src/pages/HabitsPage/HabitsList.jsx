import styled from "styled-components"
import WeekDiv from "./WeekDiv"
import trashCan from "../../assets/images/trashCan.png"

export default function HabitsList({task, deleteTask}) {
    console.log(task.id);
    return (
        <HabitsListContainer>
            {task.name}
            <WeekDivContainer>
                <button type="button" onClick={() => addDay(0)}>D</button>
                <button type="button" onClick={() => addDay(1)}>S</button>
                <button type="button" onClick={() => addDay(2)}>T</button>
                <button type="button" onClick={() => addDay(3)}>Q</button>
                <button type="button" onClick={() => addDay(4)}>Q</button>
                <button type="button" onClick={() => addDay(5)}>S</button>
                <button type="button" onClick={() => addDay(6)}>S</button>
            </WeekDivContainer>
            <img onClick={deleteTask} src={trashCan}/>
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

const WeekDivContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    button {
        width: 30px;
        height: 30px;
        margin: 5px 5px 5px 0;
        border-radius: 5px;
        cursor: pointer;
        &:nth-child(odd) {
            background-color: #FFFFFF;
            color: #DBDBDB;
            border: 1px solid #D4D4D4;
        }
        &:nth-child(even) {
            background-color: #CFCFCF;
            color: #FFFFFF;
            border: 1px solid #CFCFCF;
        }
    }
`