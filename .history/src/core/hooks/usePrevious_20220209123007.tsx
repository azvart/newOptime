import { useEffect, useRef } from 'react';



function usePrevios<T>(value:T):T{
  const ref:any = useRef<T>();

  useEffect(() => {
    ref.current = value;
  },[value]);

  return ref.current;
}

export default usePrevios;