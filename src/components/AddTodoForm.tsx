function AddTodoForm() {
  return (
    <form>
      <h2>Add a todo</h2>
      <input
        type="text"
        className=" h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[12px] "
      />
      <button
        type="submit"
        className=" h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-gray-50 rounded-[5px] cursor-pointer "
      >
        Add to list
      </button>
    </form>
  );
}

export default AddTodoForm;
