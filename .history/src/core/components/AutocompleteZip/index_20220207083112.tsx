import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import '../../assets/componets/autocomplete.scss';



const AutocompleteZip = ({ 
  autocomplete = [],
  placeholder='',
  input='',
  setInput 

}:any) => {
  const [suggest, setSuggest] = useState([]);


  
  useEffect(() => {
    const handleClick = (event:any) => {
      enterKeyDown(event);
    }

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    }
  },[])

  useEffect(() => {

    setInput(input);

  },[input])
  return (
    <Autosuggest
    suggestions={suggest}
    inputProps={{
      placeholder:placeholder,
      onChange: onChange,
      value: input,
      onKeyDown: enterKeyDown,
    }}
    multiSection={true}
    highlightFirstSuggestion={true}

    />
  )
}