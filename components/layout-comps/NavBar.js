import { ReactDOM } from "react";
import React from "react";
import Link from "next/link";

import { RiAccountBoxFill } from "react-icons/ri";

export default function NavBar() {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-4 md:flex-row justify-end items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <nav className="md:flex space-x-10">
              <Link
                href={"/"}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href={"/"}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Pricing
              </Link>
              <Link
                href="/"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Docs
              </Link>
            </nav>
            <div className="flex items-center justify-end md:flex-1 lg:w-0">
              <Link
                href="/"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </Link>
              <RiAccountBoxFill className="hidden inline ml-9 h-10 w-10 text-indigo-600" />
            </div>
          </div>
        </div>
      </div>
      <nav></nav>
    </>
  );
}
