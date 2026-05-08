import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [employees, setEmployees] = useState(() => {
        const saved = localStorage.getItem('employees')
        return saved ? JSON.parse(saved) : []
    })

    // Function to update employees data
    const updateEmployees = (newEmployees) => {
        setEmployees(newEmployees)
        localStorage.setItem('employees', JSON.stringify(newEmployees))
    }

    return (
        <AuthContext.Provider value={{ employees, updateEmployees }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider