import React from 'react';
import Link from 'next/link';
// import '../../styles/mobile-styles.css';
import '../styles/fonts.css'


function Navigation() {
  return (
    <nav className='py-4 text-center'>
      <div className='container mx-auto'>
      <ul className='flex justify-center space-x-4 text-2xl text-black font-bebas-neue'>
        <li>
          <Link href="/" className="bebasFont">Home</Link>
        </li>
        <li>
          <Link href="/niceTings" className="bebasFont">Nice Tingz</Link>
        </li>
        <li>
          <Link href="/assets" className="bebasFont">Assets</Link>
        </li>
        <li>
          <Link href="/share" className="bebasFont">Share</Link>
        </li>
        <li>
          <Link href="/khi" className="bebasFont">KHI</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
      </div>
    </nav>
  );
}

export default Navigation;