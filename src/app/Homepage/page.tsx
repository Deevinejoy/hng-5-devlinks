'use client'

import { useState } from 'react';
import Navbar from '../Components/Navbar'
import Image from 'next/image'
import Links from '../Components/Links'
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import PlatformLinks from '../Components/phonePreview';



export default function Homepage() {
  const [links, setLinks] = useState<string[]>([]);
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [linkURLs, setLinkURLs] = useState<string[]>([]);
    
  const handleAddLinkClick = () => {
    setLinks([...links, '']);
    setPlatforms([...platforms, 'option1']);
    setLinkURLs([...linkURLs, '']); 
  };

  const handleRemoveLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
    setPlatforms(platforms.filter((_, i) => i !== index));
    setLinkURLs(linkURLs.filter((_, i) => i !== index));
  };

  const handlePlatformChange = (index: number, platform: string) => {
    const newPlatforms = [...platforms];
    newPlatforms[index] = platform;
    setPlatforms(newPlatforms);
  };

  const handleLinkChange = (index: number, link: string) => {
    const newLinkURLs = [...linkURLs];
    newLinkURLs[index] = link;
    setLinkURLs(newLinkURLs);
  };

  const handleSave = () => {
    // Implement save functionality here
    console.log("Links:", linkURLs);
    console.log("Platforms:", platforms);
  };

  
  
      
      
      
  return (
    <main className=' bg-[#FAFAFA]  mt-[24px] flex-col sm:flex-col-reverse'>
             <Navbar/>
       
        <div className=' bg-[#FAFAFA]  mt-[24px] flex gap-x-[24px] '>
        <PlatformLinks platforms={platforms} linkURLs={linkURLs} />
            <div className=' bg-[white] pt-[40px] pl-[40px] pr-[40px]
            flex-grow'>
                <p className="font-[700] sm:text[24px] text-[32px] text-[#333333] leading-[48px] sm:leading[36px] items-center">Customize your links</p>
                <p 
                 className="font-[400] text-[16px] text-[#737373] leading-[24px] items-center mb-[40px]">Add/edit/remove links below and then share all your profiles with the world!</p>

                <button className='border-[1px] rounded-[8px] w-[100%]  pt-[11px] pb-[11px] pr-[27px] pl-[27px] ' onClick={handleAddLinkClick}>
                    <p  className="font-[600] text-[16px] text-[#633CFF] leading-[24px] items-center">+ Add new link</p>
                </button>
                {links.length === 0 && (
            <div className='mt-[24px] flex flex-col items-center justify-center bg-[#FAFAFA] rounded-[12px] p-[20px] '>
              <Image src="/started.svg" alt="started" width={249.53} height={160}/>
              <p className='mt-[40px] mb-[24px] font-[700] text-[32px] text-[#333333] leading-[48px] '>Lets get you started</p>
              <p className='font-[400] text-[16px] text-[#737373] leading-[24px] text-center'>
                Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!
              </p>
            </div>
          )}
           {links.map((link, index) => (
            <Links 
              key={index} 
              index={index} 
              onRemove={handleRemoveLink} 
              onPlatformChange={(platform) => handlePlatformChange(index, platform)} 
              onLinkChange={(link) => handleLinkChange(index, link)}
            />
          ))}
               

                <div className='border-t-[1px] mt-[40px] mb-[40px]  flex justify-end' >
                <button className='opacity-25 bg-[#633CFF] pt-[11px] pb-[11px] pr-[27px] pl-[27px] rounded-[8px] mt-[24px]' ><p className='text-[white] text-center font-[600] text-[16px] leading-[24px] '   onClick={handleSave}>save</p></button>
                </div>

            </div>
        
            
        
        </div>
    </main>
    
  )
}
Homepage.requireAuth = true
