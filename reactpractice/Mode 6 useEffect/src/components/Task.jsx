import React, { useEffect, useState } from 'react'

function Task() {
    const [text, settext] = useState("");
    const handlechange = (event) => {
        settext(event.target.value);
    }
    useEffect(() => {
        console.log("checking");
    })
  return (
      <div>
          <input onChange={handlechange}></input>
          <h3>{text}</h3>
    </div>
  )
}

export default Task