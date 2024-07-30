import { useContext } from "react";
import { TodoContext } from "../contexts/TodosContextProvider";

function TodoCounter() {
  const { numberOfCompletedTodos, totalNumberOfTodos } =
    useContext(TodoContext);

  return (
    <p>
      <b> {numberOfCompletedTodos} </b> / {totalNumberOfTodos} todos completed
    </p>
  );
}

export default TodoCounter;
