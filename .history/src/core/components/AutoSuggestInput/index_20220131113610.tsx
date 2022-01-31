import {useState} from 'react';
import Autosuggest from 'react-autosuggest';




const AutoSuggestInput = () => {
  const [suggest, setSuggest] = useState([]);


  return (
    <Autosuggest />
  )
}




export default AutoSuggestInput;