import Link from 'next/link';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-center text-white layout'>
            <RiAlarmWarningFill
              size={60}
              className='text-yellow-300 animate-flicker drop-shadow-glow'
            />
            <h1 className='mt-8'>Page Not Found</h1>

            <Link href='/'>
              <a className='inline-block px-8 py-3 mt-8 text-sm font-semibold text-center text-white transition duration-100 bg-green-700 rounded-lg outline-none hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 md:text-base'>
                Back to Home
              </a>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
