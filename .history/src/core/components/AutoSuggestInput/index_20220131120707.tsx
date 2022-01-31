import React from 'react';
import {useState, useEffect} from 'react';
import Autosuggest from 'react-autosuggest';




const AutoSuggestInput = ({autocomplete = []}) => {
  const [suggest, setSuggest] = useState([]);
  useEffect(() => {
    setSuggest(autocomplete)
  },[autocomplete])
  const [value, setValue] = useState('');
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
    multiSection={true}
    suggestions={suggest}
    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
    inputProps={{
      placeholder: "Type medications",
      onChange: onChange,
      value: value
    }}
    renderSuggestion={renderSuggestion}
    renderSectionTitle={renderSectionTitle}
    getSectionSuggestions={getSectionSuggestions}
    onSuggestionsClearRequested={onSuggestionsClearRequested}
    getSuggestionValue={getSuggestionValue}
    />
  )
}




export default AutoSuggestInput;