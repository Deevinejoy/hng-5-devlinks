import React from 'react';

const PlatformLinks = ({ platforms, linkURLs }) => {
  return (
    <div className=' bg-[white] justify-center items-center w-[560px] hidden lg:flex'>
      <div className="relative mx-auto bg-[url('/mobile-preview.svg')] h-[600px] w-[300px] ">
        <div className="flex flex-col gap-2 py-20 px-2">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={linkURLs[index] || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full h-12 border border-gray-300 dark:border-gray-800 rounded-[1rem] flex items-center justify-center ${
                platform === 'option1' ? 'bg-black text-white' :
                platform === 'option2' ? 'bg-blue-500 text-white' :
                platform === 'option3' ? 'bg-black text-white' :
                platform === 'option4' ? 'bg-red-500 text-white' : 'bg-transparent'
              }`}
            >
              {platform === 'option1' && 'Github'}
              {platform === 'option2' && 'LinkedIn'}
              {platform === 'option3' && 'Twitter'}
              {platform === 'option4' && 'Youtube'}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformLinks;
