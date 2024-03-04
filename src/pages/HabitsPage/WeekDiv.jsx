import styled from "styled-components"

export default function WeekDiv() {
    return (
        <WeekDivContainer>
            <button type="button">D</button>
            <button type="button">S</button>
            <button type="button">T</button>
            <button type="button">Q</button>
            <button type="button">Q</button>
            <button type="button">S</button>
            <button type="button">S</button>
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