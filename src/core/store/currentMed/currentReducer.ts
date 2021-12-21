import {ActionsType,CurrentActionsType} from './currentTypes';

const currentReducer = (state:any = {}, action:CurrentActionsType) => {
  switch(action.type){
    case ActionsType.CURRENT:
      return action.payload;
    default:
      return state;
  }
}

export default currentReducer;