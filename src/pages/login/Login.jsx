import React, { useState } from 'react'

export const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const sumithandler = () => {

        console.log(`Username: ${userName} Password: ${password}`)
    }

    return (
        <div>
            <h2>Login Form</h2>
            <label > UserName </label>
            <input type="text" placeholder='username' value={userName}
                onChange={(e) => {
                    console.log("type value " + e.target.value)
                    setUserName(e.target.value)
                }
                } /><br />
            <br />

            <label > Password </label>
            <input type="password" placeholder='password' value={password}
                onChange={(e) => {
                    console.log("type value " + e.target.value)
                    setPassword(e.target.value)
                }
                } /><br />
            <br />


            <button type="button" onClick={sumithandler}>Sumit</button>

            <p>Login UserName {userName}</p>

        </div>
    )
}
