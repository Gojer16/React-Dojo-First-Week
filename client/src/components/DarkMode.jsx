import React, { use, useEffect } from 'react'

const DarkMode = () => {

    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(c => !c)
    }

    useEffect(() => {
        const storedMode = localStorage.getItem('darkMode')
        if (storedMode === "true") setIsDarkMode(true)
    }, [])

    useEffect(() => {
        localStorage.setItem('darkMode', isDarkMode)
    }, [isDarkMode])


  return (
    <div className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"}
    min-h-screen
    `}>
        
        <h1>Hello, the theme is {isDarkMode}</h1>    
    <button
    onClick={toggleDarkMode}
    className={`px-4 py-2 rounded-xl cursor-pointer
        ${isDarkMode ? "bg-gray-800 text-white": "bg-gray-300 text-black"} mt-4 `}
    >
    {isDarkMode ? "Switch to Light Mode": "Switch to Dark Mode"}

    </button>
    </div>
  )
}

export default DarkMode