type TodoCounterProps = {
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
};

function TodoCounter({
  totalNumberOfTodos,
  numberOfCompletedTodos,
}: TodoCounterProps) {
  return (
    <p>
      <b> {numberOfCompletedTodos} </b> / {totalNumberOfTodos} todos completed
    </p>
  );
}

export default TodoCounter;
