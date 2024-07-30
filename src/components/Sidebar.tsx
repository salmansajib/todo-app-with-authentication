import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

function Sidebar({ todos, handleAddTodo }) {
  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px] ">
      <AddTodoForm todos={todos} handleAddTodo={handleAddTodo} />

      <div className=" mt-auto space-y-2 ">
        <Button buttonType="secondary">Log in</Button>
        <Button buttonType="secondary">Register</Button>
      </div>
    </section>
  );
}

export default Sidebar;
