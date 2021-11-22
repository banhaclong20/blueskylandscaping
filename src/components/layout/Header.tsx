/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import { useState } from 'react';
// import UnstyledLink from '@/components/links/UnstyledLink';

export default function Header() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const handleMenuClick = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  return (
    <nav className='bg-white shadow dark:bg-gray-800'>
      <div className='container px-4 py-4 mx-auto md:px-8 md:flex md:justify-between md:items-center max-w-screen-2xl'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <a
              className='inline-flex items-center text-black-800 text-xl md:text-lg lg:text-1xl xl:text-3xl font-bold gap-1.5 md:gap-1 lg:gap-2.5'
              aria-label='logo'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-home'
              >
                <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
                <polyline points='9 22 9 12 15 12 15 22'></polyline>
              </svg>
              Blue Sky <span className='text-green-500 '>Landscaping</span>
            </a>
          </Link>

          <div className='flex md:hidden'>
            <button
              type='button'
              onClick={handleMenuClick}
              className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
              aria-label='toggle menu'
            >
              {showHamburgerMenu ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
                  <path
                    fillRule='evenodd'
                    d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`${
            showHamburgerMenu ? 'flex' : 'hidden'
          } py-4 md:flex md:py-2`}
        >
          <nav
            className={`flex flex-col items-center flex-grow gap-4 items-left md:gap-6 lg:gap-12 md:flex-row ${
              showHamburgerMenu && 'hamburger-menu'
            }`}
          >
            <Link href='/'>Home</Link>
            <Link href='/services'>Services</Link>
            <Link href='/contact-us'>Contact Us</Link>
            <Link href='/get-a-quote'>
              <a className='flex px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-green-700 rounded-lg outline-none lg:flex hover:bg-green-600 focus-visible:ring ring-green-300 active:text-gray-700 md:text-base whitespace-nowrap'>
                Get a Quote{' '}
                <span className='ml-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    />
                  </svg>
                </span>
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}
