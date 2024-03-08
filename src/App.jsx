import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import GlobalStyle from "../src/styles/GlobalStyle"
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import { useState } from "react";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";

function App() {
  const [token, setToken] = useState("")
  const [image, setImage] = useState("")
  const [habitsList, setHabitsList] = useState([])
  const [habitsToday, setHabitsToday] = useState([])
  const [taskDone, setTaskDone] = useState([])
  const [percentage, setPercentage] = useState("")

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={
          <LoginPage
            setToken={setToken}
            setImage={setImage}
            setPercentage={setPercentage}
            taskDone={taskDone} />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/habits"
          element={
            <HabitsPage
              token={token}
              image={image}
              habitsList={habitsList}
              setHabitsList={setHabitsList}
              percentage={percentage}
              setPercentage={setPercentage}
              taskDone={taskDone}
              setTaskDone={setTaskDone}
            />}
        />

        <Route path="/today" element={
          <TodayPage
            token={token}
            image={image}
            habitsList={habitsList}
            taskDone={taskDone}
            setTaskDone={setTaskDone}
            percentage={percentage}
            setPercentage={setPercentage}
            habitsToday={habitsToday}
            setHabitsToday={setHabitsToday}
          />}
        />

        <Route path="/historic" element={<HistoricPage image={image} percentage={percentage} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App