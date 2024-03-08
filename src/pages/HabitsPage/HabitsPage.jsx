import styled from "styled-components"
import HabitsContainer from "./HabitsContainer";
import Top from "../../components/Top";
import FooterTodayPage from "../TodayPage/FooterTodayPage";
import Footer from "../../components/Footer";

export default function HabitsPage(props) {
    const { token, image, habitsList, setHabitsList, percentage, setPercentage, taskDone, setTaskDone } = props

    return (
        <HabitsPageContainer>
            <Top image={image} />
            <HabitsContainer
                token={token}
                habitsList={habitsList}
                setHabitsList={setHabitsList} 
                taskDone={taskDone}
                setPercentage={setPercentage}
                setTaskDone={setTaskDone}/>
            <Footer percentage={percentage}/> 
        </HabitsPageContainer>
    )
}

const HabitsPageContainer = styled.div`
    height: 100vh;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
`