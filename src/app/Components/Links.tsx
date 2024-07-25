import React, { useState } from 'react';
import Image from 'next/image';

interface LinksProps {
  index: number;
  onRemove: (index: number) => void;
  onPlatformChange: (platform: string) => void;
  onLinkChange: (link: string) => void; // New prop for handling link change
}

export default function Links({ index, onRemove, onPlatformChange, onLinkChange }: LinksProps) {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [placeholder, setPlaceholder] = useState('e.g. https://www.github.com/johnappleseed');

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);
    onPlatformChange(newOption);
    switch (newOption) {
      case 'option1':
        setPlaceholder('e.g. https://www.github.com/johnappleseed');
        break;
      case 'option2':
        setPlaceholder('e.g. https://www.linkedin.com/in/johnappleseed');
        break;
      case 'option3':
        setPlaceholder('e.g. https://www.twitter.com/johnappleseed');
        break;
      case 'option4':
        setPlaceholder('e.g. https://www.youtube.com/johnappleseed');
        break;
      default:
        setPlaceholder('e.g. https://www.github.com/johnappleseed');
    }
  };

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLink = event.target.value;
    onLinkChange(newLink); // Call the onLinkChange function with the new link value
  };

  return (
    <div className='mt-[24px] bg-[#FAFAFA] rounded-[12px] p-[20px] '>
      <div className='flex justify-between'>
        <div className='flex gap-x-[8px]'>
          <Image src="Framelink.svg" alt='framelink' width={12} height={6}/>
          <p className='text-[#737373] font-[700px] text-[16px] leading-[24px]'>Link #{index + 1}</p>
        </div>
        <div className='text-[#737373] font-[400px] text-[16px] leading-[24px]'>
          <button onClick={() => onRemove(index)}>Remove</button>
        </div>
      </div>
      <form className='flex flex-col relative'>
        <label className='text-[#333333] font-[400px] text-[12px] leading-[18px] mt-[12px] pb-[4px]'>Platform</label>
        <select
          className='pt-[12px] pb-[12px] pl-[16px] pr-[16px] bg-[#FFFFFF] border-[1px] rounded-[8px]'
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="option1">Github</option>
          <option value="option2">LinkedIn</option>
          <option value="option3">Twitter</option>
          <option value="option4">Youtube</option>
        </select>
        <label className='text-[#333333] font-[400px] text-[12px] leading-[18px] mt-[12px] pb-[4px]'>Link</label>
        <input
          className='pt-[12px] pb-[12px] pl-[16px] pr-[16px] bg-[#FFFFFF] border-[1px] rounded-[8px]'
          type='text'
          placeholder={placeholder}
          onChange={handleLinkChange} // Attach the handleLinkChange function
        />
        <Image 
          className='absolute top-[130px] pl-[17.75]'
          src='ph-link.svg' alt='link' width={16} height={16}/>
      </form> 
    </div>
  );
}
