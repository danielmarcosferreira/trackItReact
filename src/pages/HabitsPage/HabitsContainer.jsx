import styled from "styled-components"
import NewHabit from "./NewHabit"
import { useState } from "react"
import HabitsList from "./HabitsList"


export default function HabitsContainer() {
    const [toggleAdd, setToggleAdd] = useState(false)
    const [habitsList, setHabitsList] = useState([])

    return (
        <MenuContainer>
            <AddHabits>
                <h1>Meus hábitos</h1>
                <div onClick={() => setToggleAdd(!toggleAdd)}>+</div>
            </AddHabits>

            {toggleAdd === true ? <NewHabit habitsList={habitsList} setHabitsList={setHabitsList} /> : ""}

            <HabitsTrack>
                {habitsList.length === 0 ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : <HabitsList />}
            </HabitsTrack>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    margin: 30px 15px;
`

const AddHabits = styled.div`
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    h1 {
        color: #126BA5;
        font-family: "Lexend Deca", sans-serif;
        font-size: 23px;
    }
    div {
        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 30px;
        width: 40px;
        height: 35px;
        border-radius: 5px;
        text-align: center;
        cursor: pointer;
    }
`

const HabitsTrack = styled.div`
    p {
        color: #666666;
        font-family: "Lexend Deca", sans-serif;
        font-weight: 400;
        font-size: 18px;
        margin-top: 30px;
    }
`