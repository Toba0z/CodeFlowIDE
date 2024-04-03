import React from 'react';
// Define the types for the component's props
interface SignInProps {
  loggedIn: boolean;
  user: {
    name: string;
  };
  handleLogin: (event: React.FormEvent<HTMLFormElement>) => void;
}
const SignIn: React.FC<SignInProps> = ({ loggedIn, user, handleLogin }) => {
  return (
    <div>
      {!loggedIn ? (
        <form onSubmit={handleLogin} className="flex flex-col space-y-12 p-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="rounded-lg border border-neutral-1000 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-1000 text-white p-4"
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            required
            className="rounded-lg border border-neutral-100 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-1000 text-white p-4"
          />
          <button
            type="submit"
            className="block w-20 text-center rounded-lg bg-teal-500 py-2 text-white font-semibold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 relative z-10 mt-4"
          >
            Login
          </button>
        </form>
      ) : (
        <div>
          <p>Welcome back {user.name}</p>
        </div>
      )}
    </div>
  );
};

export default SignIn;
