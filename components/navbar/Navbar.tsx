import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";
// import React from 'react'

// const temporalAsync = () => {
//   return new Promise<void>((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 2000);
//   });
// };

const navItems = [
  { text: "About", path: "/about" },
  { text: "Pricing", path: "/pricing" },
  { text: "Contact", path: "/contact" },
];

export const Navbar = async () => {
  // await temporalAsync();
  // console.log('Navbar creado');

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map((item) => (
        <ActiveLink key={item.title} {...item} />
      ))}
    </nav>
  );
};
