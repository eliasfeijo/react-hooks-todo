import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TodosProvider } from "../contexts/TodosContext";
import CreateTodo from "./Todo/CreateTodo";
import ListTodo from "./Todo/ListTodo";
import "./App.css";
import Footer from "./Footer";

const App = (): JSX.Element => (
  <Router>
    <div className="h-full flex flex-col">
      <h1 className="pt-4 px-4 text-4xl text-center">Todo Application</h1>
      <nav>
        <ul className="flex justify-center space-x-2 pt-5">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="pb-4 pt-4">
        <Switch>
          <Route path="/about">
            <div>
              <h3 className="text-xl text-center">About</h3>
            </div>
          </Route>
          <Route path="/">
            <TodosProvider>
              <CreateTodo />
              <ListTodo />
            </TodosProvider>
          </Route>
        </Switch>
      </div>
      <div className="flex-1" />
      <Footer />
    </div>
  </Router>
);

export default App;
