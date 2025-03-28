export default function TodoItem({ todo, deleteTodo }) {
    return (
      <li className="flex justify-between items-center p-2 border-b border-gray-300 dark:border-gray-700 last:border-0">
        <span className={todo.completed ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-900 dark:text-gray-100"}>
          {todo.title}
        </span>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 dark:hover:bg-red-400"
        >
          Delete
        </button>
      </li>
    );
  }
  