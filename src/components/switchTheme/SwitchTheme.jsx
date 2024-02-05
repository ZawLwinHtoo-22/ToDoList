import React, { useState } from 'react'

export const SwitchTheme = () => {

    const [isDark, setIsDark] = useState(true)

    const changeThemeHandler = () => {
        const text = document.querySelector("#switch");

        if (isDark == true) {
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
            setIsDark(false);
            text.innerText = "Change White"


        }
        else {
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
            setIsDark(true);
            text.innerText = "Change Black"


        }
    }

    return (
        <>
            <button onClick={changeThemeHandler} id='switch'> Change Dark

                {/* {
                    isDark ? ` Dark` : ` White`
                } */}

            </button>
            {
                isDark && <p>Theme is white.</p>
            }


            {/* 
            {
                isTrue? true:false 
            }*/}

            {/* isTrue && true */}

        </>

    )
}
