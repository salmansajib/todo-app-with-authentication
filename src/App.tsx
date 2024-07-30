import { useState } from "react";

import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  // states
  const [todos, setTodos] = useState<Todo[]>([]);

  // derived state
  const totalNumberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter((todo) => todo.completed).length;

  // event handlers / actions
  const handleAddTodo = (todoText: string) => {
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

  const handleToggleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="font-sans flex flex-col justify-center items-center bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />

      <main className=" relative w-[972px] h-[636px] bg-gray-50 rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden ">
        <Header
          totalNumberOfTodos={totalNumberOfTodos}
          numberOfCompletedTodos={numberOfCompletedTodos}
        />
        <TodoList
          todos={todos}
          handleToggleCompleted={handleToggleCompleted}
          handleDeleteTodo={handleDeleteTodo}
        />
        <Sidebar handleAddTodo={handleAddTodo} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
