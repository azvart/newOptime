import React, { ChangeEvent, FC, useEffect, useState, useCallback, useRef } from "react";
import AutocompleteInput from "../AutocompleteInput";

import "../../assets/components/inputField.scss";

type Props = {
  classes?: string;
  autocompleteClasses?: string;
  placeholder?: string;
  value: string;
  iconUrl?: string;
  onChange: (value: string) => void;
  haveSubmit?: boolean;
  buttonText?: string;
  // autocomplete?: Array<{
  //   label: string;
  // }>;
  autocomplete: any;
  errorHandle?: boolean;
  error?: string;
  selected?: boolean;
  grouping?:boolean;
  filtered?:any;
  setFiltered?:any,
  ref?:any
  setError?:any,
  setBool?:any,
  open?:boolean

};

const InputField: FC<Props> = ({
  classes,
  autocompleteClasses,
  placeholder = "",
  value,
  iconUrl,
  onChange,
  haveSubmit = false,
  buttonText,
  autocomplete = [],
  errorHandle,
  error,
  selected,
  grouping,
  filtered,
  setFiltered,
  setError,
  setBool,
}) => {
  useEffect(() => {
    onChange(value);
  },[value]);
  useEffect(() => {},[autocomplete]);
  const onSubmit = useCallback(() => {
    try{
    console.log(value)
    console.log(autocomplete);
    const data = autocomplete.filter(({label}:any) => label === value);
    const firstElem = autocomplete[0].label;
    if(data.length === 0){
      onChange(firstElem);
    }
    setBool(true);
    return;
  }catch(e){
    setError(true)
    setBool(false);
    return;
  }
  },[value, autocomplete])
  useEffect(() => {
    const handleClick = (event:any) => {
      const { key } = event;
      if(key === 'Enter' && value.length > 0){
        
          onSubmit()
        
       
      }
    }
      document.addEventListener('keydown', handleClick);
    return () => {
      document.removeEventListener('keydown', handleClick);
    }
  },[ onSubmit ]);
  return (
    <div style={{ display: "flex", flexGrow: 1, alignItems: "flex-end" }}>
      <div
        className={`input-field ${classes} ${
          errorHandle === true ? "error" : classes
        }`}
      >
        <div className="input-field__row">
          <div className="input-field__icon-wrapper">
            <img src={iconUrl} className="input-field__icon" alt="" />
          </div>

            <AutocompleteInput
              filtered={filtered}
              setFiltered={setFiltered}
              grouping={grouping}
              placeholder={placeholder}
              classes={
                autocompleteClasses === undefined
                  ? "input-field__input"
                  : autocompleteClasses
              }
              value={value}
              setValue={onChange}
              autocomplete={autocomplete}
              selected={selected}
            />

        </div>
        {haveSubmit && (
          <button
            className="input-field__submit-button"
            onClick={() => onSubmit()}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
