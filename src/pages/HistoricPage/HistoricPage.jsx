import React from 'react'
import styled from "styled-components"
import Top from '../../components/Top'
import Footer from '../../components/Footer'

export default function HistoricPage({image}) {
    return (
        <TodayPageContainer>
            <Top image={image}/>
            <ContainerHeader>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            </ContainerHeader>
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
    height: 130px;
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
        color: #666666;
        font-size: 18px;
        margin-top: 20px;
    }
`