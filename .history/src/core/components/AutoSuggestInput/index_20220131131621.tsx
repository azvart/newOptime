import React from 'react';
import {useState, useEffect, useLayoutEffect} from 'react';
import Autosuggest from 'react-autosuggest';




const AutoSuggestInput = ({autocomplete = []}) => {
  const [suggest, setSuggest] = useState(autocomplete);
  const [value, setValue] = useState('');
  useEffect(() => {
    if(autocomplete.length > 0){
      setSuggest(autocomplete);
    }
  },[autocomplete]);
  const escapedRegexCharacters = (str:string) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  const getSuggestions = (value:string) => {
    const escapedValue = escapedRegexCharacters(value.trim());

    if(escapedValue === ''){
      return []
    }
    const regex = new RegExp('^' + escapedValue, 'i');
    return autocomplete.map((section) => {
      return {
        title: section.group,
        label: section.label.label
      }
    })
  }
  const onSuggestionsFetchRequested = ( {value}:any ) => {
    setSuggest(getSuggestions(value))
  }
  const getSuggestionValue = (suggestion:any) => {
    return suggestion.label.label;
  }
  const renderSuggestion = (suggestion:any) => {
    return (<span>{suggestion.label.label}</span>)
  }
  const renderSectionTitle = (section:any) => {
    return (
      <strong>{section.group}</strong>
    )
  }
  const getSectionSuggestions = (section:any) => {
    return section.label;
  }
  const onChange = (event:any, {newValue, method}:any) => {
    setValue(newValue)
  }
  const onSuggestionsClearRequested = () => {
    setSuggest([]);
  }
  return (
    <Autosuggest 
      suggestions={suggest}
      multiSection={true}
    />
  )
}




export default AutoSuggestInput;