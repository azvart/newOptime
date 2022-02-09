import { useEffect, useRef } from 'react';



function usePrevios(value:any){
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  },[value]);

  return ref.current;
}

export default usePrevios;