import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import '../../assets/componets/autocomplete.scss';



const AutocompleteZip = ({ autocomplete = [], placeholder='', input='', setInput }:any) => {
  const [suggest, setSuggest] = useState([]);




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