/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import * as React from 'react';

const Footer = () => (
  <div className='bg-gray-900'>
    <footer className='px-4 mx-auto max-w-screen-2xl md:px-8'>
      <div className='grid grid-cols-2 gap-12 pt-10 mb-16 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12'>
        <div className='col-span-full lg:col-span-2'>
          <div className='mb-4 lg:-mt-2'>
            <a
              href='#'
              className='inline-flex items-center text-white text-2xl md:text-3xl font-bold gap-2.5'
              aria-label='logo'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#FFF'
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
          </div>

          <p className='mb-6 text-gray-400 sm:pr-8'>
            Quality, performance, customer satisfaction and the constant desire
            to strive for perfection is what makes Blue Sky Landscaping the most
            respected landscape company of its kind in Renton, WA 98059.
          </p>

          <div className='flex gap-4'>
            <a
              href='https://www.google.com/maps/place/Blue+Sky+Landscaping+Renton/@47.4915742,-122.1528253,15.19z/data=!4m5!3m4!1s0x0:0x1654da8ab9d9e73d!8m2!3d47.4903768!4d-122.1531286?hl=en-US'
              target='_blank'
              className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
              rel='noreferrer'
            >
              <svg
                className='w-5 h-5'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Google My Business</title>
                <path d='M3.273 1.636c-.736 0-1.363.492-1.568 1.16L0 9.272c0 1.664 1.336 3 3 3a3 3 0 003-3c0 1.664 1.336 3 3 3a3 3 0 003-3c0 1.65 1.35 3 3 3 1.664 0 3-1.336 3-3 0 1.664 1.336 3 3 3s3-1.336 3-3l-1.705-6.476a1.646 1.646 0 00-1.568-1.16zm8.729 9.326c-.604 1.063-1.703 1.81-3.002 1.81-1.304 0-2.398-.747-3-1.806-.604 1.06-1.702 1.806-3 1.806-.484 0-.944-.1-1.363-.277v8.232c0 .9.736 1.637 1.636 1.637h17.454c.9 0 1.636-.737 1.636-1.637v-8.232a3.48 3.48 0 01-1.363.277c-1.304 0-2.398-.746-3-1.804-.602 1.058-1.696 1.804-3 1.804-1.299 0-2.394-.75-2.998-1.81zm5.725 3.765c.808 0 1.488.298 2.007.782l-.859.859a1.623 1.623 0 00-1.148-.447c-.98 0-1.772.827-1.772 1.806 0 .98.792 1.807 1.772 1.807.882 0 1.485-.501 1.615-1.191h-1.615v-1.16h2.826c.035.196.054.4.054.613 0 1.714-1.147 2.931-2.88 2.931a3 3 0 010-6z' />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <div className='mb-4 font-bold tracking-widest text-gray-100 uppercase'>
            Address
          </div>

          <section className='text-gray-400'>
            <p>4909 NE 5th St</p>
            <p>Renton, Washington 98059</p>
          </section>
        </div>

        <div className='col-span-full lg:col-span-2'>
          <div className='mb-4 font-bold tracking-widest text-gray-100 uppercase'>
            Contact Info
          </div>

          <section className='text-gray-400'>
            <p>Phone: (425) 306-1212 (Andy)</p>
            <p>Email: blskylandscapes@gmail.com</p>
          </section>
        </div>

        <div>
          <div className='mb-4 font-bold tracking-widest text-gray-100 uppercase'>
            Links
          </div>

          <nav className='flex flex-col gap-4'>
            <Link href='/'>
              <a className='text-gray-400 transition duration-100 hover:text-green-500 active:text-green-600'>
                Home
              </a>
            </Link>
            <Link href='/services'>
              <a className='text-gray-400 transition duration-100 hover:text-green-500 active:text-green-600'>
                Services
              </a>
            </Link>
            <Link href='/contact-us'>
              <a className='text-gray-400 transition duration-100 hover:text-green-500 active:text-green-600'>
                Contact Us
              </a>
            </Link>
          </nav>
        </div>
      </div>

      <div className='py-8 text-sm text-center text-gray-400 border-t border-gray-800'>
        © {new Date().getFullYear()} - Powered by{' '}
        <a href='http://www.tomtrandev.com/'>Tom Tran</a>. All rights reserved.
      </div>
    </footer>
  </div>
);

export default Footer;
