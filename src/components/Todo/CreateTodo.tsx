import React, { useState } from "react";

const CreateTodo = (): JSX.Element => {
  const [text, setText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
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
