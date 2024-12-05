"use client";

import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <button
      onClick={() => signIn()}
      className="px-3 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg  hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all"
    >
      Sign In
    </button>
  );
};

export default SignInButton;
