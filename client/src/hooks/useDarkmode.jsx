import { useEffect, useState } from 'react'



export const useDarkmode = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

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


  return { isDarkMode, toggleDarkMode }
}
