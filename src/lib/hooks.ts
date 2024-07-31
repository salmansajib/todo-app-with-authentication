import { useContext } from "react";
import { TodoContext } from "../contexts/TodosContextProvider";

export function useTodosContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Forgot to add provider");
  }
  return context;
}
