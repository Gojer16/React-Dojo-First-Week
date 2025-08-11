import { useDarkmode } from "../hooks/useDarkmode"


const DarkMode = () => {

    const { isDarkMode, toggleDarkMode } = useDarkmode();

  return (
    <div className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"}
    min-h-screen px-8 py-12
    `}>
        
        <h1 className={`${isDarkMode ? "text-pink-500" : "text-fuchsia-500"}
             text-2xl font-bold `}>Hello, the theme is {isDarkMode ? "Dark!" : "Light!"}</h1>    
    <button
        onClick={toggleDarkMode}
        className={`px-8 py-8  rounded-xl cursor-pointer items-center text-center animate-pulse
        ${isDarkMode ? "bg-gray-800 text-white": "bg-gray-300 text-black"} mt-4 `}
    >
    {isDarkMode ? "Switch to Light Mode": "Switch to Dark Mode"}

    </button>
    </div>
  )
}

export default DarkMode