"use client";

import Image from "next/image";
import Link  from "next/link";
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebaseConfig';


export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);


  const router = useRouter();
  const login = async () => {
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      console.log(userCredential)
      router.push('/Homepage'); 
    } catch (error: any) {
      console.error('Error signing in:', error.message);
      setError(error.message);
    }
  }

  return (
   
  <main className=" bg-[#FAFAFA] grid place-content-center place-items-center pt-[100px] ">
    <div className="logo-login-page p-[0px] flex gap-x-[4.17px] justify-center mb-[51px]">
    <Image src="/logo.svg" alt="logo" width={33.33} height={33.33} />
    <Image src="/devlinks.svg" alt="devlinks" width={135} height={26.25} />
   
   </div>
    <div className=" login-page bg-[white] grid place-content-center p-[40px] ">
    
   <div >
    <Link className="font-[700] text-[32px] text-[#333333]" href="./Homepage"><p>Login</p></Link>
    <p className="pt-[8px] pb-[40px] font-[400] text-[16px] leading-[24px] text-[#737373]">Add you details below to get back in the app</p>
   </div>
   <form 
   onSubmit={(e) => e.preventDefault()}
   className="login-form flex flex-col relative">
  
    <label className="pb-[4px] text-[#888888] font-[400px] text-[12px] ">Email address</label>
    <input
          className=" p-[12px] pl-[48px] border-style border-[1px] rounded-[8px] mb-[24px]"
          type="text" 
           id="email"
           placeholder="e.g. alex@email.com"
           value={email}
           required
           autoComplete="email"
           onChange={(e) => setEmail(e.target.value)}
    />
    <div  className="absolute top-[40px] pl-[24px]">
    <Image 
   src="/envelope.svg" alt="logo" width={16} height={16}/>
    </div>
   
    <label className=" pb-[4px] text-[#888888] font-[400px] text-[12px] ">Password</label>
    <input 
     className=" p-[12px] pl-[48px] border-style border-[1px] rounded-[8px]"
    type="password" 
           id="password"
           placeholder="Enter your password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           autoComplete="current-password"
    />
            {error && <p className="text-red-500">{error}</p>}
     <div  className="absolute top-[132px] pl-[24px]">
     <Image src="/passlock.svg" alt="logo" width={16} height={16} />

    </div>
    
    <button 
     className=" bg-[#633CFF] text-[#FFFFFF] font-[600px] text-[16px] leading-[24px] mt-[24px] mb-[24px] rounded-[8px] h-[46px]"
    onClick={login}><p>Login</p></button>
    <Link href="./Homepage">home</Link>
   </form>
   <div className="login-footer text-center">
    <p className=" text-[#888888] font-[400px] text-[16px] leading-[24px]" >Dont have an account? 
      <button
      className=" text-[#633CFF] font-[400px] text-[16px] leading-[24px]"
       onClick={()=> router.push('./CreateAcct')}> Create account</button>
    </p>
   </div>

    </div>
   
  </main>
  );
}
