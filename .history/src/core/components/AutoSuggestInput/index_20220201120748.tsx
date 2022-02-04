import React from 'react';
import {useState, useEffect, useRef} from 'react';
import Autosuggest from 'react-autosuggest';




const AutoSuggestInput = ({autocomplete = []}) => {
  const [suggest, setSuggest] = useState([]);
  const [value, setValue] = useState('');
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
  //   const data:any =  autocomplete.map((section:any) => {
  //     const filtering =  {
  //       title: section.title,
  //       label: section.label.filter((labels:any) => labels.label.toLowerCase().includes(value.toLowerCase()))
  //     }
  //     return filtering;
  //   })
  //   .filter((section:any) => section.label.length > 0);
  //  const group = data.map((items:any) => autocomplete.find((title:any) => items.title === title.title))
  //  .sort((a:any, b:any) => {
  //    return (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0;
  //  })
  //   return group;
  const data = autocomplete.map((section:any) => {
    return {
      label: section.label.filter(({label}:any) =>  regex.test(label))
    }
  })
  .map((section) => {
    return {
      label: section.label.sort((a:any,b:any) => {
        return (a.label < b.label) ? 1 : (a.label > b.label) ? -1 :0;
      } )
    }
  })
  .filter((section:any) => section.label.length > 0)
  console.log(data);
  return data;
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
    // return (
    //   <strong>{section.title}</strong>
    // )
    return ''
  }
  const getSectionSuggestions = (section:any) => {
    return section.label
  }
  const onSuggestionsFetchRequested = ({value}:any) => {
    setSuggest( getSuggestion(value) )
  }
  const enterKeyDown = (event:any) => {
    if(event.key === 'Enter' && value.length){
      const data = suggest.map(({label}:any) => {
        return label.filter(({label}:any) => label.toLowerCase().includes(value.toLowerCase()))[0];
      })[0]
      setValue(`${data.label} (${data.type})`);
    } 
  }
  useEffect(() => {
      const hanldeClick = (event:any) => {
        if(node.current && !node.current.contains(event.target)){
          enterKeyDown(event);
        }
      };

      document.addEventListener('mousedown', hanldeClick);
      return () => {
        document.removeEventListener('mousedown',hanldeClick);
      }
  },[])
  return (
    <Autosuggest 
      suggestions={suggest}
      inputProps={{
        placeholder:"Type medications",
        onChange: onChange,
        value: value,
        onKeyDown: enterKeyDown,
        ref: node
      }}
      multiSection={true}
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