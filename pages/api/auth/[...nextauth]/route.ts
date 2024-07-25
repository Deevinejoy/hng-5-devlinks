
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/app/firebaseConfig'


export const authOptions={
  pages:{
    signIn: "/"
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: {  label: "password", type: "password" } 
      },
      async authorize(credentials) : Promise<any> {
        return await signInWithEmailAndPassword(auth, (credentials as any ).email || '', (credentials as any).password || '')
        .then(userCredential => {
      
          if(userCredential.user){
           
            return userCredential.user
          }
         
          return null;
        })
        .catch(err => (console.log(err) ))
      }
      }
    )
  ]
  
 
}


export default NextAuth(authOptions)