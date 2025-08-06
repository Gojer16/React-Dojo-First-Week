import { useTimer } from '../hooks/useTimer';

const Timer = () => {

const { time, isRunning, start: handleStart, pause: handlePause, reset: resetHandler } = useTimer();


  return (
    <div className='min-h-screen bg-gradient-to-b from-sky-300-300 to-blue-800'>
        <div>Time: {time}</div>
        <div className='px-4 py-2 space-x-3'>
            <button 
            className='bg-blue-700 cursor-pointer shadow-lg text-center  font-bold text-1xl items-center hover:-translate-y-1 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl text-white px-4 py-3 rounded-lg'
            onClick={handleStart}
            disabled={isRunning}
            >
            Start Timer
            </button>
            <button
            className='bg-pink-400 text-white px-4 py-3 rounded-lg cursor-pointer  text-center  font-bold text-1xl items-center shadow-lg hover:-translate-y-2 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl'
            onClick={handlePause }
            disabled={!isRunning}
            >
            Pause Timer
            </button>

            <button 
            className='bg-emerald-500 text-white px-4 py-3 text-center  font-bold text-1xl items-center rounded-lg cursor-pointer shadow-lg hover:-translate-y-1.5 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl'
            onClick={resetHandler}
            >
            Reset Timer
            </button>
        </div>
    </div>
  )
}

export default Timer