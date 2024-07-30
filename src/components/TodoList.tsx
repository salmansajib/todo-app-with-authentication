import DeleteButton from "./DeleteButton";

function TodoList({ todos, handleToggleCompleted, handleDeleteTodo }) {
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
          <DeleteButton id={todo.id} handleDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
