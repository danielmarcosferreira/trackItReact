import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "scheduler"
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

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage setToken={setToken} setImage={setImage} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/habits" element={<HabitsPage token={token} image={image} />} />
        <Route path="/today" element={<TodayPage image={image} />} />
        <Route path="/historic" element={<HistoricPage image={image} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App