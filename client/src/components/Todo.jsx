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
    <div className='min-h-screen px-4 py-8 bg-gradient-to-br font-medium from-pink-300 via-indigo-400 to-fuchsia-500'>
  <div className='space-x-6'>
  <input
  type="text" 
  name="addTast" 
  id="addTask"
  placeholder='Add Tasks / Activity'
  required
  value={newTodos}
  onKeyDown={(e) => {
  if (e.key === "Enter") addHandler();
  }}
  onChange={(e) => setNewTodos(e.target.value)}
  className='px-6 py-3 shadow-lg p-3 rounded-4xl text-gray-800 text-center item-center bg-white '
  />    
  <button 
  onClick={addHandler}
  className='px-4 py-3  shadow-lg rounded-4xl cursor-pointer  text-center item-cente bg-gray-200'>Add Task</button>
  </div>
    
   <div className="flex gap-4 mt-6">
  <button
    onClick={() => setFilter("all")}
    className={`px-4 py-2 rounded ${filter === "all" ? "bg-white text-black" : "bg-gray-200"}`}
  >
    All
  </button>
  <button
    onClick={() => setFilter("active")}
    className={`px-4 py-2 rounded ${filter === "active" ? "bg-white text-black" : "bg-gray-200"}`}
  >
    Active
  </button>
  <button
    onClick={() => setFilter("completed")}
    className={`px-4 py-2 rounded ${filter === "completed" ? "bg-white text-black" : "bg-gray-200"}`}
  >
    Completed
  </button>
</div> 

  <ul className='px-4 py-12 flex items-center text-center gap-4'>
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