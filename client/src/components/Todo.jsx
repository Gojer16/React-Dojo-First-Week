import { useTodo } from '../hooks/useTodo';
import TodoItem from './TodoItem';

const Todo = () => {

  const { filter, setFilter, todos, setTodos, newTodos, setNewTodos, addHandler, deleteHandler, toggleComplete, filteredTodos } = useTodo();

  return (
    <div className=' flex flex-col'>
      <h1 className=' text-lg sm:text-3xl self-center  font-bold mb-4'>To-do List</h1>
      <div className='space-x-6 flex items-center justify-center py-8'>
        <input
          type="text"
          name="addTask"
          id="addTask"
          placeholder='Add Tasks / Activity'
          required
          value={newTodos}
          onKeyDown={(e) => {
          if (e.key === "Enter") addHandler();
          }}
          onChange={(e) => setNewTodos(e.target.value)}
          className='text-base sm:text-lg  sm:px-8  sm:py-3 px-6 py-3 shadow-lg p-3 rounded-2xl text-gray-800 text-center item-center bg-white '
        />    
        <button 
          onClick={addHandler}
          className='outline-none text-base sm:text-lg  sm:px-8  sm:py-3  border-none hover:text-white  ease-linear relative hover:bg-todo-primary px-8 py-3 hover:shadow-todo-primary hover:-translate-y-1 transform transition-all duration-300 shadow-xl rounded-2xl cursor-pointer  text-center item-center bg-gray-300'>Add Task</button>
      </div>
    
   <div className="flex gap-4 py-8 justify-center items-center bg-white/50 rounded-2xl shadow-lg mx-auto">
      <button
        onClick={() => setFilter("all")}
        className={`px-5 py-3 text-base sm:text-lg  sm:px-8  sm:py-3  cursor-pointer shadow-xl outline-none border-none hover:shadow-lg transition-all duration-300  ease-linear relative transform hover:scale-105 rounded-2xl ${filter === "all" ? "bg-white hover:bg-gray-100 text-black" : "bg-gray-200"}`}
      >
      All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`px-6  py-3 cursor-pointer text-base sm:text-lg  sm:px-8  sm:py-3  shadow-xl  rounded-2xl  outline-none border-none hover:shadow-lg transition-all duration-300  ease-linear relative transform hover:scale-105 ${filter === "active" ? "bg-white hover:bg-gray-100 text-black" : "bg-gray-200"}`}
      >
      Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`px-6 py-3 cursor-pointer shadow-xl text-base sm:text-lg  sm:px-8  sm:py-3   outline-none border-none hover:shadow-lg transition-all duration-300  ease-linear relative transform hover:scale-105 rounded-2xl ${filter === "completed" ? "bg-white hover:bg-gray-100 text-black" : "bg-gray-200"}`}
      >
      Completed
        </button>
    </div> 

      <ul className='flex-wrap px-2 sm:px-4 py-6 sm:py-12 flex justify-start items-start min-h-screen text-center gap-4'>
        {filteredTodos.map((item) => (
        <TodoItem
        key={item.id}
        item={item} 
        onDelete={deleteHandler} 
        onToggle={toggleComplete} />
        ))}
      </ul>
    
  </div>
  )
}

export default Todo