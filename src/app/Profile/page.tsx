'use client';

import Image from "next/image"
import Navbar from "../Components/Navbar"
import { useState } from "react";


export default function Profile() {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string | null>(null);

 

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file);
        setImageUrl(reader.result as string);
        setImageName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    
    <main className=' bg-[#FAFAFA]  mt-[24px] flex-col'>
      <Navbar/>

      <div className=' bg-[#FAFAFA]  mt-[24px] flex gap-x-[24px]'>

          <div className='flex bg-[white] justify-center items-center w-[560px] hidden lg:block'>
           
              <Image src='/mobile-preview.svg' alt='mobile' width={307} height={631}/>
            </div>
            <div className=' bg-[white] pt-[40px] pl-[40px] pr-[40px]
                    flex-grow'>
                      <div >
                        <p className="font-[700] text-[32px] text-[#333333] leading-[48px] items-center ">Profile details</p>
                <p  className="font-[400] text-[16px] text-[#737373] leading-[24px] items-center mb-[40px]">Add your details to create a personal touch to your profile.</p>
              </div>
              <div className=" pl-[20px] pr-[20px] flex bg-[#FAFAFA]">
                <div className="flex  items-center">
                <p  className="font-[400] text-[16px] text-[#737373] leading-[24px] w-[240px]">Profile picture</p>

                </div>
                {imageUrl ? (
                  <div className="flex flex-col justify-center items-center  h-[193px] w-[193px] pt-[8px]">
                  <Image className="absolute" src={imageUrl} alt='pic-icon' width={193} height={193} />
                  
                  <label className=" relative top-0 text-white font-[600] leading-[24px] cursor-pointer text-[16px]">
                    <Image src='/imagechange.svg' alt="image" width={32.5} height={27.5}>

                    </Image>
          Change Image
          <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
        </label>
                                
                  </div>
               ):(
                  <div className="bg-[#EFEBFF] flex flex-col justify-center items-center  h-[193px] w-[193px] pt-[8px]">
                    <Image src='/pic-icon.svg' alt='pic-icon' width={32.5} height={27.5} />
                    <div>
                    <label className="cursor-pointer font-[600] text-[12px] text-[#633CFF] leading-[18px]">
                    + upload image
          <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
        </label>
                    </div>
                    
                    
                  
                                  
                </div>
                  
                  
                )}
                
                
                <div className="flex items-center justify-center pr-[24px] pl-[24px]  bg-[#FAFAFA]">
                <p className="font-[400] text-[16px] text-[#737373] leading-[24px]">Image must be below 1024x1024px. Use PNG or JPG format.</p>

                </div>
                
                
              </div>
              <div className=" bg-[#FAFAFA] mt-[24px] p-[20px] ">
                <form action="" className="flex flex-col gap-y-[12px]">
                  <div className="flex justify-between">
                    <label className="font-[400] text-[16px] text-[#888888] leading-[24px]">First name*</label>
                    <input
                    className="rounded-[8px] pt-[12px] pb-[12px] pr-[16px] pl-[18px] w-[432px] "
                    type='text' placeholder='e.g. John'/>

                  </div>
                  
                  <div  className="flex justify-between">
                    <label  className="font-[400] text-[16px] text-[#888888] leading-[24px]">Last name*</label>
                    <input
                    className="rounded-[8px] pt-[12px] pb-[12px] pr-[16px] pl-[18px] w-[432px]"
                    type='text' placeholder='e.g. Appleseed'/>

                  </div>
                  <div  className="flex justify-between">
                  <label  className="font-[400] text-[16px] text-[#888888] leading-[24px] ">Email</label>
                  <input
                   className="rounded-[8px] pt-[12px] pb-[12px] pr-[16px] pl-[18px] w-[432px]"
                   type='text' placeholder='e.g. email@example.com'/>

                  </div>
                 
                  
                </form>
                
              </div>
              <div className='border-t-[1px] mt-[40px] mb-[40px]  flex justify-end' >
                <button className='opacity-25 bg-[#633CFF] pt-[11px] pb-[11px] pr-[27px] pl-[27px] rounded-[8px] mt-[24px]' ><p className='text-[white] text-center font-[600] text-[16px] leading-[24px] '>save</p></button>
                </div>

          </div>
         

              
      </div>
    </main>
  )
 

 
}