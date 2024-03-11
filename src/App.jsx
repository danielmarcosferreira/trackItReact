import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import GlobalStyle from "../src/styles/GlobalStyle"
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";
import AuthProvider from "./context/AuthProvider";

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={
            <LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/habits"
            element={<HabitsPage />}
          />

          <Route path="/today" element={
            <TodayPage />}
          />

          <Route path="/historic" element={<HistoricPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App