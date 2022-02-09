import React, { useState, useEffect, useContext, createContext } from 'react';


const searchContext:any = createContext(null);


export function ProvideSearch({ children }:any) {
  const search = useProvideSearch();
  return <searchContext.Provider value={search}>{children}</searchContext.Provider>;
}


export const useSearch = () => {
  return useContext(searchContext);
}


function useProvideSearch(){
  const [search, setSearch] = useState({name:'', location:''});

  const setLocation = (value:any) => {

    setSearch({...search, location:value})
  }
  const setName = (value:string) =>{
    setSearch({...search, name: value})
  }

  return {
    search,
    setSearch,
  }
}