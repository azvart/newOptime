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
  const escapedRegexCharacters =(str:any) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  const onSubmit = useCallback(() => {
    console.log('search')
    const escaped = escapedRegexCharacters(value.trim());
    const regex = new RegExp('^' + escaped, 'i');

    if(value.length > 0){
    const searchSubmit = autocomplete.map(({label}:any) => {
      return {
        label: label.filter(({label}:any) => regex.test(label))
      }
    })
    .filter(({label}:any) => label.length > 0)
    if(searchSubmit.length === 0){
      setError(true)
      return;
    }
    const sorting = searchSubmit.map(({label}:any) => label).flat()
    .sort((a:any,b:any) => {
      return (a.label < b.label) ? -1 : (a.label > b.label) ? 1 : 0;
    }).map((e:any) => {
      return {
        label:[{label: e.label, type: e.type}]
      }
    })[0].label[0].label; 
    setValue(sorting);
    setBool(true);
    return;
  }else{
    setBool(false);
    setError(true);
    return ;

  }
  },[value]);

  useEffect(() => {
    const handleClick = (event:any) => {
      const { key } = event;
      if(key === 'Enter' && value.length > 0){
        onSubmit()
      }

      document.addEventListener('keydown', handleClick, {passive: true});
      return () => {
        document.removeEventListener('keydown', handleClick);
      }
    }
  },[value]);
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

export default InputZipAutoSuggest;