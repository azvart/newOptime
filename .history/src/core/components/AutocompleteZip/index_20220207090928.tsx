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
  const escapedRegexCharacters = (str:string) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  const getSuggescion = (value:any):any => {
    const escaped = escapedRegexCharacters(value.trim());
    if(escaped === ''){
      return [];
    }

    const regex = new RegExp('^'+ escaped, 'i');
    const data = autocomplete.filter(({label}:any) => regex.test(label))
    .filter((section:any) => section.label.length > 0);

    return data;
  }
  const onSuggestionsClearRequested = () => {
    setSuggest([]);
  }
  const getSuggestionValue = (suggestion:any) => {
    return suggestion.label
  }
  const renderSuggestion = (suggestion:any) => {
    return (
      <span>{suggestion.label}</span>
    )
  }
  const renderSectionTitle = (section:any) => {
    return ''
  }
  const getSectionSuggestions = (section:any) => {
    return section.label
  }
  const onChange = (event:any, {newValue, method}:any) => {
    setInput(newValue);
  }
  const onSuggestionsFetchRequested = ({value}:any) => {
    setSuggest( getSuggescion(value) )
  }
  const enterKeyDown = (event:any) => {
    if(input.length && node.current.contains(event.target)){
      if(event.key === 'Enter'){
        const data = suggest.map(({label}:any) => {
          return label.filter(({label}:any) => label.toLowerCase().includes(input.toLowerCase()))[0];
        })[0]
        setInput(data.label);
      }
    }
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
    onSuggestionsClearRequested={onSuggestionsClearRequested}
    getSuggestionValue={getSuggestionValue}
    renderSuggestion={renderSuggestion}
    renderSectionTitle={renderSectionTitle}
    getSectionSuggestions={getSectionSuggestions}
    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
    />
  )
}


export default AutocompleteZip;