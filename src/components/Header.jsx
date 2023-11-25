import React from 'react';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className=" bg-slate-300 shadow-md">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1>
            <span className=" text-yellow-300 flex-wrap">Land</span>
            <span className=" text-green-300">National</span>
            <span className=" text-blue-700">Authority</span>
          </h1>
        </Link>
        <form className=" flex items-center bg-slate-200 p-3 rounded-lg">
          <input
            type="text"
            placeholder="Search Here ..."
            className="bg-transparent lg:w-72 w-24 focus:outline-none"
          />
          <CiSearch className=" text-3xl" />
        </form>
        <ul className=" flex gap-6 flex-col lg:flex-row">
          <Link to="/">
            <li className="cursor-pointer  text-slate-800 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/About">
            <li className=" cursor-pointer  text-slate-800 hover:underline">
              About
            </li>
          </Link>
         
          <Link to="/sign-in">
            <li className="cursor-pointer  text-slate-800 hover:underline">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
