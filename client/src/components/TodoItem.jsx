

const TodoItem = ({ item, onDelete, onToggle }) => {
  return (
    <li className='hover:-translate-y-1.5 hover:shadow-2xl bg-white flex gap-4 text-center items-center shadow-md rounded-lg p-4'>
      {item.text}
      <button
        className='bg-indigo-200 rounded-2xl text-center cursor-pointer  px-4 py-2'
        onClick={() => onDelete(item.id)}
        >
        Delete
        </button>
      <button
        className={`${item.completed ? 'bg-red-500' : 'bg-green-500'} rounded-2xl text-center cursor-pointer  px-4 py-2`}
        onClick={() => onToggle(item.id)}
        >
        {item.completed ? 'Undo' : 'Complete'}
        </button>
    </li>
  )
}

export default TodoItem