import React from 'react';
import {useState, useEffect, useLayoutEffect} from 'react';
import Autosuggest from 'react-autosuggest';




const AutoSuggestInput = ({autocomplete = []}) => {
  const [suggest, setSuggest]:any = useState([]);
  const [value, setValue] = useState('');
  const escapedRegexCharacters =(str:any) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  const getSuggestion = (value:any):string | [] => {
    const escaped = escapedRegexCharacters(value.trim());
    if(escaped === ''){
      return []
    }

    const regex = new RegExp('^' + escaped, 'i');

    const data =  autocomplete.map((section:any) => {
      return {
        title: section.title,
        label: section.label[0].filter((labels:any) => {
          if(regex.test(labels.label)){
            return labels.label
          }
        })
      }
    }).filter((section:any) => section.labels.length > 0)
    console.log(data);

    return ""
  }
  const onChange = (event:any, {newValue, method}:any) => {
    setValue(newValue);
  }
  const onSuggestionsClearRequested = () => {
    setSuggest([]);
  }
  const getSuggestionValue = (suggestion:any) => {
    console.log(suggestion);
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
        onChange: onChange,
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