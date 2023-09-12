import React from 'react';
import Link from 'next/link';


function Navigation() {
  return (
    <nav className='flex justify-center items-center'>
      <ul className='flex justify-center items-center'>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/niceTings">Nice Tingz</Link>
        </li>
        <li>
          <Link href="/assets">Assets</Link>
        </li>
        <li>
          <Link href="/talks">Talks</Link>
        </li>
        <li>
          <Link href="/khi">KHI</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;