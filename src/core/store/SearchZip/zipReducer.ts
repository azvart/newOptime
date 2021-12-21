import {SearchZipActionsType, ActionsType} from './zipTypes';


const zipReducer = (state:any = [], action:SearchZipActionsType) => {
  switch(action.type){
    case ActionsType.ZIP:
      return action.payload;
    case ActionsType.CLEAR:
      return action.payload;
    default:
      return state;
  }
}


export default zipReducer;