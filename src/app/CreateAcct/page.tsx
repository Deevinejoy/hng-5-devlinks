'use client';

import Image from "next/image";
import Link  from "next/link";
import { FormEvent, useState } from 'react';
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig'
import { signIn } from "next-auth/react";


export default function CreateAcct() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [error, setError] = useState<string | null>(null)

  const signUp = async () =>{
    setError(null);
    if (password !== passwordAgain){
      setError("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      redirect('/Homepage');
    } catch (error: any) {
      console.error('Error signing up:', error.message);
      setError(error.message);
    }
  
  }

  return (
    <main className=" pt-[137px] bg-[#FAFAFA] flex justify-center items-center flex-col ">
         <div className="logo-login-page p-[0px] flex gap-x-[4.17px] justify-center mb-[51px]">
    <Image src="/logo.svg" alt="logo" width={33.33} height={33.33} />
    <Image src="/devlinks.svg" alt="devlinks" width={135} height={26.25} />
   
   </div>

   <div className=" login-page bg-[white] grid place-content-center p-[40px] ">
       
        <div>
            <p  className="font-[700] text-[32px] text-[#333333]"> Create account</p>
            <p className="pt-[8px] pb-[40px] font-[400] text-[16px] leading-[24px] text-[#737373]">Let’s get you started sharing your links!</p>
        </div>
        <form className=" flex flex-col relative" onSubmit={(e) => e.preventDefault()}>
        <label className="pb-[4px] text-[#888888] font-[400px] text-[12px] ">Email address</label>
    <input
          className=" p-[12px] pl-[48px] border-style border-[1px] rounded-[8px]  mb-[24px] "
          type="text" 
           id="email"
           placeholder="e.g. alex@email.com"
           value={email}
           required
           autoComplete="email"
           onChange={(e) => setEmail(e.target.value)}
    />
    <div  className="absolute top-[42px] pl-[24px]">
    <Image 
   src="/envelope.svg" alt="logo" width={16} height={16}/>
    </div>
    <label className=" pb-[4px] text-[#888888] font-[400px] text-[12px] ">Create password</label>
    <input 
     className=" p-[12px] pl-[48px] border-style border-[1px] rounded-[8px]  mb-[24px]"
    type="text" 
           id="password"
           placeholder="At least 8 characters"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           autoComplete="current-password"
    />
     <div  className="absolute top-[132px] pl-[24px]">
     <Image src="/passlock.svg" alt="logo" width={16} height={16}/>

    </div>
    <label className=" pb-[4px] text-[#888888] font-[400px] text-[12px] ">Confirm password</label>
    <input 
     className=" p-[12px] pl-[48px] border-style border-[1px] rounded-[8px]  mb-[24px]"
    type="text" 
           id="password"
           placeholder="At least 8 characters"
           value={passwordAgain}
           onChange={(e) => setPasswordAgain(e.target.value)}
           autoComplete="current-password"
    />
    
     <div  className="absolute top-[229px]  pl-[24px]">
     <Image src="/passlock.svg" alt="logo" width={16} height={16}/>

    </div>
    {error && <p className=" font-[400px] text-[12px] text-red-500">{error}</p>}
    
            <p className=" pb-[4px] text-[#888888] font-[400px] text-[12px] ">Password must contain at least 8 characters</p>
                
            <button 
     className=" bg-[#633CFF] text-[#FFFFFF] font-[600px] text-[16px] leading-[24px] mt-[24px] mb-[24px] rounded-[8px] h-[46px]"onClick={signUp}><p>Create an account</p></button>
        </form>
        <div className="creat-acct-footer">
            <p className=" text-[#888888] font-[400px] text-[16px] leading-[24px]" >Dont have an account? 
            <Link  className=" text-[#633CFF] font-[400px] text-[16px] leading-[24px]" href ="/"> Login</Link>
            </p>
    </div>

      
    </div>

    </main>
   
  )
}