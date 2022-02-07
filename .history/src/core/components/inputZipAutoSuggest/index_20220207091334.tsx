import React, {FC, useEffect} from 'react';
import AutocompleteZip from '../AutocompleteZip';
import '../../assets/components/inputField.scss';



const InputZipAutoSuggest:FC<any> = ({
  autocomplete=[],
  iconUrl='',
  placeholder='', 
  value='',
  setValue= () => {},
  error,
  haveSubmit = false,
  onSubmit = () => {},
  buttonText,
}) => {

  useEffect(() => {
    setValue(value);
  },[value])
  return (
    <div style={{display: "flex", flexGrow: 1, alignItems:"flex-end"}}>
      <div className={`input-field ${error === true ? 'error' : null} `}>
        <div className='input-field__row'>
            <div className='input-field__icon-wrapper'>
                <img src={iconUrl} alt="" className='input-field__icon' />
            </div>
            <AutocompleteZip  input={value} setInput={setValue} autocomplete={autocomplete} placeholder={placeholder}  />
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