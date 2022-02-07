import React, { ChangeEvent, FC, useEffect, useState } from "react";
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
  onSubmit?: any;
  // autocomplete?: Array<{
  //   label: string;
  // }>;
  autocomplete: any;
  errorHandle?: boolean;
  error?: string;
  selected?: boolean;
  grouping?:boolean;
  filtered?:any;
  setFiltered?:any
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
  onSubmit,
  autocomplete = [],
  errorHandle,
  error,
  selected,
  grouping,
  filtered,
  setFiltered,
}) => {
  const submitAction = (e:any) => {
    if (onSubmit) onSubmit(value);
  };
  useEffect(() => {
    onChange(value);
  },[value]);
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
              onSubmit={submitAction}
              autocomplete={autocomplete}
              selected={selected}
            />

        </div>
        {haveSubmit && (
          <button
            className="input-field__submit-button"
            onClick={(e) => submitAction(e)}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
