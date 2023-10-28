import React from 'react';
import Link from 'next/link';
import '../styles/mobile-styles.css';
import '../styles/fonts.css';
// import assets from '../src/app/page'


function Navigation() {
  return (
    <nav className='py-4 text-center'>
      <div className='container mx-auto'>
      <ul className='list-none flex justify-center space-x-4 text-2xl text-black'>
        <li>
          <Link href="/" className="bebasFont no-underline visited:text-purple-600">Home</Link>
        </li>
        <li>
          <Link href="/niceTings" className="bebasFont no-underline">Nice Tingz</Link>
        </li>
        <li>
          <Link href="/assets" className="bebasFont no-underline">Assets</Link>
        </li>
        <li>
          <Link href="/khi" className="bebasFont no-underline">KHI</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
      </div>
    </nav>
  );
}

export default Navigation;