"use client";

import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import Image from "next/image";

const SignInPage = () => {

  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();

    signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/'
    })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-100 to-green-300 dark:from-gray-900 dark:to-gray-800">
      <div className="flex flex-col md:flex-row shadow-lg rounded-xl bg-white dark:bg-gray-900 overflow-hidden w-11/12 max-w-5xl">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 bg-gradient-to-br from-green-500 to-green-700 text-white dark:from-green-700 dark:to-green-900 relative">
          <Image 
            src={'/leaves-bg.jpg'}
            width={400}
            height={400}
            alt="sign-in-background"
            className="absolute w-full h-full object-cover opacity-50"
          />
          <h1 className="z-10 text-4xl font-bold mb-4">Hello, Welcome!</h1>
          <p className="z-10 text-lg text-center">
            Join our Plant Lovers Community and grow your green thumb with us!
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-6">
            Sign in to your account
          </h2>
          <form
            className="flex flex-col space-y-4"
            onSubmit={handleSubmit}
          >
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full mt-1 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full mt-1 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
              />
            </div>

            {/* Buttons */}
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition duration-200 dark:bg-green-700 dark:hover:bg-green-800"
            >
              Sign In
            </button>
            {/* <button
              type="button"
              className="w-full py-3 bg-gray-200 text-gray-700 font-semibold rounded-md shadow-md hover:bg-gray-300 transition duration-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={() => signIn()}
            >
              Sign In with Google
            </button> */}
          </form>

          {/* Links */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <a
                href="/auth/register"
                className="text-green-600 hover:underline dark:text-green-400"
              >
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
