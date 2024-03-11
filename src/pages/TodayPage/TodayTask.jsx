import React, { useStat, useContext } from 'react'
import styled from "styled-components"
import axios from "axios"
import done from "../../assets/images/done.png"
import { AuthContext } from '../../context/AuthProvider'


export default function TodayTask(props) {
    const { taskName, taskId, isDone, current, highest, task } = props
    const { taskDone, setTaskDone, token } = useContext(AuthContext)
    function doneTask(taskId) {
        if (!isDone) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${taskId}/check`, taskId, config)
            promise.then((res) => {
                setTaskDone([...taskDone, taskId])
            })
            promise.catch((err) => console.log(err.response.data.message))
        } else {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${taskId}/uncheck`, taskId, config)
            promise.then((res) => {
                const newTask = taskDone.filter((i) => i !== taskId)
                setTaskDone(newTask)
            })
            promise.catch((err) => console.log(err.response.data.message))
        }
    }

    return (
        <TodayTaskContainer highest={highest} current={current}>
            <div>
                <h3>{taskName}</h3>
                <p>Sequência atual: <span>{current} dias</span></p>
                <p>Seu recorde: <span>{highest} dias</span></p>
            </div>
            <ImageDone onClick={() => doneTask(taskId)} selected={isDone}>
                <img src={done} />
            </ImageDone>
        </TodayTaskContainer>
    )
}

const TodayTaskContainer = styled.div`
    background-color: #FFFFFF;
    color: #666666;
    width: 95%;
    height: 100px;
    font-family: Lexend Deca;
    border: 1px solid #E7E7E7;
    border-radius: 8px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h3 {
        font-size: 20px;
        margin-bottom: 7px;
    }
    p {
        font-size: 13px;
    }
    span {
        color: ${props => props.current > 0 ? "green" : "black" };
    }
`

const ImageDone = styled.div`
    background-color: ${props => props.selected ? "#8FC549" : "#EBEBEB"};
    width: 70px;
    height: 70px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`