import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import serviceHeroImg from '../assets/house-hugger-plants.jpeg';
import yardMaintenance from '../assets/landscape-maintenance.jpeg';
import yardCleanUp from '../assets/Lawn-Maintenance.jpeg';
import landscapingConstruction from '../assets/yard_clean-up_Renton_WA_98059.jpeg';
import ServicesList from '../components/ServicesList';

const yardCleanUpList = [
  'Tree pruning',
  'Tree cutting',
  'Hedge trimming',
  'Shrub pruning',
  'Stump grinding',
  'Vine pruning',
  'Weeding',
  'Mowing',
  'Edging',
  'Bamboo removal',
  'Reducing overgrown plants',
  'Plant removal',
  'Plant beds',
  'Pressure washing',
  'Mulching',
];

const landscapingConstructionList = [
  'Paving',
  'Pavers',
  'Flagstone',
  'Retaining walls',
  'Fencing',
  'Decks',
  'Walkways',
  'Patios',
  'Concrete',
  'Driveways',
  'Sprinkler system',
  'Flower beds',
  'Plant beds',
  'Garden beds',
  'Landscape repair',
];

const yardMaintenanceList = [
  'Lawn maintenance',
  'Yard maintenance',
  'New sod',
  'Thatching',
  'Aerating',
  'Seeding',
  'Fertilization',
  'Weed and feed',
];

