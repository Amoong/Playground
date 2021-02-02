import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodosContextProvier } from "./contexts/TodosContext";

function App() {
  return (
    <TodosContextProvier>
      <TodoForm />
      <TodoList />
    </TodosContextProvier>
  );
}

export default App;
