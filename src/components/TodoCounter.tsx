import { useTodosContext } from "../lib/hooks";

function TodoCounter() {
  const { numberOfCompletedTodos, totalNumberOfTodos } = useTodosContext();

  return (
    <p>
      <b> {numberOfCompletedTodos} </b> / {totalNumberOfTodos} todos completed
    </p>
  );
}

export default TodoCounter;
