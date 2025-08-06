import { useState } from "react"


const Counter = () => {

    const [counter, setCounter] = useState(0)

    const incrementHandler = () => {
    setCounter(prev => prev + 1)
    }

const decrementHandler = () => {
    setCounter(prev => prev - 1)
    }

const resetHandler = () => {
    setCounter(0)
    }

  return (
    <>
        <div className="px-4 py-4 text-2xl">
            Counter: <span className="font-bold">{counter}</span>
        </div>
        <div className="gap-4 px-4 space-x-2">
            <button 
            onClick={incrementHandler}
            className="cursor-pointer px-2 py-2 bg-red-400 rounded-2xl">Increment</button>
            <button
            onClick={decrementHandler}
            className="cursor-pointer px-2 py-2 bg-blue-400 rounded-2xl">Decrement</button>
            <button
            onClick={resetHandler}
            className="cursor-pointer px-2 py-2 bg-green-400 rounded-2xl">Reset</button>
        </div>
    </>
  )
}

export default Counter