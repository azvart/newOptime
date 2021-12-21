import { TopMedActionsType, ActionsType } from "./topMedTypes";



const topMedReducer = (state:any = [], action:TopMedActionsType) => {
  switch(action.type){
    case ActionsType.TOP:
      return {...state, top:action.payload};
    case ActionsType.GROUP:
      return {...state, group:action.payload}
    default:
      return state;
  }
};


export default topMedReducer;