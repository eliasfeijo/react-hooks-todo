import React, { useContext, useState } from "react";
import { ActionTypes, ITodo, TodosContext } from "../../contexts/TodosContext";

const CreateTodo = (): JSX.Element => {
  const { dispatch } = useContext(TodosContext);

  const [text, setText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && text && text.trim() !== "") {
      const todo: ITodo = {
        id: new Date().getTime(),
        userId: 1,
        title: text,
        completed: false,
      };
      dispatch({ type: ActionTypes.ADD, todo });
      setText("");
    }
  };

  return (
    <div className="pt-4">
      <h3 className="text-xl text-center">New Todo</h3>
      <div className="flex justify-center pt-4">
        <input
          type="text"
          value={text}
          className="rounded-full"
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  );
};

export default CreateTodo;
