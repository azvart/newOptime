import {useState} from 'react';
import Autosuggest from 'react-autosuggest';




const AutoSuggestInput = () => {
  const [suggest, setSuggest] = useState([]);
  const [value, setValue] = useState('');

  return (
    <Autosuggest 
    inputProps={{
      placeholder: "Type medications",
      onChange: () => setSuggest,
      value: value
    }}
    />
  )
}




export default AutoSuggestInput;