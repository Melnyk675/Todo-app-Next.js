"use client";

import { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md mb-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-l bg-white dark:bg-gray-800 dark:text-gray-200"
        placeholder="Enter a todo..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 dark:hover:bg-blue-400"
      >
        Add
      </button>
    </form>
  );
}