/* eslint-disable @next/next/no-img-element */
const Services = () => (
  <Layout>
    {/* <Seo templateTitle='Home' /> */}
    <Seo />

    <div className='bg-white'>
      <div className='relative'>
        <img
          src='https://images.unsplash.com/photo-1617850687395-620757feb1f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
          className='absolute inset-0 object-cover w-full h-full'
          alt=''
        />
        <div className='relative bg-gray-600 bg-opacity-50'>
          <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='flex flex-col items-center justify-between xl:flex-row'>
              <div className='w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12'>
                <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none'>
                  Landscape Design & Construction
                </h2>
                <p className='max-w-xl mb-4 text-base text-gray-100 md:text-lg'>
                  Every phase of the project is carefully thought-out and
                  executed in an orderly and efficient manner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-screen-xl px-4 md:px-8 mx-auto pb-24 pt-20'>
        <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
          <div className='md:pt-8'>
            <p className='text-green-500 font-bold text-center md:text-left'>
              What We Do
            </p>

            <h1 className='text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6'>
              Full-services landscaping, construction in Renton, Washington
            </h1>

            <p className='text-gray-500 sm:text-lg mb-6 md:mb-8'>
              Our hardworking landscaping services team has been delivering
              outstanding, environmentally friendly landscapes for over 10
              years. Our attention to detail, customer service and
              sustainability have made us The Green Standard in our industry.
              <br />
              <br />
              For us, it’s all about you. Your vision. Your property. Your
              timeline. And your budget. No two projects are alike, and we like
              it that way. We relish the challenge to work with Mother Nature
              and make your property the best it can be.
            </p>
          </div>
          <div>
            <div className='h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg'>
              <Image
                src={serviceHeroImg}
                alt='Blue Sky Landscaping services in Renton, WA 98059'
                placeholder='blur'
                layout='responsive'
                className='w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-100 service-custom-bg'>
        <div className='relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0'>
            <svg
              viewBox='0 0 88 88'
              className='w-full max-w-screen-xl text-indigo-100'
            >
              <circle fill='currentColor' cx='44' cy='44' r='15.5' />
              <circle
                fillOpacity='0.2'
                fill='currentColor'
                cx='44'
                cy='44'
                r='44'
              />
              <circle
                fillOpacity='0.2'
                fill='currentColor'
                cx='44'
                cy='44'
                r='37.5'
              />
              <circle
                fillOpacity='0.3'
                fill='currentColor'
                cx='44'
                cy='44'
                r='29.5'
              />
              <circle
                fillOpacity='0.3'
                fill='currentColor'
                cx='44'
                cy='44'
                r='22.5'
              />
            </svg>
          </div>
          <div className='relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
              <div className='p-5'>
                <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50'>
                  <svg
                    className='w-8 h-8 text-deep-purple-accent-400'
                    stroke='currentColor'
                    viewBox='0 0 52 52'
                  >
                    <polygon
                      strokeWidth='3'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      fill='none'
                      points='29 13 14 29 25 29 23 39 38 23 27 23'
                    />
                  </svg>
                </div>
                <p className='mb-2 font-bold'>Yard Clean Up</p>
                <p className='text-sm leading-5 text-gray-900'>
                  Cleaning up your property is a big job. Our team can handle it
                  for you. We are landscaping and lawn care service experts with
                  programs catered to both residential and commercial
                  properties.
                </p>
                <br />
                <p className='text-sm leading-5 text-gray-900'>
                  We understand that your time is valuable and limited. Let us
                  take care of your spring cleaning so that you can enjoy a
                  beautiful, season-ready property without the hassle.
                </p>
              </div>
              <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
            </div>
            <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
              <div className='p-5'>
                <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50'>
                  <svg
                    className='w-8 h-8 text-deep-purple-accent-400'
                    stroke='currentColor'
                    viewBox='0 0 52 52'
                  >
                    <polygon
                      strokeWidth='3'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      fill='none'
                      points='29 13 14 29 25 29 23 39 38 23 27 23'
                    />
                  </svg>
                </div>
                <p className='mb-2 font-bold'>
                  Landscaping Hardscape Construction
                </p>
                <p className='text-sm leading-5 text-gray-900'>
                  Whether you want a garden retaining wall, stonework in patio,
                  or any other landscape construction, Blue Sky Landscaping is
                  the right choice.
                </p>
                <br />
                <p className='text-sm leading-5 text-gray-900'>
                  We have the skills and expertise to understand your needs and
                  come up with the best solutions on time and budget. We will
                  help you create a beautiful and functional space that enhances
                  your curb appeal and adds value to your property.
                </p>
              </div>
              <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
            </div>
            <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
              <div className='p-5'>
                <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50'>
                  <svg
                    className='w-8 h-8 text-deep-purple-accent-400'
                    stroke='currentColor'
                    viewBox='0 0 52 52'
                  >
                    <polygon
                      strokeWidth='3'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      fill='none'
                      points='29 13 14 29 25 29 23 39 38 23 27 23'
                    />
                  </svg>
                </div>
                <p className='mb-2 font-bold'>Maintenance</p>
                <p className='text-sm leading-5 text-gray-900'>
                  Your lawn is one of the most apparent components of your
                  property, which is why it plays such a big role in its value.
                  When you need residential lawn maintenance, Blue Sky
                  Landscaping can provide trustworthy solutions of the highest
                  quality.
                </p>
                <br />
                <p className='text-sm leading-5 text-gray-900'>
                  We provide residential lawn maintenance and lawn care
                  services, ranging from mowing to fertilization and more.
                </p>
              </div>
              <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
            </div>
          </div>
        </div>
      </div>

      <div className='text-gray-600 body-font max-w-screen-xl px-4 md:px-8 mx-auto'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap w-full mb-5'>
            <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
                We provide all solutions
              </h1>
              <div className='h-1 w-20 bg-green-500 rounded'></div>
            </div>
            <p className='lg:w-1/2 w-full leading-relaxed text-gray-500'>
              We offer a variety of services of landscaping services. The three
              common services packages we provide include: Yard Clean Up,
              Landscape construction, and Maintenance
            </p>
          </div>

          <div className='bg-white py-6 sm:py-8 lg:py-12'>
            <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
              <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8'>
                <div className='flex flex-col bg-white border rounded-lg overflow-hidden'>
                  <div className='group h-48 md:h-64 block bg-gray-100 overflow-hidden relative'>
                    <Image
                      src={yardCleanUp}
                      alt='Best Landscaping Hardscape Construction services in Renton, WA 98059'
                      placeholder='blur'
                      layout='fill'
                      className='w-full h-full object-cover object-center absolute'
                    />
                  </div>

                  <div className='flex flex-col flex-1 p-4 sm:p-6'>
                    <h2 className='text-gray-800 text-lg font-semibold mb-2'>
                      Yard Clean up
                    </h2>
                    <ServicesList data={yardCleanUpList} />
                  </div>
                </div>

                <div className='flex flex-col bg-white border rounded-lg overflow-hidden'>
                  <div className='group h-48 md:h-64 block bg-gray-100 overflow-hidden relative'>
                    <Image
                      src={landscapingConstruction}
                      alt='Best Landscaping Hardscape Construction services in Renton, WA 98059'
                      placeholder='blur'
                      layout='fill'
                      className='w-full h-full object-cover object-center absolute inset-0'
                    />
                  </div>

                  <div className='flex flex-col flex-1 p-4 sm:p-6'>
                    <h2 className='text-gray-800 text-lg font-semibold mb-2'>
                      Landscaping Hardscape Construction
                    </h2>
                    <ServicesList data={landscapingConstructionList} />
                  </div>
                </div>

                <div className='flex flex-col bg-white border rounded-lg overflow-hidden'>
                  <div className='group h-48 md:h-64 block bg-gray-100 overflow-hidden relative'>
                    <Image
                      src={yardMaintenance}
                      alt='Best Landscaping Hardscape Construction services in Renton, WA 98059'
                      placeholder='blur'
                      layout='fill'
                      className='w-full h-full object-cover object-center absolute inset-0'
                    />
                  </div>

                  <div className='flex flex-col flex-1 p-4 sm:p-6'>
                    <h2 className='text-gray-800 text-lg font-semibold mb-2'>
                      Maintenance
                    </h2>
                    <ServicesList data={yardMaintenanceList} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Services;
