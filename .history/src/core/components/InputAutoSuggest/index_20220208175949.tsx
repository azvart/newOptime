import React, {FC, useEffect} from 'react';
import AutoSuggestInput from '../AutoSuggestInput';
import '../../assets/components/inputField.scss';


const InputAutoSuggest:FC<any> = ({
  autocomplete = [],
  iconUrl= '',
  placeholder='',
  value='',
  setValue = () => {},
  error,
  haveSubmit = false,
  setBool,
  onSubmit = () => {},
  bool,
  buttonText}) => {

  useEffect(() => {
    setValue(value);
  },[value]);
  useEffect(() => {},[bool]);
  return (
    <div style={{display: "flex", flexGrow: 1, alignItems:"flex-end"}}>
      <div className={`input-field ${error === true ? 'error' : null} `}>
        <div className='input-field__row'>
            <div className='input-field__icon-wrapper'>
                <img src={iconUrl} alt="" className='input-field__icon' />
            </div>
            <AutoSuggestInput  input={value} setInput={setValue} autocomplete={autocomplete} placeholder={placeholder} setBool={setBool} bool={bool}  />
        </div>
        {haveSubmit && (
          <button
            className='input-field__submit-button'
            onClick={onSubmit}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  )
}
export default InputAutoSuggest;

