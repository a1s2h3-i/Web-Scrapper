'use client'
import { PropsWithChildren } from "react"
import { HeroUIProvider } from "@heroui/react"
import { useRouter } from "next/navigation"



const MainProvider = ({ children }: PropsWithChildren) => {
    const router = useRouter();
    return (
      <HeroUIProvider navigate={(url, options) => router.push(url, options)}>
        {children}
      </HeroUIProvider>
    );
  };
  
  
  

export default MainProvider