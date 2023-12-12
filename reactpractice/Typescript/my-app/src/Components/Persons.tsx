import React from 'react'

//interface is basically a shape of an object
//here we define shape of our props with return type using typescript
interface Props{
    name: string;
    email: string;
    age: number;
    ismarried: boolean;
    friends: string[];
}
function Persons(props:Props) {
  return (
      <div>
          <h1>Name:{props.name}</h1>
         <h1>Age:{props.age}</h1> 
         <h1> This person: {props.ismarried ? "is" : "is not"} Married</h1>
         {props.friends.map((i: string) => 
              (<h1>{i}</h1>)
          )}
      </div>
  )
}

export default Persons