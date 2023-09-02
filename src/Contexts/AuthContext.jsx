import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();
const AuthState = (props) => {
    const [image, setImage] = useState('')
    const [auth, setAuth] = useState({ user: null, token: "" })

    useEffect(() => {
        const data = localStorage.getItem('auth')

        if(data) {
            const parsedData = JSON.parse(data)
            setAuth({
                ...auth,
                user: parsedData.user,
                token: parsedData.auth_token
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ image, setImage, auth, setAuth }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthState }