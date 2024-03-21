import React from "react";

function Task(props) {
  return (
    <div style={{ backgroundColor: props.completed ? "green" : "white" }}>
      <h3>{props.taskname}</h3>
      <label>{props.id}</label>
      <button type="submit" onClick={() => props.completetask(props.id)}>
        Completed
      </button>
      <button onClick={() => props.deletetask(props.id)}>X</button>
    </div>
  );
}

export default Task;
