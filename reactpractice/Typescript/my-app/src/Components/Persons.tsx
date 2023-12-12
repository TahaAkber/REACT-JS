import React from 'react'

//interface is basically a shape of an object
//here we define shape of our props with return type using typescript
interface Props{
    name: string;
    email: string;
    age: number;
    ismarried: boolean;
    friends: string[];
    //if we pass here country instead of string then we have only 1 of 3 options here
    country: Country;
}
//now we defining special return type of props like here country using enum
export enum Country{
    brazil = "Brazil",
    canada = "Canada",
    pakistan = "Pakistan"
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
          <h1>Country: {props.country }</h1>
      </div>
  )
}

export default Persons