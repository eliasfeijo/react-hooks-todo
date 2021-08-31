import React from "react";
import CreateTodo from "./Todo/CreateTodo";
import ListTodo from "./Todo/ListTodo";

const App = (): JSX.Element => (
  <div className="p-4">
    <h1 className="text-4xl text-center">Todo Application</h1>
    <CreateTodo />
    <ListTodo />
  </div>
);

export default App;
