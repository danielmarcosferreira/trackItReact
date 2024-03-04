import styled from "styled-components"
import Footer from "../../components/Footer";
import HabitsContainer from "./HabitsContainer";
import Top from "../../components/Top";
import { useEffect } from "react";
import axios from "axios";

export default function HabitsPage({token}) {

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.get(URL, config)
        promise.then((res) => {
            console.log(res.data)
        })
        promise.catch((err) => console.log(err.response.data))
    }, [])

    return (
        <HabitsPageContainer>
            <Top />
            <HabitsContainer token={token}/>
            <Footer />
        </HabitsPageContainer>
    )
}

const HabitsPageContainer = styled.div`
    height: 100vh;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
`