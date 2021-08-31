// store.js
import React, { createContext, useReducer } from "react";

interface ITodo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

type State = {
  todos: ITodo[];
};

enum ActionTypes {
  SET_TODOS = "SET_TODOS",
}

type Action = { type: ActionTypes.SET_TODOS; todos: ITodo[] };

const initialState = { todos: [] };

const TodosContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

const { Provider } = TodosContext;

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_TODOS:
      return { todos: action.todos };
    default:
      throw new Error(`TodosContext: Action ${action.type} not found`);
  }
};

const TodosProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { TodosContext, TodosProvider, ActionTypes };
export type { ITodo };
