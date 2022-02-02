import React from 'react';
import {useState, useEffect, useRef} from 'react';
import Autosuggest from 'react-autosuggest';
import '../../assets/components/autocomplete.scss';



const AutoSuggestInput = ({autocomplete = [], placeholder='', input='', setInput, ref}:any) => {
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
    // const data:any =  autocomplete.map((section:any) => {
    //   const filtering =  {
    //     label: section.label.filter((labels:any) => labels.label.toLowerCase().includes(value.toLowerCase()))
    //   }
    //   return filtering;
    // })
    // .filter((section:any) => section.label.length > 0);
  //  const group = data.map((items:any) => autocomplete.find((title:any) => items.title === title.title))
  //  .sort((a:any, b:any) => {
  //    return (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0;
  //  })
    // return data;
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
      <span className='autocomplete__item' >{suggestion.label} ({suggestion.type})</span>
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
  const enterKeyDown = (event:any) => {
    console.log(ref);
    if(event.key === 'Enter' && input.length){
      const data = suggest.map(({label}:any) => {
        return label.filter(({label}:any) => label.toLowerCase().includes(input.toLowerCase()))[0];
      })[0]
      setInput(data.label);
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
        onKeyDown: enterKeyDown,
        ref: ref
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