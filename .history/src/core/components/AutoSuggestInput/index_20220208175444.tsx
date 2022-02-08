import React from 'react';
import {useState, useEffect, useRef} from 'react';
import Autosuggest from 'react-autosuggest';
import '../../assets/components/autocomplete.scss';



const AutoSuggestInput = ({autocomplete = [], placeholder='', input='', setInput, setBool}:any) => {
  const [suggest, setSuggest] = useState([]);
  const node:any = useRef();
  const escapedRegexCharacters =(str:any) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  const getSuggestion = (value:any):any => {
    const escaped = escapedRegexCharacters(value.trim());
    if(escaped === ''){
      return []
    }
    const regex = new RegExp('^' + escaped, 'i');
  const data = autocomplete.map((section:any) => {
    return {
      title: section.title,
      label: section.label.filter(({label}:any) =>  regex.test(label))  
    }
  }).filter((section:any) => section.label.length > 0)
  const sorting = data.map(({label}:any) => label).flat().sort((a:any,b:any) => {
    return (a.label < b.label) ? -1 : (a.label > b.label) ? 1 : 0;
  }).map((e:any) => {
    return {
      title: e.title,
      label: [{label: e.label, type: e.type}]
    }
  })
  const group = data.map((items:any) => autocomplete.find((title:any) => items.title === title.title)).map((e:any) => e.label).flat()
  const currentSort = sorting.map(({label}:any) => label).flat();
  const result = group.filter((e:any) => !currentSort.some((r:any) => e.label === r.label)).sort((a:any,b:any) => {
    return (a.label < b.label) ? -1 : (a.label > b.label) ? 1 : 0;
  }).map(({label, type}:any) => {
    return {
      title: '',
      label:[{label,type}]
    }
  })
  const resultList = sorting.concat(result);
  return resultList;
  }
  const onChange = (event:any, {newValue, method}:any) => {
    setInput(newValue);
  }
  const onSuggestionsClearRequested = () => {
    setSuggest([]);
  }
  const getSuggestionValue = (suggestion:any) => {
    return suggestion.label
  }
  const renderSuggestion = (suggestion:any) => {
    return (
      <span onClick={() => setBool(true)} >{suggestion.label} ({suggestion.type})</span>
    )
  }
  const renderSectionTitle = (section:any) => {
    // return (
    //   <strong>{section.title}</strong>
    // )
    return ''
  }
  const getSectionSuggestions = (section:any) => {
   return section.label
  }
  const onSuggestionsFetchRequested = ({value}:any) => {
    setSuggest( getSuggestion(value))
  }
  useEffect(() => {
    setInput(input)
  },[input]);
  return (
    <Autosuggest 
      suggestions={suggest}
      inputProps={{
        placeholder:placeholder,
        onChange: onChange,
        value: input,
        ref: node
      }}
      multiSection={true}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      renderSectionTitle={renderSectionTitle}
      getSectionSuggestions={getSectionSuggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      highlightFirstSuggestion={true}
    />
  )
}




export default AutoSuggestInput;