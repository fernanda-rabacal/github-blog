import { createContext, ReactNode, useEffect } from "react";
import axios from "axios"

interface BlogContextProviderProps {
  children: ReactNode
}

interface BlogContextType {
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogContextProvider({children} : BlogContextProviderProps) {
  

  return(
    <BlogContext.Provider 
      value={{
        
      }}>
      {children}
    </BlogContext.Provider>
  )
}