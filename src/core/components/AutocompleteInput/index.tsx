import React, {
  FC,
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
  selected?: boolean;
  grouping?:boolean;
  filtered?:any;
  setFiltered?:any
  ref?:any
};

const AutocompleteInput: FC<Props> = ({
  autocomplete = [],
  classes ='',
  value ='',
  setValue = () => {},
  placeholder = "",
  selected ='',
  grouping = '',
}) => {  
  return (
    <div>
    <Autocomplete
      getItemValue={(item) => {
        return item.label
      }}
      items={autocomplete}
      shouldItemRender={(item: any, value) => {
        return item.label.toLowerCase().includes(value);

      }}
      renderItem={(item,isHighlighted)=><div className={`autocomplete`} key={item.label} ><div className={`autocomplete__item`} style={{background : isHighlighted ? '#ff4b9c' : 'white', color: isHighlighted ? '#fff': '#7d7d7d' }}>{item.label}</div></div>}
      value={value}
      menuStyle={{borderRadius:"3px",boxShadow:"0 2px 12px rgba(0, 0, 0, 0.1)",marginTop:"2px",zIndex:2,overflow:"auto",position:'absolute',background:'rgba(255, 255, 255, 0.9)',maxHeight:"300px",left:"5px",top:"50px",width:"661px"}}
      onChange={(e: any) => {
        setValue(e.target.value)

      }}
      onSelect={(val) => {
          setValue(val);
        }}
        renderInput={(props) => {
        return (
          <input
            {...props}
            aria-invalid="false"
            className={classes}
            placeholder={placeholder}
            maxLength={30}
            value={value}
          />
        );
      }}
    />
  </div>
  );
};

export default AutocompleteInput;
