import React from 'react'
import { useSelector } from 'react-redux';
export default function Home() {
     const username = useSelector((state:any) => 
        state.user.value.username
    );
  return (
      <h1>This is Home. {username}</h1>
  )
}
