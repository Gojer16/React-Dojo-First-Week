import { useEffect, useState } from "react";


export const useTodo = () => {

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

  return { filter, setFilter, todos, setTodos, newTodos, setNewTodos, addHandler, deleteHandler, toggleComplete, filteredTodos }
}
