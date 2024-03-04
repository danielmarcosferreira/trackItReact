import styled from "styled-components"
import { useEffect, useState } from "react"
import NewHabit from "./NewHabit"
import HabitsList from "./HabitsList"
import axios from "axios"


export default function HabitsContainer({ token }) {
    const [toggleAdd, setToggleAdd] = useState(false)
    const [toggleTasks, setToggleTasks] = useState(false)
    const [habitsList, setHabitsList] = useState([])
    const [selectedDays, setSelectedDays] = useState([])

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.get(URL, config)
        promise.then((res) => {
            setHabitsList(res.data)
            console.log(res.data)
        })
        promise.catch((err) => console.log(err.response.data))
    }, [toggleTasks])

    function deleteTask (taskID) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${taskID}`

        axios.delete(URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => {
                setToggleTasks(!toggleTasks)
                console.log("OK!!!")
            })
            .catch((err) => console.log(err.response.data))
    }

    return (
        <MenuContainer>
            <AddHabits>
                <h1>Meus hábitos</h1>
                <div onClick={() => setToggleAdd(!toggleAdd)}>+</div>
            </AddHabits>

            {toggleAdd === true
                ? <NewHabit
                    toggleTasks={toggleTasks}
                    setToggleTasks={setToggleTasks}
                    token={token}
                    selectedDays={selectedDays}
                    setSelectedDays={setSelectedDays} />
                : ""}

            <HabitsTrack>
                {habitsList.length === 0 ?
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    : habitsList.map((item) => <HabitsList key={item.id} task={item} deleteTask={() => deleteTask(item.id)}/>)}
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