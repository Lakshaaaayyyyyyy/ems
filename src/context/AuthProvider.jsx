import React, { createContext, useState, useEffect } from 'react'
import { setLocalStorage, getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [employees, setEmployees] = useState(() => {
        // Seed localStorage with initial data if it doesn't exist yet
        if (!localStorage.getItem('employees')) {
            setLocalStorage()
        }
        const { employees } = getLocalStorage()
        return employees || []
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