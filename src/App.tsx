import { useState } from "react";

import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todoText) => {
    if (todos.length >= 3) {
      alert("Log in to add more than 3 todos");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          completed: false,
        },
      ]);
    }
  };

  const handleToggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="font-sans flex flex-col justify-center items-center bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />

      <main className=" relative w-[972px] h-[636px] bg-gray-50 rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden ">
        <Header todos={todos} />
        <TodoList
          todos={todos}
          handleToggleCompleted={handleToggleCompleted}
          handleDeleteTodo={handleDeleteTodo}
        />
        <Sidebar todos={todos} handleAddTodo={handleAddTodo} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
