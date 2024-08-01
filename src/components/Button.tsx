type ButtonProps = {
  onClick: () => Promise<void>;
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
};

function Button({ onClick, buttonType, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`h-[45px] bg-green-200 hover:bg-green-300 w-full text-gray-900 font-medium rounded-[5px] cursor-pointer transition-colors duration-200 ease-in-out ${
        buttonType === "secondary" ? "opacity-[85%]" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
