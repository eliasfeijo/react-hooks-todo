import React, { useContext, useEffect } from "react";
import { ActionTypes, ITodo, TodosContext } from "../../contexts/TodosContext";

const list = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
];

const ListTodo = (): JSX.Element => {
  const { state, dispatch } = useContext(TodosContext);

  useEffect(() => {
    dispatch({ type: ActionTypes.SET_TODOS, todos: list });
  }, [dispatch]);

  const onChangeCompleted = (todo: ITodo) => {
    dispatch({ type: ActionTypes.TOGGLE_COMPLETED, todo });
  };

  const todos = state.todos.map((todo) => {
    return (
      <div
        key={todo.id}
        className="w-full md:w-3/4 xl:w-2/5 flex items-center justify-between space-x-4 bg-gray-200 py-2 px-2 rounded"
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChangeCompleted(todo)}
        />
        <p
          className={
            "text-center break-all" + (todo.completed ? " line-through" : "")
          }
        >
          {todo.title}
        </p>
        <div className="cursor-pointer text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    );
  });

  return (
    <div className="pt-4">
      <h3 className="text-xl text-center">Todos</h3>
      <div className="flex flex-col justify-center items-center pt-4 space-y-4">
        {todos}
      </div>
    </div>
  );
};

export default ListTodo;
