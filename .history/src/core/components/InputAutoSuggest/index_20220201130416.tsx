import React, {FC} from 'react';
import AutoSuggestInput from '../AutoSuggestInput';
import '../../assets/components/inputField.scss';



const InputAutoSuggest:FC<any> = ({autocomplete = [], iconUrl= ''}) => {



  return (
    <div style={{display: "flex", flexGrow: 1, alignItems:"flex-end"}}>
      <div className={`input-field`}>
        <div className='input-field__row'>
            <div className='input-field__icon-wrapper'>
                <img src={iconUrl} alt="" className='input-field__icon' />
            </div>
            <AutoSuggestInput autocomplete={autocomplete}  />
        </div>
        {}
      </div>
    </div>
  )
}
export default InputAutoSuggest;

