function DeleteButton({ id, setTodos }) {
  return (
    <button
      className=" opacity-50 hover:opacity-100 transition-opacity "
      onClick={(event) => {
        event.stopPropagation();
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      }}
    >
      ❌
    </button>
  );
}

export default DeleteButton;
