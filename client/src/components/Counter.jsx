import { useCounter } from "../hooks/useCounter"

const Counter = () => {

    const { counter, increment, decrement, reset } = useCounter()

  return (
    <>
        <div className=" px-4 py-8 text-2xl flex flex-col items-center justify-center space-y-4">
            <h1>Start counting !!!</h1>
            <span className="font-bold">Counter:</span> <span className="font-bold">{counter}</span>
        </div>
        <div className="gap-4 px-4 mt-4 py-8 space-x-2 flex justify-center items-center font-bold">
            <button 
            onClick={increment}
            className="cursor-pointer shadow-xl active:bg-red-600 transition-color duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl px-8 py-4 bg-red-500 rounded-2xl">Increment</button>
            <button
            onClick={decrement}
            className="cursor-pointer shadow-xl active:bg-blue-600 transition-color duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl px-8 py-4 bg-blue-500 rounded-2xl">Decrement</button>
            <button
            onClick={reset}
            className="cursor-pointer shadow-xl active:bg-green-600 transition-color duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl px-8 py-4 bg-green-500 rounded-2xl">Reset</button>
        </div>
    </>
  )
}

export default Counter