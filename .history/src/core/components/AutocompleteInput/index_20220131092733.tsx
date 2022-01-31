import React, {
  FC,
  KeyboardEvent,
  useCallback,
  useRef,
  useEffect,
  useState,
  useMemo,
} from "react";
import Autocomplete from "react-autocomplete";

import "../../assets/components/autocomplete.scss";

type Props = {
  placeholder?: string;
  autocomplete: Array<{
    label: string;
  }>;
  classes?: string;
  value: string;
  setValue: (value: string) => void;
  onSubmit?: any;
  selected?: boolean;
  grouping?:boolean;
  filtered?:any;
  setFiltered?:any
};

const AutocompleteInput: FC<Props> = ({
  autocomplete = [],
  classes,
  value,
  setValue,
  placeholder = "",
  onSubmit,
  selected,
  grouping,
}) => {
  const enterHandler = (e: KeyboardEvent) => {
    if (onSubmit) {
      if (e.key === "Enter") onSubmit(value);
    }
  };
  const [show,setShow] = useState(true)
  const onClick = useCallback((e:any,index:any) => {
    const labels:any = Array.from(document.getElementsByClassName('label'))[index];
    setValue(labels.innerText);
    setShow(false);
  },[setValue,show]);

    const items = useMemo(() => {
      if(grouping === true){
    const filtering:any = autocomplete.filter((items:any) => items.label.label.toLowerCase().includes(value.toLowerCase()));
    const arr = [...new Set(filtering.map((e:any) => ({_id:e._id})))]
    const filteringGroup = autocomplete.filter((e:any) => arr.some((x:any) => e._id === x._id))
    return filteringGroup;
  }else{
    return [];
  }
  },[autocomplete,value]);

  const renderList = () => {
      return (
        <>
        {items.map((item:any,index:any) => (<div key={index}>
          <div className={"autocomplete__item"} key={index} onClick={(e) => onClick(e,index)}>
              <div className="label" key={index}>{item.label.label}</div>

              <span >({item.label.type})</span>
          </div>

    </div>))

        }
        </>
      )
      
  };
  return (
    <>
    <Autocomplete
      getItemValue={(item) => {
        return grouping === true ? item.label.label : item.label
      }}
      items={autocomplete}
      shouldItemRender={(item: any, value) => {
        return grouping === true ? item.label.label.toLowerCase().includes(value) : item.label.toLowerCase().includes(value);

      }}
      renderItem={(item,isHighlighted)=>grouping === true ? (<div className="none"></div>) : <div className="autocomplete" ><div className="autocomplete__item">{item.label}</div></div>}
      value={value}
      menuStyle={grouping === true ? {display:"none"} : {borderRadius:"3px",boxShadow:"0 2px 12px rgba(0, 0, 0, 0.1)",marginTop:"2px",zIndex:"2",overflow:"auto",position:'absolute',background:'rgba(255, 255, 255, 0.9)',maxHeight:"300px",left:"5px",top:"50px",width:"661px"}}
      onChange={(e: any) => {
        setShow(true)
        setValue(e.target.value)}}
        onSelect={(value) => {
          if(grouping === true){
            return false;
          }else{
            setValue(value)
          }
        }}
      renderInput={(props) => {
        return (
          <input
            {...props}
            aria-invalid="false"
            className={classes}
            placeholder={placeholder}
            onKeyDown={enterHandler}
            maxLength={30}
            value={value}
          />
        );
      }}
    />
    {grouping === true ? <div className="menu">{ show === true ? renderList() : null}</div> : null}
  </>
  );
};

export default AutocompleteInput;
