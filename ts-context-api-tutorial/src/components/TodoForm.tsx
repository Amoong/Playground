import React, { useState } from "react";

function TodoForm() {
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValue("");
  };

  return (
    <form onSubmit={onSubmit} action="">
      <input
        value={value}
        placeholder="할 일 입력!"
        onChange={e => setValue(e.target.value)}
      />
      <button>등록</button>
    </form>
  );
}

export default TodoForm;
