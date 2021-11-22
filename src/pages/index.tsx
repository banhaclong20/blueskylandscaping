/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import heroBg from '../assets/hero-image-blue-sky-landscaping1.jpeg';
import ourMissionHeroImage from '../assets/house-with-landscaping.jpeg';
import landscapingHardscapeConstruction from '../assets/landscaping_hardscape_construction_WA_98059.jpeg';
import yardCleanup from '../assets/Lawn-Care-Lawn-Maintenance.jpeg';
import yardMaintenance from '../assets/yard_gardener-maintenance_Renton_WA_98059.jpeg';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <div className='px-4 mx-auto max-w-screen-2xl md:px-8'>
          <section className='relative flex items-center justify-center flex-1 flex-shrink-0 py-16 overflow-hidden bg-gray-100 rounded-lg shadow-lg min-h-96 md:py-20 xl:py-48'>
            <Image
              alt='Best Landscaping in Renton, WA 98059'
              src={heroBg}
              placeholder='blur'
              layout='fill'
              className='absolute inset-0 object-cover object-center w-full h-full'
            />
            <div className='relative flex flex-col items-center p-4 lg:max-w-2xl'>
              <h1 className='mb-8 text-4xl font-bold text-center text-white sm:text-5xl md:text-6xl md:mb-12 custom-text-shadow'>
                Quality Landscaping, Construction. Beautiful Results.
              </h1>

              <div className='w-full flex flex-col sm:flex-row sm:justify-center gap-2.5'>
                <Link href='/get-a-quote'>
                  <a className='inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-green-700 rounded-lg outline-none hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 md:text-base'>
                    Get A Quote
                  </a>
                </Link>

                <Link href='/contact-us'>
                  <a className='inline-block px-8 py-3 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-gray-200 rounded-lg outline-none hover:bg-gray-300 focus-visible:ring ring-green-300 active:text-gray-700 md:text-base'>
                    Contact Us
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </div>

        <div className='py-6 bg-white sm:py-8 lg:py-12'>
          <div className='px-4 mx-auto max-w-screen-2xl md:px-8'>
            <h2 className='mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-8 xl:mb-12'>
              Services
            </h2>

            <div className='grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:gap-8 md:mb-8'>
              <a
                href='#'
                className='relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80'
              >
                <Image
                  src={yardCleanup}
                  alt='Best Yard Clean Up in Renton, WA 98059'
                  placeholder='blur'
                  layout='fill'
                  className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 transform group-hover:scale-110'
                />
                <div className='absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent'></div>
                <span className='relative inline-block mb-3 ml-4 text-sm text-white md:text-lg md:ml-5'>
                  Yard Clean Up
                </span>
              </a>

              <a
                href='#'
                className='relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80'
              >
                <Image
                  src={landscapingHardscapeConstruction}
                  alt='Best Landscaping Hardscape Construction in Renton, WA 98059'
                  placeholder='blur'
                  layout='fill'
                  className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 transform group-hover:scale-110'
                />
                <div className='absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent'></div>
                <span className='relative inline-block mb-3 ml-4 text-sm text-white md:text-lg md:ml-5'>
                  Landscaping Hardscape Construction
                </span>
              </a>

              <a
                href='#'
                className='relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80'
              >
                <Image
                  src={yardMaintenance}
                  alt='Best Yard Maintenance in Renton, WA 98059'
                  placeholder='blur'
                  layout='fill'
                  className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 transform group-hover:scale-110'
                />
                <div className='absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent'></div>
                <span className='relative inline-block mb-3 ml-4 text-sm text-white md:text-lg md:ml-5'>
                  Maintenance
                </span>
              </a>
            </div>

            <div className='flex items-start justify-between gap-8 sm:items-center'>
              <p className='max-w-screen-sm text-sm text-gray-500 lg:text-base'>
                Blue Sky <span className='text-green-600'>Landscaping</span> is
                the industry leader in Renton, WA landscape design and
                construction. We pride ourselves on providing exceptional,
                professional landscape design services to our customers.
              </p>

              <Link href='/services'>
                <a className='inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-green-700 rounded-lg outline-none hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 md:text-base'>
                  View More
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className='py-6 bg-white sm:py-8 lg:py-12'>
          <div className='max-w-screen-xl px-4 mx-auto md:px-8'>
            <div className='mb-10 md:mb-16'>
              <h2 className='mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-6'>
                Blue Sky <span className='text-green-600'>Landscaping</span> by
                the numbers
              </h2>

              <p className='max-w-screen-md mx-auto text-center text-gray-500 md:text-lg'>
                # 1 Landscaping | Construction services in Renton, WA 98059.
              </p>
            </div>

            <div className='grid grid-cols-1 gap-8 md:grid-cols-3 md:divide-x md:gap-0'>
              <div className='flex flex-col items-center md:p-4'>
                <div className='text-xl font-bold text-green-500 sm:text-2xl md:text-3xl'>
                  20+
                </div>
                <div className='text-sm font-semibold sm:text-base'>
                  Years in Business
                </div>
              </div>

              <div className='flex flex-col items-center md:p-4'>
                <div className='text-xl font-bold text-green-500 sm:text-2xl md:text-3xl'>
                  10,000+
                </div>
                <div className='text-sm font-semibold sm:text-base'>
                  Satisfied Customers
                </div>
              </div>
              <div className='flex flex-col items-center md:p-4'>
                <div className='text-xl font-bold text-green-500 sm:text-2xl md:text-3xl'>
                  10+
                </div>
                <div className='text-sm font-semibold sm:text-base'>
                  Team Members
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='py-6 bg-white sm:py-8 lg:py-12'>
          <div className='px-4 mx-auto max-w-screen-2xl md:px-8'>
            <div className='flex flex-col overflow-hidden bg-gray-100 rounded-lg md:h-80 sm:flex-row'>
              <div className='order-first w-full h-48 bg-gray-300 sm:w-1/2 lg:w-2/5 sm:h-auto sm:order-none'>
                <Image
                  src={ourMissionHeroImage}
                  alt='Best Yard clean up in Renton, WA 98059'
                  placeholder='blur'
                  className='absolute inset-0 object-cover object-center w-full h-full'
                />
              </div>

              <div className='flex flex-col w-full p-4 sm:w-1/2 lg:w-3/5 sm:p-8'>
                <h2 className='mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl'>
                  Our Mission
                </h2>

                <p className='mt-5 mb-8 text-gray-600'>
                  Blue Sky Landscaping Renton was established in 2003 by
                  Le&apos;s family after over 20 years of prior experience in
                  landscaping and gardening. Our team is skilled in a variety of
                  trades such as hardscape, softscape, planting, lighting,
                  irrigation, flagstone, pavers, and much more.
                </p>

                <div className='mt-auto'>
                  <Link href='/get-a-quote'>
                    <a className='inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-green-700 rounded-lg outline-none hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 md:text-base'>
                      Get a free Quote
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
