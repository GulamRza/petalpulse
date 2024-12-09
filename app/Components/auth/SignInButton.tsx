import Link from "next/link";
import { usePathname } from "next/navigation";

const SignInButton = () => {

  const path = usePathname();

  return (
    <button
      className="px-3 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg  hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all"
    >
      <Link href={`/auth/sign-in?redirect=${path}`}>Sign In</Link>
    </button>
  );
};

export default SignInButton;
