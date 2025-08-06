import { useCounter } from "../hooks/useCounter"

const Counter = () => {

    const { counter, increment, decrement, reset } = useCounter()

  return (
    <>
        <div className="px-4 py-4 text-2xl">
            Counter: <span className="font-bold">{counter}</span>
        </div>
        <div className="gap-4 px-4 space-x-2">
            <button 
            onClick={increment}
            className="cursor-pointer px-2 py-2 bg-red-400 rounded-2xl">Increment</button>
            <button
            onClick={decrement}
            className="cursor-pointer px-2 py-2 bg-blue-400 rounded-2xl">Decrement</button>
            <button
            onClick={reset}
            className="cursor-pointer px-2 py-2 bg-green-400 rounded-2xl">Reset</button>
        </div>
    </>
  )
}

export default Counter