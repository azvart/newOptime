import React, {FC, useEffect} from 'react';
import AutoSuggestInput from '../AutoSuggestInput';
import '../../assets/components/inputField.scss';


const InputAutoSuggest:FC<any> = ({autocomplete = [], iconUrl= '', placeholder='', value='', setValue = () => {}}) => {

  useEffect(() => {
    setValue(value);
  },[value]);

  return (
    <div style={{display: "flex", flexGrow: 1, alignItems:"flex-end"}}>
      <div className={`input-field`}>
        <div className='input-field__row'>
            <div className='input-field__icon-wrapper'>
                <img src={iconUrl} alt="" className='input-field__icon' />
            </div>
            <AutoSuggestInput  input={value} setInput={setValue} autocomplete={autocomplete} placeholder={placeholder}  />
        </div>
        {}
      </div>
    </div>
  )
}
export default InputAutoSuggest;

