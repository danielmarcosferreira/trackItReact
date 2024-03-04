import styled from "styled-components"
import Footer from "../../components/Footer";
import HabitsContainer from "./HabitsContainer";
import Top from "../../components/Top";

export default function HabitsPage() {
    return (
        <HabitsPageContainer>
            <Top />
            <HabitsContainer/>
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