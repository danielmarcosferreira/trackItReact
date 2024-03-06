import React from 'react'
import styled from "styled-components"
import Top from '../../components/Top'
import Footer from '../../components/Footer'
import TodayTasks from './TodayTasks'

export default function TodayPage({image}) {
    return (
        <TodayPageContainer>
            <Top image={image}/>
            <ContainerHeader>
                <h1>Segunda, 17/05</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </ContainerHeader>
            <TodayTasks />
            <Footer />
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
`