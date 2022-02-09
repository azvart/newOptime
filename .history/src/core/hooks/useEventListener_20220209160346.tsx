import { useRef, useEffect, useCallback } from 'react';



function useEventListener(eventName:string, handler:any, element){

  const saveHanlder:any = useRef();

  useEffect(() => {
    saveHanlder.current = handler;
  },[handler])

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if(!isSupported) return;

    const eventListener = (event:any) => saveHanlder.current(event);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    }
  },[eventName, element])
}


export default useEventListener;