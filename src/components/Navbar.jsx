import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-bgPrimary py-5 mb-2 border-b-2 border-white mx-auto">
      <div className="container flex justify-between px-10 md:px-5 mx-auto">
        <Link href="/" className="my-auto">
          <h1 className="text-2xl font-bold">ResourceCyan</h1>
        </Link>
        <ul className="flex gap-x-4">
          <li className="px-3 py-2 hover:bg-primary hover:text-bgPrimary font-bold rounded-lg transition-all">
            <Link href="/tasks/new">Log In</Link>
          </li>
          <li className="px-3 py-2 hover:bg-primary hover:text-bgPrimary font-bold rounded-lg transition-all">
            <Link href="/tasks/new">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
