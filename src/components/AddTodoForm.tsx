import { useState } from "react";
import Button from "./Button";

function AddTodoForm({ todos, setTodos }) {
  const [todoText, setTodoText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTodos((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: todoText,
            completed: false,
          },
        ]);
        setTodoText("");
      }}
    >
      <h2>Add a todo</h2>
      <input
        type="text"
        className=" h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[12px] "
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
      <Button>Add to list</Button>
    </form>
  );
}

export default AddTodoForm;
