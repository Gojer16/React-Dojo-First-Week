import { useEffect, useState } from 'react'

const Todo = () => {

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



  return (
    <div className='min-h-screen px-4 py-8 bg-gradient-to-br from-pink-300 via-indigo-400 to-fuchsia-500'>
  <div className='space-x-6'>
  <input
  type="text" 
  name="addTast" 
  id="addTask"
  placeholder='Add Tasks / Activity'
  required
  value={newTodos}
  onChange={(e) => setNewTodos(e.target.value)}
  className='px-6 py-3 shadow-lg p-3 rounded-4xl text-gray-800 text-center item-center bg-white font-medium'
  />    
  <button 
  onClick={addHandler}
  className='px-4 py-3  shadow-lg rounded-4xl cursor-pointer  text-center item-cente bg-gray-200'>Add Task</button>
  </div>
    
    
  <ul className='px-4 py-8 flex items-center text-center gap-4'>
    {todos.map((item, id) => {
      return <li key={id}
      >
      {item.text}
      <button 
      className='bg-indigo-200 rounded-2xl text-center px-4 py-2'
      onClick={() => deleteHandler(item.id)}>Delete</button>
      </li>
    })}
  </ul>
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Todo