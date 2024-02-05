import Link from "next/link";
import React from "react";
import { FaTicket } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="flex justify-between  bg-slate-900 p-4">
      <div className="flex space-x-4 items-center">
        <Link href="/">
          <FaHome className="icon" />
        </Link>
        <Link href="/ticketpage/new">
          <FaTicket className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-grey-300">hrittik@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
