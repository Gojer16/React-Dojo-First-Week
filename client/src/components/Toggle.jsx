import { useState } from "react"


const Toggle = () => {

    const [isOn, setIsOn] = useState(false)

    
    const switchHandler = () => {
        setIsOn(c => !c)
    }


  return (
    <div className="px-4 py-6">
        <p className="text-2xl mb-4">The switch is <strong>{isOn ? "OFF" : "ON"}</strong></p>
        <button 
        onClick={switchHandler}
        className={`px-4 p-3 transform transition-all duration-300 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer items-center text-center font-bold
        ${isOn ? "bg-red-500": "bg-green-300 text-white"}
        `} >{isOn ? "Turn Off"  : "Turn On"}</button>
    </div>
  )
}

export default Toggle