import Link from "next/link"
import Image from "next/image"

export default function preview() {
  return (
    <div className="relative">
        <div className="bg-[#633CFF] h-[357px] pt-[24px] rounded-b-[32px] ">
            <div className="flex justify-between bg-[white] pl-[24px] pr-[24px] ml-[24px] mr-[24px] rounded-[12px] h-[78px] items-center">
               <Link className="border-[1px] border-[#633CFF] flex justify-center items-center h-[46px] rounded-[8px]"
                href="../Homepage">
                    <p className="text-[#633CFF] text-[16px] leading-[24px] text-center pt-[11px] pb-[11px] pr-[27px] pl-[27px]">Back to Editor</p>
                    </Link>
               <Link 
               className="border-[1px] bg-[#633CFF] flex justify-center items-center h-[46px] rounded-[8px]"
               href=""><p className="text-[white] text-[16px] leading-[24px] text-center pt-[11px] pb-[11px] pr-[27px] pl-[27px]">Share Link</p></Link>
            </div>
        </div>
        <div className="bg-white flex  justify-center items-center " >
            <div className="bg-white flex shadow-2xl justify-center items-center flex-col absolute top-60 w-[349px]" >
                <Image src="/subtract.svg" alt="profile-pic" width={104} height={104}/>
                <p>Ben Wright</p>
                <p>ben@example.com</p>

                <div className="">
                    <div className="bg-black w-[237px]">
                        <Image src="/arrow-right.svg" alt="right-arrow" width={16} height={16}/>
                        <p>jutygh</p>
                        
                    </div>
                    <div className="bg-black">
                        <Image src="/arrow-right.svg" alt="right-arrow" width={16} height={16}/>
                    </div>
                    <div className="bg-black">
                        <Image src="/arrow-right.svg" alt="right-arrow" width={16} height={16}/>
                    </div>
                </div>

            </div>

        </div>
      
    </div>
  )
}

