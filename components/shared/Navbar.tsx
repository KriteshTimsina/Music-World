import Link from "next/link";
import React from "react";
import { BiSearch } from "react-icons/bi";
const Navbar = () => (
  <div className="flex items-center justify-around mb-10 mt-3">
    <Link href="/" className="flex items-center">
      <img
        src="/icon-a.png"
        className="animate-pulse"
        alt="Music World"
        width={50}
      />
      Music World
    </Link>
    <Link href="/search">
      <BiSearch size={30} />
    </Link>
  </div>
);

export default Navbar;
