import React from "react";
import { TodosProvider } from "../contexts/TodosContext";
import CreateTodo from "./Todo/CreateTodo";
import ListTodo from "./Todo/ListTodo";
import "./App.css";
import Footer from "./Footer";

const App = (): JSX.Element => (
  <div className="h-full flex flex-col">
    <h1 className="pt-4 px-4 text-4xl text-center">Todo Application</h1>
    <div className="p-4">
      <TodosProvider>
        <CreateTodo />
        <ListTodo />
      </TodosProvider>
    </div>
    <div className="flex-1" />
    <Footer />
  </div>
);

export default App;
