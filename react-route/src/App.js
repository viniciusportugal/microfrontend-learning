import React, { useState } from "react";
import Parcel from "single-spa-react/parcel";
import { v4 as uuid } from "uuid";
import { emitEvent } from "@viniciusport/utils";

const App = ({ name }) => {
  const [task, updateTask] = useState("");

  const handleChange = (event) => {
    updateTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emitEvent("@viniciusport/react-route/todo/add-task", {
      id: uuid(),
      describe: task,
    });
    updateTask("");
  };

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task} />
        <button>Add</button>
      </form>
      <Parcel config={() => System.import("@viniciusport/react-parcel")} />
    </>
  );
};

export default App;
