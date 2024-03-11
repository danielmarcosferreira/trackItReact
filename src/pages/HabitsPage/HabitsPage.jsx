import styled from "styled-components"
import HabitsContainer from "./HabitsContainer";
import Top from "../../components/Top";
import Footer from "../../components/Footer";

export default function HabitsPage() {
    return (
        <HabitsPageContainer>
            <Top />
            <HabitsContainer/>
            <Footer/> 
        </HabitsPageContainer>
    )
}

const HabitsPageContainer = styled.div`
    background-color: #F2F2F2;
    height: 100vh;
    display: flex;
    flex-direction: column;
`