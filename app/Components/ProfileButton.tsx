"use client";

import { useState } from "react";
import Image from "next/image";
import SignOutButton from "./auth/SignOutButton";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";



const ProfileButton = ({ user }: { user: any }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="relative">
      {/* Profile Button */}
      <button
        onClick={toggleMenu}
        className="w-10 h-10 rounded-full overflow-hidden "
      >
        {user?.image ? 
        <Image
          src={'/thumbnail-image.png'}
          alt="User Profile"
          width={40}
          height={40}
          className="object-cover w-full h-full"
        /> :
          <CgProfile className="w-full h-full scale-75 text-gray-800 dark:text-gray-300 hover:text-green-600 transition block" />
        }
        
      </button>

      {/* Close Dropdown When Clicking Outside */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-10"
          onClick={closeMenu}
        ></div>
      )}

      {/* Dropdown Menu */}
      {menuOpen && (
        <div
          className="z-20 absolute right-1/3 lg:right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
          onClick={closeMenu} // Close menu when any option is clicked
        >
          <ul className="p-4 space-y-2">
            <li>
              <Link
                href={"/profile/" + user.id}
                className="block text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 p-2 rounded"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="block text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 p-2 rounded"
              >
                Settings
              </Link>
            </li>
            <li>
              <SignOutButton />
            </li>
          </ul>
        </div>
      )}

      
    </div>
  );
};

export default ProfileButton;
