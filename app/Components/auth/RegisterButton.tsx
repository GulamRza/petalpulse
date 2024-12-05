"use client";

import { useRouter } from "next/navigation";

const RegisterButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/auth/register")}
      className="px-3 py-2 bg-gray-200 text-gray-800 text-sm font-semibold rounded-lg hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all"
    >
      Register
    </button>
  );
};

export default RegisterButton;
