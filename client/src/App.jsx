import './App.css'
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import DarkMode from './components/DarkMode';
import Timer from './components/Timer';
import Todo from './components/Todo';

function App() {
  return (
    <> 
      <div className=''>     
        <Counter />
        <Toggle />
        <DarkMode />
        <Timer />
        <Todo />
      </div>

    </>
  )
}

export default App
