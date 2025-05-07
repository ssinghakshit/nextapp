"use client";
import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
export const Counter = () => {
  // const {isLoaded, userId, sessionId, getToken} = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();
  console.log("counter log");
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isLoaded || !isSignedIn) {
      console.log("User not signed in");
    }
  },[isLoaded, isSignedIn]);
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
};
