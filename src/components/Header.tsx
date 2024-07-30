import Logo from "./Logo";
import TodoCounter from "./TodoCounter";

function Header() {
  return (
    <header className=" flex items-center justify-between px-[28px] col-[1/3] row-[1/2] bg-[#fbf5eb] border-b border-black/[0.08] ">
      <Logo />
      <TodoCounter />
    </header>
  );
}

export default Header;
