import * as React from 'react';

export default function ServicesList({ data }) {
  return data.map((s) => (
    <div
      className='flex items-center space-x-6 text-gray-800 dark:text-gray-200'
      key={s}
    >
      <svg
        className='w-5 h-5'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M5 13l4 4L19 7'
        />
      </svg>

      <span>{s}</span>
    </div>
  ));
}
