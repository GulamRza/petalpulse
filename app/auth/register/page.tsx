"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";


const RegisterPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your registration logic here


    const response = await fetch('/api/user', {
      method: "POST",
      body: JSON.stringify({
        name, email, password
      })
    });

    if (response.ok){
      const user = (await response.json()).user;

      if (!user){
        alert('Unable to register. Please Retry')
        setName('')
        setEmail('')
        setPassword('')
      }else{
        router.push('/auth/sign-in');
      }
    }else{
      alert('Unable to register. Please Retry')
      setName('')
      setEmail('')
      setPassword('')  
    }

  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-100 to-green-300 dark:from-gray-900 dark:to-gray-800">
      <div className="flex flex-col md:flex-row shadow-lg rounded-xl bg-white dark:bg-gray-900 overflow-hidden w-11/12 max-w-5xl">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 bg-gradient-to-br from-green-500 to-green-700 text-white dark:from-green-700 dark:to-green-900 relative">
          <Image 
            src={'/green-leaves-bg.jpg'}
            width={400}
            height={400}
            alt="sign-in-background"
            className="absolute w-full h-full object-cover opacity-50"
          />
          <h1 className="z-10 text-4xl font-bold mb-4">Welcome Aboard!</h1>
          <p className="z-10 text-lg text-center">
            Become a part of our Plant Lovers Community. Grow with us!
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-6">
            Create your account
          </h2>
          <form
            className="flex flex-col space-y-4"
            onSubmit={handleSubmit}
          >
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
              />
            </div>

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

            {/* Confirm Password Input */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="w-full mt-1 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
              />
            </div>

            {/* Buttons */}
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition duration-200 dark:bg-green-700 dark:hover:bg-green-800"
            >
              Register
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <a
                href="/auth/sign-in"
                className="text-green-600 hover:underline dark:text-green-400"
              >
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
