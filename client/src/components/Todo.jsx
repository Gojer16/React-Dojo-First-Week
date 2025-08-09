import { useEffect, useState } from 'react'
import TodoItem from './TodoItem';

const Todo = () => {

const [filter, setFilter] = useState("all");

const [todos, setTodos] = useState(() => {
  try {
    const raw = localStorage.getItem("todos");
    const savedTodos = JSON.parse(raw);
    return Array.isArray(savedTodos) ? savedTodos : [];
  } catch (e) {
    console.error("Failed to parse todos from localStorage", e);
    return [];
  }
});

const [newTodos, setNewTodos] = useState("");

const addHandler = () => {
  if (!newTodos.trim()) return;
  setTodos([...todos,
    {id: Date.now(), text: newTodos, completed: false }]);
  setNewTodos("");
};

const deleteHandler = (idToDelete) => {
  const updatedTodos = todos.filter(({ id }) => id !== idToDelete);
  setTodos(updatedTodos)
}

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

const toggleComplete = (id) => {
  const updated = todos.map(todo => 
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  setTodos(updated);
};

const filteredTodos = todos.filter(todo => {
  if (filter === "active") return !todo.completed;
  if (filter === "completed") return todo.completed;
  return true; 
})


  return (
    <div className=' min-h-screen px-4 py-8 bg-gradient-to-br font-medium from-pink-300 via-indigo-400 to-fuchsia-500'>
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
          className='px-6 py-3 shadow-lg p-3 rounded-2xl text-gray-800 text-center item-center bg-white '
        />    
        <button 
          onClick={addHandler}
          className='outline-none border-none hover:text-white text-base ease-linear relative hover:bg-todo-primary px-8 py-3 hover:shadow-todo-primary hover:-translate-y-1 transform transition-all duration-300 shadow-xl rounded-2xl cursor-pointer  text-center item-center bg-gray-300'>Add Task</button>
      </div>
    
   <div className="flex gap-4 py-8 justify-center items-center bg-white/50 rounded-2xl shadow-lg mx-auto">
      <button
        onClick={() => setFilter("all")}
        className={`px-5 py-3 cursor-pointer shadow-xl outline-none border-none hover:shadow-lg transition-all duration-300  ease-linear relative transform hover:scale-105 rounded-2xl ${filter === "all" ? "bg-white hover:bg-gray-100 text-black" : "bg-gray-200"}`}
      >
      All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`px-6  py-3 cursor-pointer shadow-xl  rounded-2xl  outline-none border-none hover:shadow-lg transition-all duration-300  ease-linear relative transform hover:scale-105 ${filter === "active" ? "bg-white hover:bg-gray-100 text-black" : "bg-gray-200"}`}
      >
      Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`px-6 py-3 cursor-pointer shadow-xl  outline-none border-none hover:shadow-lg transition-all duration-300  ease-linear relative transform hover:scale-105 rounded-2xl ${filter === "completed" ? "bg-white hover:bg-gray-100 text-black" : "bg-gray-200"}`}
      >
      Completed
        </button>
    </div> 

      <ul className='px-4 py-12 flex justify-start items-start min-h-screen text-center gap-4'>
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