import React from "react";
import CreateTodo from "./Todo/CreateTodo";

const App = (): JSX.Element => (
  <div className="p-4">
    <h1 className="text-4xl text-center">Todo Application</h1>
    <CreateTodo />
  </div>
);

export default App;
