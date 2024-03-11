import styled from "styled-components"
import trashCan from "../../assets/images/trashCan.png"

export default function HabitsList({ task, deleteTask }) {
    const daysList = ["D", "S", "T", "Q", "Q", "S", "S"];
    return (
        <HabitsListContainer>
            {task.name}
            <WeekDivContainer>
                {daysList.map((day, i) =>
                    <WeekButton
                        key={i}
                        type="button"
                        include={task.days.includes(i) ? true : false}>{day}</WeekButton>)}
            </WeekDivContainer>
            <img onClick={deleteTask} src={trashCan} />
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
`

const WeekButton = styled.button`
    background-color: ${props => props.include ? "#CFCFCF" : "#FFFFFF"};
    color: ${props => props.include ? "#FFFFFF" : "#DBDBDB"};
    border: 1px solid ${props => props.include ? "#CFCFCF" : "#D4D4D4"};
    width: 30px;
    height: 30px;
    margin: 5px 5px 5px 0;
    border-radius: 5px;
    cursor: pointer;
`