"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function Home() {
  const API_URL = "https://jsonplaceholder.typicode.com/todos";
  const [todos, setTodos] = useState([]);

  // Fetch todos on mount
  useEffect(() => {
    axios
      .get(`${API_URL}?_limit=10`)
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Add new todo
  const addTodo = async (title) => {
    const newTodo = { title, completed: false };
    try {
      const res = await axios.post(API_URL, newTodo);
      setTodos([res.data, ...todos]); // Optimistic UI update
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id)); // Optimistic UI update
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Todo App</h1>
       <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

