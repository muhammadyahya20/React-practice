import { useState } from "react"
import LoginBtn from "./LoginBtn"
import LogoutBtn from "./LogoutBtn"


export default function Homepage(){
    const [loggedIn, setLoggedIn] = useState(false)
    const login = ()=> setLoggedIn(true)
    const logout = ()=> setLoggedIn(false)
    return (
        <>
        {loggedIn ?
            <>
            <h1>Welcome to the page</h1>
            <LogoutBtn logout={logout}/>
            </>
            :
            <LoginBtn login={login}/>
        }
        </>
    )
}