import { useContext } from "react";
import DeleteButton from "./DeleteButton";
import { TodoContext } from "../contexts/TodosContextProvider";

function TodoList() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Forgot to add provider");
  }

  const { todos, handleToggleCompleted, handleDeleteTodo } = context;

  return (
    <ul>
      {todos.length === 0 && (
        <li className=" h-full flex items-center justify-center font-medium text-xl ">
          Start by adding a todo...
        </li>
      )}

      {todos.map((todo) => (
        <li
          key={todo.id}
          className=" flex items-center justify-between px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%] "
          onClick={() => {
            handleToggleCompleted(todo.id);
          }}
        >
          <span
            className={`${
              todo.completed === true ? "line-through text-[#ccc]" : ""
            }`}
          >
            {todo.text}
          </span>
          <DeleteButton id={todo.id} onDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
