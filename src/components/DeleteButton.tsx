type DeleteButtonProps = {
  id: number;
  handleDeleteTodo: (id: number) => void;
};

function DeleteButton({ id, handleDeleteTodo }: DeleteButtonProps) {
  return (
    <button
      className=" opacity-50 hover:opacity-100 transition-opacity "
      onClick={(event) => {
        event.stopPropagation();
        handleDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}

export default DeleteButton;
