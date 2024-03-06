import React from 'react'
import styled from "styled-components"
import done from "../../assets/images/done.png"

export default function TodayTasks() {
    return (
        <TodayTaskContainer>
            <div>
                <h3>Ler 1 capítulo de livro</h3>
                <p>Sequência atual: 3 dias</p>
                <p>Seu recorde: 5 dias</p>
            </div>
            <ImageDone>
                <img src={done}/>
            </ImageDone>
        </TodayTaskContainer>
    )
}

const TodayTaskContainer = styled.div`
    background-color: #FFFFFF;
    width: 95%;
    height: 100px;
    font-family: Lexend Deca;
    border: 1px solid #E7E7E7;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h3 {
        font-size: 20px;
    }
    p {
        font-size: 13px;
    }
`

const ImageDone = styled.div`
    background-color: #EBEBEB;
    width: 70px;
    height: 70px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`