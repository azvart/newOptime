import { ActionsType, PriceMed  } from './priceTypes';


const priceReducer = (state:any = {}, action: PriceMed) => {
  switch(action.type){
    case ActionsType.PRICE:
      return action.payload;
    default:
      return state;
  }
}


export default priceReducer;