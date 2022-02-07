import React, { useState, useEffect, useRef } from 'react';
import Autosuggest from 'react-autosuggest';
import '../../assets/componets/autocomplete.scss';



const AutocompleteZip = ({ 
  autocomplete = [],
  placeholder='',
  input='',
  setInput 

}:any) => {
  const [suggest, setSuggest] = useState([]);
  const node:any = useRef();

  
  const onChange = (event:any, {newValue, method}:any) => {
    setInput(newValue);
  }

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
      ref:node
    }}
    multiSection={true}
    highlightFirstSuggestion={true}

    />
  )
}