import styled from "styled-components"

export default function WeekDiv({ setDays, days }) {
    const daysList = ["D", "S", "T", "Q", "Q", "S", "S"];

    function addDay(day) {
        if (!days.includes(day)) {
            setDays([...days, day])
        } else {
            const newDay = days.filter((i) => i !== day)
            setDays(newDay)
        }
    }

    return (
        <WeekDivContainer>
            {daysList.map((day, i) => <DaysButton
                key={i}
                include={days.includes(i) ? true : false}
                type="button"
                onClick={() => addDay(i)}>{day}</DaysButton>)}
        </WeekDivContainer>
    )
}

const WeekDivContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`

const DaysButton = styled.button`
    background-color: ${props => props.include ? "#CFCFCF" : "#FFFFFF"};
    color: ${props => props.include ? "#FFFFFF" : "#DBDBDB"};
    border: 1px solid ${props => props.include ? "#CFCFCF" : "#D4D4D4"};
    width: 30px;
    height: 30px;
    margin: 5px 5px 5px 0;
    border-radius: 5px;
    cursor: pointer;
`