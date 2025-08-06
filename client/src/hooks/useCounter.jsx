import { useState } from 'react'

export const useCounter = () => {

    const [counter, setCounter] = useState(0)

    const increment = () => {
    setCounter(prev => prev + 1)
    }

    const decrement = () => {
    setCounter(prev => prev - 1)
    }

    const reset = () => {
    setCounter(0)
    }
    return {
        counter, increment, decrement, reset
    }
}