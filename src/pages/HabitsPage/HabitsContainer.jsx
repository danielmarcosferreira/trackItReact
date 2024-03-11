import styled from "styled-components"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import NewHabit from "./NewHabit"
import HabitsList from "./HabitsList"
import { AuthContext } from "../../context/AuthProvider"


export default function HabitsContainer() {
    const [toggleAdd, setToggleAdd] = useState(false)
    const [toggleTasks, setToggleTasks] = useState(false)
    const [selectedDays, setSelectedDays] = useState([])
    const { token, habitsList, setHabitsList, taskDone, setPercentage, habitsToday } = useContext(AuthContext)

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
            setPercentage(((taskDone.length / habitsToday.length) * 100).toFixed(0))
        })
        promise.catch((err) => console.log(err.response.data))
    }, [toggleTasks])

    function deleteTask(taskID) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${taskID}`

        axios.delete(URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => {
                setToggleTasks(!toggleTasks)
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
                    toggleAdd={toggleAdd}
                    setToggleAdd={setToggleAdd}
                    toggleTasks={toggleTasks}
                    setToggleTasks={setToggleTasks}
                    token={token}
                    selectedDays={selectedDays}
                    setSelectedDays={setSelectedDays} />
                : ""}

            <HabitsTrack>
                {habitsList.length === 0 ?
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    : habitsList.map((item) => <HabitsList key={item.id} task={item} deleteTask={() => deleteTask(item.id)} />)}
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