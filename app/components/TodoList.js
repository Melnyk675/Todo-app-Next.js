import TodoItem from "./TodoItem";

export default function TodoList({ todos, deleteTodo }) {
  return (
    <ul className="w-full max-w-md bg-white dark:bg-gray-800 p-4 shadow-md rounded">
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />)
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">No todos available</p>
      )}
    </ul>
  );
}
