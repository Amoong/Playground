import React from "react";
import Counter from "./Counter";
import MyForm from "./MyForm";

function App() {
  const onSubmit = (form: { title: string; description: string }) => {
    console.log(form);
  };
  return (
    <div className="App">
      <MyForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
