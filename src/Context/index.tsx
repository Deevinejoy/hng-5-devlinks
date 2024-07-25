'use client'

import {createContext, useContext, useState, Dispatch, SetStateAction} from 'react'

interface Contextprops{
    links:string[],
    setLinks:Dispatch<SetStateAction<string[]>>,
    platforms:string[],
    setPlatforms:Dispatch<SetStateAction<string[]>>,
    linkURLs:string[],
    setLinkURLs:Dispatch<SetStateAction<string[]>>,
}

const AppContext = createContext<Contextprops>({
    links:[],
    setLinks:(): string[] => [],
    platforms:[],
    setPlatforms:(): string[] => [],
    linkURLs:[],
    setLinkURLs:(): string[] => [],

});
export function AppWraper({children}: {
    children: React.ReactNode;
}){
    const [links, setLinks] = useState<string[]>([]);
    const [platforms, setPlatforms] = useState<string[]>([]);
    const [linkURLs, setLinkURLs] = useState<string[]>([]);
   
      
  
  return(
    <AppContext.Provider value={
        {
            links,setLinks,linkURLs,setLinkURLs,platforms,setPlatforms
        }
    }>
        {children}

    </AppContext.Provider>
  )  
}

export function useAppContext(){
    return useContext(AppContext)
}
