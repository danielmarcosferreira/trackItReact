import React, { createContext, useState } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [token, setToken] = useState("")
    const [image, setImage] = useState("")
    const [habitsList, setHabitsList] = useState([])
    const [habitsToday, setHabitsToday] = useState([])
    const [taskDone, setTaskDone] = useState([])
    const [percentage, setPercentage] = useState("")

    return (
        <AuthContext.Provider
            value={{
                token, setToken,
                image, setImage,
                habitsList, setHabitsList,
                habitsToday, setHabitsToday,
                taskDone, setTaskDone,
                percentage, setPercentage
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;