import React from 'react';
import { useState } from 'react';
import Autosuggest from 'react-autosuggest';




const AutoSuggestInput = ({autocomplete = []}) => {
  const [suggest, setSuggest] = useState([]);
  const [value, setValue] = useState('');
  const escapedRegexCharacters =(str:any) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  const getSuggestion = (value:any):any => {
    const escaped = escapedRegexCharacters(value.trim());
    if(escaped === ''){
      return []
    }

    const regex = new RegExp('^' + escaped, 'i');
    const data:any =  autocomplete.map((section:any) => {
      const datas =  {
        title: section.title,
        label: section.label.find((labels:any) => labels.label.toLowerCase().includes(value.toLowerCase())  && regex.test(labels.label))
      }
      return datas;
    })
    .filter((section:any) => section.label.length > 0);

    console.log(data);
    return [];
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
      <span>{suggestion.label} ({suggestion.type})</span>
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