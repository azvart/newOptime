import {SearchActionsType, ActionsType} from './searchTypes'



const searchReducer = (state:any = {}, action:SearchActionsType) => {
  switch(action.type){
    case ActionsType.SEARCH:
      return {...state,...action.payload};
    default:
      return state;
  }
}

export default searchReducer;