function Button({ buttonType, children }) {
  return (
    <button
      className={`h-[45px] bg-green-600 hover:bg-green-700 w-full text-gray-900 hover:text-gray-100 font-medium rounded-[5px] cursor-pointer transition-colors ${
        buttonType === "secondary" ? "opacity-[85%]" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
