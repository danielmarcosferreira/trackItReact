import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "scheduler"
import LoginPage from "./pages/LoginPage/LoginPage";
import GlobalStyle from "../src/styles/GlobalStyle"
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import { useState } from "react";

function App() {
  const [token, setToken] = useState("")

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage setToken={setToken}/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/habits" element={<HabitsPage token={token}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App