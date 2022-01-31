import React from 'react';
import {useState, useEffect, useLayoutEffect} from 'react';
import Autosuggest from 'react-autosuggest';




const AutoSuggestInput = ({autocomplete = []}) => {
  const [suggest, setSuggest] = useState([]);
  const [value, setValue] = useState('');
  useEffect(() => {
    if(autocomplete.length > 0){
      setSuggest(autocomplete);
    }
  },[autocomplete]);

  return (
    <Autosuggest 
      suggestions={suggest}
      multiSection={true}
    />
  )
}




export default AutoSuggestInput;