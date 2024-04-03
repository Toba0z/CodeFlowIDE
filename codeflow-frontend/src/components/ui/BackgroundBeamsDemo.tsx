"use client";
import React, { useState } from 'react';
import { BackgroundBeams } from "./background-beams";
import SignIn from "./SignIn";

export function BackgroundBeamsDemo() {
  // Example state and handler definitions
  const [loggedIn, setLoggedIn] = useState(false); // Assuming a boolean state for logged in status
  const user = { name: "User" }; // Assuming a static user object for demonstration

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder for login logic
    console.log("Login form submitted");
    setLoggedIn(true); // Update state to reflect login (example logic)
  };

  return (
    <div className="h-[80rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Welcome to CodeFlow IDE
        </h1>
        <p className="text-neutral-500 my-2 text-lg text-center">
          CodeFlow IDE is an interactive development environment tailored for JavaScript, designed to enhance understanding and debugging of code through a visual and intuitive approach.
        </p>
        <div className="signinform">
          <SignIn loggedIn={loggedIn} user={user} handleLogin={handleLogin} />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
