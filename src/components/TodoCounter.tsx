function TodoCounter({ todos }) {
  return (
    <p>
      <b> {todos.filter((todo) => todo.completed).length} </b> / {todos.length}{" "}
      todos completed
    </p>
  );
}

export default TodoCounter;
