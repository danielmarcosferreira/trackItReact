import styled from "styled-components"
import dayjs from 'dayjs'
import { useEffect, useState } from "react"
import axios from "axios"
import Top from '../../components/Top'
import Footer from "../../components/Footer"
import TodayTask from "./TodayTask"


export default function TodayPage(props) {
    const { token, image, taskDone, setTaskDone, percentage, setPercentage, habitsToday, setHabitsToday } = props
    const [todayList, setTodayList] = useState([])
    const date = (dayjs().format('dddd, DD/MM'))
    setPercentage(((taskDone.length / habitsToday.length) * 100).toFixed(0))

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.get(URL, config)
        promise.then((res) => {
            // const newArray = res.data
            // newArray.map((item) => {
            //     if(item.done === true) {
            //         setTaskDone([...taskDone, item.id])
            //     } 
            // })
            setTodayList(res.data)
            setHabitsToday(res.data)
        })
        promise.catch((err) => console.log(err.response.data))
    }, [percentage, taskDone])

    return (
        <TodayPageContainer>
            <Top image={image} />
            <ContainerHeader>
                <h1>{date}</h1>
                {taskDone.length === 0 ? <h2>Nenhum hábito concluído ainda</h2> : <h3>{percentage}% dos hábitos concluídos</h3>}
            </ContainerHeader>

            {todayList.map((item) =>
                <TodayTask
                    key={item.id}
                    taskName={item.name}
                    taskId={item.id}
                    token={token}
                    isDone={item.done}
                    taskDone={taskDone}
                    setTaskDone={setTaskDone}
                    current={item.currentSequence}
                    highest={item.highestSequence} />)}

            <Footer percentage={percentage} />
        </TodayPageContainer>
    )
}

const TodayPageContainer = styled.div`
    background-color: #F2F2F2;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContainerHeader = styled.div`
    height: 100px;
    width: 100%;
    font-family: Lexend Deca;
    padding-left: 15px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        color: #126BA5;
        font-size: 23px;
        margin-bottom: 7px;
    }
    h2 {
        color: #BABABA;
        font-size: 18px;
    }
    h3 {
        color: #8FC549;
        font-size: 18px;
    }
`