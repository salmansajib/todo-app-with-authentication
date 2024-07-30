import { useState } from "react";

import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="font-sans flex flex-col justify-center items-center bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />

      <main className=" relative w-[972px] h-[636px] bg-gray-50 rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden ">
        <Header todos={todos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <Sidebar todos={todos} setTodos={setTodos} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
