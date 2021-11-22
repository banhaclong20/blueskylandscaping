/* eslint-disable no-console */
import emailjs from 'emailjs-com';
import Link from 'next/link';
import { useRef, useState } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const ContactUs = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_fnx9s0j',
        'template_y90wqem',
        formRef.current,
        'user_mc1LdMMUKJzwWxsl6gqas'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <section className='relative text-gray-600 body-font'>
        <div className='py-6 mb-12 bg-green-500 contact-hero-banner'>
          <div className='px-4 mx-auto max-w-screen-2xl md:px-8'>
            <div className='flex flex-col items-center justify-between gap-2 md:flex-row'></div>
          </div>
        </div>

        <div>
          <h2 className='mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-6'>
            Contact Us
          </h2>

          <p className='max-w-screen-md px-6 mx-auto text-center text-gray-500 md:text-lg'>
            Our team includes talented designers, masons, horticulturalists and
            laborers that can execute just about anything that needs to be built
            in the landscape. Contact us now to get started.
          </p>
        </div>
        <div className='container flex flex-wrap px-5 py-12 mx-auto sm:flex-nowrap'>
          <div className='relative flex items-end justify-start p-10 overflow-hidden bg-gray-300 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10'>
            <iframe
              width='100%'
              height='100%'
              className='absolute inset-0'
              frameBorder='0'
              title='map'
              scrolling='no'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86256.41634524125!2d-122.18144279189355!3d47.49939962687042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490662246c4d82b%3A0x193c3cf558507015!2sRenton%2C%20WA%2098059!5e0!3m2!1sen!2sus!4v1636252532315!5m2!1sen!2sus'
            ></iframe>

            <div className='relative flex flex-wrap py-6 bg-white rounded shadow-md'>
              <div className='px-6 lg:w-1/2'>
                <h2 className='flex items-center text-xs font-semibold tracking-widest text-gray-900 title-font'>
                  <span>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 21C10.7369 19.9226 9.56619 18.7415 8.5 17.469C6.9 15.558 5 12.712 5 9.99999C4.99858 7.16754 6.70425 4.61338 9.32107 3.52939C11.9379 2.44539 14.9501 3.04523 16.952 5.04899C18.2685 6.3596 19.0059 8.14238 19 9.99999C19 12.712 17.1 15.558 15.5 17.469C14.4338 18.7415 13.2631 19.9226 12 21ZM12 4.99999C9.23995 5.0033 7.00331 7.23994 7 9.99999C7 11.166 7.527 13.185 10.035 16.186C10.6531 16.924 11.309 17.6297 12 18.3C12.691 17.6304 13.3472 16.9259 13.966 16.189C16.473 13.184 17 11.165 17 9.99999C16.9967 7.23994 14.7601 5.0033 12 4.99999ZM12 13C10.3431 13 9 11.6568 9 9.99999C9 8.34313 10.3431 6.99999 12 6.99999C13.6569 6.99999 15 8.34313 15 9.99999C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7957 13 12 13Z'
                        fill='#2E3A59'
                      ></path>
                    </svg>
                  </span>
                  ADDRESS
                </h2>
                <p className='mt-1 text-xs'>4909 NE 5th St</p>
                <p className='mt-1 text-xs'>Renton, Washington 98059</p>
              </div>
              <div className='px-6 mt-4 lg:w-1/2 lg:mt-0'>
                <h2 className='text-xs font-semibold tracking-widest text-gray-900 title-font'>
                  EMAIL
                </h2>
                <a className='text-xs leading-relaxed text-green-500'>
                  blskylandscapes@gmail.com
                </a>
                <h2 className='mt-4 text-xs font-semibold tracking-widest text-gray-900 title-font'>
                  PHONE
                </h2>
                <p className='text-xs leading-relaxed'>
                  (425) 306-1212 (Andy Le)
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col w-full mt-8 bg-white lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0'>
            <h2 className='mb-1 text-lg font-medium text-gray-900 title-font'>
              Send us a message
            </h2>
            <p className='mb-5 leading-relaxed text-gray-600'>
              How can Blue Sky Landscaping help with your landscape?
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className='relative mb-4'>
                <label
                  htmlFor='name'
                  className='text-sm leading-7 text-gray-600'
                >
                  Name
                </label>
                <input
                  type='text'
                  required
                  id='name'
                  name='name'
                  className='w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200'
                />
              </div>
              <div className='relative mb-4'>
                <label
                  htmlFor='email'
                  className='text-sm leading-7 text-gray-600'
                >
                  Email
                </label>
                <input
                  type='email'
                  required
                  id='email'
                  name='email'
                  className='w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200'
                />
              </div>
              <div className='relative mb-4'>
                <label
                  htmlFor='message'
                  className='text-sm leading-7 text-gray-600'
                >
                  Message
                </label>
                <textarea
                  required
                  id='message'
                  name='message'
                  className='w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-green-500 focus:ring-2 focus:ring-green-200'
                ></textarea>
              </div>
              <button className='px-6 py-2 text-lg text-white bg-green-700 border-0 rounded focus:outline-none hover:bg-gray-600'>
                Send
              </button>
              {done && (
                <div className='w-full mt-5 text-white bg-green-500'>
                  <div className='container flex items-center justify-between px-6 py-4 mx-auto'>
                    <div className='flex'>
                      <svg viewBox='0 0 40 40' className='w-6 h-6 fill-current'>
                        <path d='M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z'></path>
                      </svg>

                      <p className='mx-3'>
                        We will get back to you ASAP. Thank you!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className='mt-12 bg-white'>
          <div className='relative flex flex-wrap px-4 py-3 bg-green-700 sm:flex-nowrap sm:justify-center sm:items-center sm:gap-3 sm:pr-8 ms:px-8'>
            <div className='order-1 inline-block w-11/12 max-w-screen-sm mb-2 text-sm text-center text-white sm:order-none sm:w-auto md:text-base sm:mb-0'>
              Delivering the highest standard of service, quality, attention to
              detail!
            </div>

            <Link href='/get-a-quote'>
              <a className='order-last inline-block w-full px-4 py-2 text-xs font-semibold text-center text-white transition duration-100 bg-green-500 rounded-lg outline-none sm:order-none sm:w-auto hover:bg-green-600 active:bg-green-800 focus-visible:ring ring-green-300 md:text-sm whitespace-nowrap'>
                Get A Quote
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
