import React, { useState } from 'react'
import styled from "styled-components"
import axios from "axios"
import done from "../../assets/images/done.png"


export default function TodayTask(props) {
    const { taskName, taskId, isDone, token, taskDone, setTaskDone, current, highest } = props

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
        console.log(taskDone);
    }

    return (
        <TodayTaskContainer>
            <div>
                <h3>{taskName}</h3>
                <p>Sequência atual: {current} dias</p>
                <p>Seu recorde: {highest} dias</p>
            </div>
            <ImageDone onClick={() => doneTask(taskId)} selected={isDone}>
                {/* {selected={taskDone.includes(taskId) ? true : false}} */}
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