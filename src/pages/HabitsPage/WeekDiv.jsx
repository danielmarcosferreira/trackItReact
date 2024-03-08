import { useState } from "react";
import styled from "styled-components"

export default function WeekDiv({ setDays, days }) {
    const daysList = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [arrayDaysSelected, setArrayDaysSelected] = useState([])

    function addDay(day) {
        if (!days.includes(day)) {
            setDays([...days, day])
            console.log("adicionou");
        } else {
            const newDay = days.filter((i) => i !== day)
            setDays(newDay)
            console.log("removeu");
        }
    }

    return (
        <WeekDivContainer>
            <button type="button" onClick={() => addDay(0)}>D</button>
            <button type="button" onClick={() => addDay(1)}>S</button>
            <button type="button" onClick={() => addDay(2)}>T</button>
            <button type="button" onClick={() => addDay(3)}>Q</button>
            <button type="button" onClick={() => addDay(4)}>Q</button>
            <button type="button" onClick={() => addDay(5)}>S</button>
            <button type="button" onClick={() => addDay(6)}>S</button>
        </WeekDivContainer>
    )
}

const WeekDivContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    button {
        width: 30px;
        height: 30px;
        margin: 5px 5px 5px 0;
        border-radius: 5px;
        background-color: #FFFFFF;
        color: #DBDBDB;
        border: 1px solid #D4D4D4;
        cursor: pointer;

        /* &:nth-child(even) {
            background-color: #CFCFCF;
            color: #FFFFFF;
            border: 1px solid #CFCFCF;
        } */
    }
`