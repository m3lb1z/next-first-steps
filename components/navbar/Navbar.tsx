import Link from 'next/link';
// import React from 'react'

// const temporalAsync = () => {
//   return new Promise<void>((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 2000);
//   });
// };

export const Navbar = async() => {

  // await temporalAsync();
  // console.log('Navbar creado');
  
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        <span>Home</span>
        <div className='flex flex-1'></div>
        <Link className='mr-2' href='/about'>About</Link>
        <Link className='mr-2' href='/pricing'>Pricing</Link>
        <Link className='mr-2' href='/contact'>Contact</Link>
    </nav>
  )
}
