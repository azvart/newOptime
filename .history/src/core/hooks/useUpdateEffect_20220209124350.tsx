import { DependencyList, EffectCallback, useEffect } from 'react';




function useUpdateEffect(effect:EffectCallback, deps?:DependencyList){

  useEffect(() => {}, deps);
}



export default useUpdateEffect;