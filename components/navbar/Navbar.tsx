import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
// import React from 'react'

// const temporalAsync = () => {
//   return new Promise<void>((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 2000);
//   });
// };

const navItems = [
  { title: 'About', href: '/about' },
  { title: 'Pricing', href: '/pricing' },
  { title: 'Contact', href: '/contact' },
];

export const Navbar = async() => {

  // await temporalAsync();
  // console.log('Navbar creado');
  
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href={'/'} className='flex items-center'>
      <HomeIcon className='mr-2'/>
        <span>Home</span>
      </Link>
        <div className='flex flex-1'></div>
        {
        navItems.map((item) => (
          <Link key={item.title} href={item.href} className='mr-2'>{item.title}</Link>
        ))
        }
    </nav>
  )
}
