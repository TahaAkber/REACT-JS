import React from 'react'

function Task(props) {
  return (
            <div>
              <h3>{props.taskname}</h3>
              <button onClick={() => props.deletetask(props.id)}>X</button>
            </div>
          );
}

export default Task