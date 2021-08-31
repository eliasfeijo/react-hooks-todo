import React from "react";
import { TodosProvider } from "../contexts/TodosContext";
import CreateTodo from "./Todo/CreateTodo";
import ListTodo from "./Todo/ListTodo";

const App = (): JSX.Element => (
  <div className="p-4">
    <h1 className="text-4xl text-center">Todo Application</h1>
    <TodosProvider>
      <CreateTodo />
      <ListTodo />
    </TodosProvider>
  </div>
);

export default App;
