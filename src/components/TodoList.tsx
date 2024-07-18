import DeleteButton from "./DeleteButton";

function TodoList({ todos, setTodos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className=" flex items-center justify-between px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%] "
          onClick={() => {
            setTodos(
              todos.map((t) => {
                if (t.id === todo.id) {
                  return { ...t, completed: !t.completed };
                }

                return t;
              })
            );
          }}
        >
          <span
            className={`${
              todo.completed === true ? "line-through text-[#ccc]" : ""
            }`}
          >
            {todo.text}
          </span>
          <DeleteButton id={todo.id} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
