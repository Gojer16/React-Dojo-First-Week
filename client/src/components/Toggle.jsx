import { useState } from "react"


const Toggle = () => {
    const [isOn, setIsOn] = useState(false)
    const switchHandler = () => {
        setIsOn(c => !c)
    }

  return (
    <div className="h-72 px-6 py-6 mt-16">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-2 mb-1">Switcher!!</h1>
        <p className="text-2xl mb-4">The switch is <strong>{isOn ? "OFF" : "ON"}</strong></p>
        </div>
        <div className="flex justify-center">
          <button 
          onClick={switchHandler}
          className={`px-4 p-3  transform transition-all duration-300 rounded-3xl shadow-lg hover:shadow-2xl  hover:-translate-y-1.5 cursor-pointer items-center text-center font-bold
          ${isOn ? "bg-red-500": "bg-emerald-400 text-white"}
          `} >{isOn ? "Turn Off"  : "Turn On"}</button>
        </div>
    </div>
  )
}

export default Toggle