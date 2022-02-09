import { useRef, useEffect, useCallback } from 'react';



function useEventListener(eventName:string, handler:any){

  const saveHanlder:any = useRef();

  useEffect(() => {
    saveHanlder.current = handler;
  },[handler])

  useEffect(() => {
    const isSupported = document && document.addEventListener;
    if(!isSupported) return;

    const eventListener = (event:any) => saveHanlder.current(event);

    document.addEventListener(eventName, eventListener);

    return () => {
      document.removeEventListener(eventName, eventListener);
    }
  },[eventName, document])
}


export default useEventListener;