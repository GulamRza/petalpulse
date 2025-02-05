import Image from "next/image";
import { prisma } from "@/app/utils/prisma";
import { redirect } from "next/navigation";

const RegisterPage = async ({
  searchParams,
}: {
  searchParams: Promise<any>;
}) => {
  const { error } = await searchParams;
  const users = await prisma.user.findMany({});
  console.log(users);
  // revalidatePath("auth/register?error=Failed,%20Try%20Again");

  const handleSubmit = async (formData: FormData) => {
    "use server";
    // Add your registration logic here

    // return;

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const repassword = formData.get("repassword") as string;

    if (name == "" || email == "" || password == "" || password != repassword)
      redirect("/auth/register?error=Invalid%20Inputs");

    const user = await prisma.user.create({
      data: { name, email, password },
    });

    if (user) {
      redirect("/auth/sign-in");
    } else {
      redirect("/auth/register?error=Failed,%20Try%20Again");
    }
  };

  return (
    <div className="flex min-h-dvh lg:items-center justify-center bg-gradient-to-br from-green-100 to-green-300 dark:from-gray-900 dark:to-gray-800">
      <div className="flex flex-col md:flex-row shadow-lg lg:rounded-xl bg-white dark:bg-gray-900 overflow-hidden lg:w-11/12 max-w-5xl">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 bg-gradient-to-br from-green-500 to-green-700 text-white dark:from-green-700 dark:to-green-900 relative">
          <Image
            src={"/green-leaves-bg.jpg"}
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
        <div className="flex-1 p-8 text-gray-900">
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-6">
            Create your account
          </h2>
          <form className="flex flex-col space-y-4" action={handleSubmit}>
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
                name="name"
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
                name="email"
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
                name="password"
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
                name="repassword"
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

          {/* error if any */}
          <div className="mt-6 text-center">
            <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
          </div>

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
