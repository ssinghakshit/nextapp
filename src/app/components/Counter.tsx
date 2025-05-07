"use client";
import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
export const Counter = () => {
  const {isLoaded, userId, sessionId, getToken} = useAuth();
  console.log("counter log");
  const [count, setCount] = useState(0);
  if(!sessionId || !userId || !isLoaded){
    return null;
  }
  return (<button onClick={()=>setCount(count+1)}>Clicked {count} times</button>);
}