import React, { useEffect, useState } from 'react'

function Task() {
    const [text, settext] = useState("");
    const handlechange = (event) => {
        settext(event.target.value);
    }
    //if want trigger one when component mounted then use empty array or use state in an array
    useEffect(() => {
    console.log("Component Mounted");
    // we can use return when the component is unmounting
    return () => {
      console.log("Component Unmounted");
    };
    },[])
  return (
      <div>
          <input onChange={handlechange}></input>
          <h3>{text}</h3>
    </div>
  )
}

export default Task