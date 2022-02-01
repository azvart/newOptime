import React from 'react';
import {useState, useEffect, useRef} from 'react';
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
  
    const data:any =  autocomplete.map((section:any) => {
      const filtering =  {
        title: section.title,
        label: section.label.filter((labels:any) => labels.label.toLowerCase().includes(value.toLowerCase()))
      }
      return filtering;
    })
    .filter((section:any) => section.label.length > 0);
   const group = data.map((items:any) => autocomplete.find((title:any) => items.title === title.title))
   .sort((a:any, b:any) => {
     return (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0;
   })
    return group;

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
  const enterKeyDown = (event:any) => {
    if(event.key === 'Enter' && value.length){
      console.log(suggest);
    } 
  }
  return (
    <Autosuggest 
      suggestions={suggest}
      multiSection={true}
      inputProps={{
        placeholder:"Type medications",
        onChange: onChange,
        value: value,
        onKeyDown: enterKeyDown
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