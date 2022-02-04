import {ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import axios from 'axios';
import { ActionsType,SearchZipAction, ClearZipAction} from './zipTypes';
import { adress } from '../../../../types/env';


const SearchZip:ActionCreator<ThunkAction<Promise<any>, any, null, SearchZipAction>> = (zip:string) => {
  return async (dispatch:Dispatch) => {
    try{
      const code = zip.split(" ")[0];
      const codes = await axios({
        method:"POST",
        url:`${adress}/api/zip/searchzip`,
        data:{
          zip:code
        }
      });
      if(zip.length === 3){
      dispatch({type:ActionsType.ZIP, payload: codes.data})
      }
    }catch(err){
      console.error(err);
    }
  }
}

export const ClearZip:ActionCreator<ThunkAction<Promise<any>, any, null, ClearZipAction>> = () => {
  return async (dispatch:Dispatch) => {
    try{
      dispatch({type: ActionsType.CLEAR, payload: []});
    }catch(err){
      console.error(err);
    }
  }
}



export default SearchZip;

