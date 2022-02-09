import { DependencyList, EffectCallback, useEffect } from 'react';

import useIsFirstRender from './useIsFirstRender';



function useUpdateEffect(effect:EffectCallback, deps?:DependencyList){

  useEffect(() => {}, deps);
}



export default useUpdateEffect;