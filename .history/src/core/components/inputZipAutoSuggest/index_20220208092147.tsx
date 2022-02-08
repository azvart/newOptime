import React, {FC, useEffect, useCallback} from 'react';
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
  buttonText,
  setError,
  setBool,
}) => {

  useEffect(() => {
    setValue(value);
  },[value])
  const onSubmit = useCallback(() => {
    console.log(autocomplete);
    console.log(value);
  },[autocomplete, value]);
  useEffect(() => {

    const handleClick = (event:any) => {
      const { key } = event;
      if(key === 'Enter' && value.length > 0){
        onSubmit();
      }
    }
    document.addEventListener('keydown', handleClick, {capture: true, once: true});

    return () => {
      document.removeEventListener('keydown', handleClick);
    }
  },[value, autocomplete])
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
            // onClick={onSubmit}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  )
}

export default InputZipAutoSuggest;