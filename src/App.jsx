import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "scheduler"
import LoginPage from "./pages/LoginPage/LoginPage";
import GlobalStyle from "../src/styles/GlobalStyle"
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/habits" element={<HabitsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App