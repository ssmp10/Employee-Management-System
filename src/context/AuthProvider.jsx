import { useState } from 'react'
import { AuthContext } from './AuthContext'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

const getInitialUserData = () => {
    setLocalStorage()
    const { employees } = getLocalStorage()

    return employees
}

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(getInitialUserData)

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
