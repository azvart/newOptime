import React from 'react';
import {useState, useEffect, useLayoutEffect} from 'react';
import Autosuggest from 'react-autosuggest';




const AutoSuggestInput = ({autocomplete = []}) => {
  const [suggest, setSuggest] = useState([]);
  const [value, setValue] = useState('');
  const escapedRegexCharacters =(str:any) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  const getSuggestion = (value:any) => {
    const escaped = escapedRegexCharacters(value.trim());
    if(escaped === ''){
      return []
    }

    const regex = new RegExp('^' + escaped, 'i');

    return autocomplete.map((section:any) => {
      return {
        title: section.title,
        label: section.label.filter((labels:any) => regex.test(labels.name))
      }
    }).filter(section => section.label.length > 0)
  }
  const onChange = (event:any, {newValue, method}:any) => {
    setValue(newValue);
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
    return (
      <strong>{section.title}</strong>
    )
  }
  const getSectionSuggestions = (section:any) => {
    return section.label
  }
  const onSuggestionsFetchRequested = ({value}:any) => {
    setSuggest( getSuggestion(value) )
  }
  return (
    <Autosuggest 
      suggestions={suggest}
      multiSection={true}
      inputProps={{
        placeholder:"Type medications",
        onChange: () => onChange,
        value: value
      }}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      renderSectionTitle={renderSectionTitle}
      getSectionSuggestions={getSectionSuggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
    />
  )
}




export default AutoSuggestInput;