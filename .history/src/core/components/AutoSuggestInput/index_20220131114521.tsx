import {useState} from 'react';
import Autosuggest from 'react-autosuggest';




const AutoSuggestInput = ({autocomplete = []}) => {
  const [suggest, setSuggest] = useState(autocomplete);
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
  return (
    <Autosuggest 
    multiSection={true}
    suggestions={suggest}
    onSuggestionsFetchRequested={}
    inputProps={{
      placeholder: "Type medications",
      onChange: () => setSuggest,
      value: value
    }}
    />
  )
}




export default AutoSuggestInput;