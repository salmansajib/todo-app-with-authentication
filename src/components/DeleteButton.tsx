type DeleteButtonProps = {
  id: number;
  onDeleteTodo: (id: number) => void;
};

function DeleteButton({ id, onDeleteTodo }: DeleteButtonProps) {
  return (
    <button
      className=" opacity-50 hover:opacity-100 transition-opacity "
      onClick={(event) => {
        event.stopPropagation();
        onDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}

export default DeleteButton;
