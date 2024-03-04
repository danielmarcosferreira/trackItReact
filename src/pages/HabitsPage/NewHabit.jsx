import styled from "styled-components"
import WeekDiv from "./WeekDiv"
import { useEffect, useState } from "react"
import axios from "axios"

export default function NewHabit({ token, selectedDays, setSelectedDays, toggleTasks ,setToggleTasks }) {
    const [name, setName] = useState("")
    const [days, setDays] = useState([])
    // const [form, setForm] = useState({ name: "", days: [] })
    // setForm([...form, days=selectedDays])

    function handleForm(e) {
        const { name, value } = e.target
        // setForm({ ...form, [name]: value })
        setName(e.target.value)
    }

    function addHabit(e) {
        e.preventDefault()
        setDays(selectedDays)
        
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const body = {
            name,
            days
        }

        const promise = axios.post(URL, body, config)
        promise.then((res) => {
            setToggleTasks(!toggleTasks)
            setName("")
            console.log(res.data);
        })
        promise.catch((err) => console.log(err.response.data))

    }

    return (
        <NewHabitContainer onSubmit={addHabit}>
            <div>
                <input
                    placeholder="nome do habito"
                    name="name"
                    type="text"
                    onChange={handleForm}
                    value={name} />

                <WeekDiv setDays={setDays} days={days}/>
            </div>
            <AddCancelButtons>
                <button>Cancelar</button>
                <button type="submit">Salvar</button>
            </AddCancelButtons>
        </NewHabitContainer>
    )
}

const NewHabitContainer = styled.form`
    background-color: #FFFFFF;
    width: 100%;
    height: 180px;
    padding-left: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;   

    input {
        &:nth-child(1) {
            height: 45px;
            width: 90%;
            border: 1px solid #D4D4D4;
            border-radius: 5px;
            margin-top: 15px;
            &::placeholder {
                color: #DBDBDB;
                font-size: 20px;
                padding-left: 10px;
            }
        }
    }
`

const AddCancelButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    button{
            font-family: Lexend Deca;
            font-weight: 400;
            width: 85px;
            height: 35px;
            border: none;
            border-radius: 5px;
            margin: 10px;
            cursor: pointer;
        &:nth-child(1) {
            background-color: #FFFFFF;
            color: #52B6FF;
        }
        &:nth-child(2) {
            background-color: #52B6FF;
            color: #FFFFFF;
        }
    }
`