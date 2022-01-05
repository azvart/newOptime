import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { DropdownCloseSvg, DropdownOpenSvg } from "../../assets/images";

import "../../assets/components/dropdown.scss";

type Props = {
  items: Array<string> | any;
  classes?: string;
  chosen?: any;
  setChosen?: any;
  label?: string;
};

const Dropdown: FC<Props> = ({ items, classes, chosen, setChosen, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (items[0]) {
      setChosen(items[0]);
    }
  }, [items]);
  useEffect(() => {
    if(chosen){
      setChosen(chosen);
    }
  },[chosen])
  const onItemClick = (name: string) => {
    setChosen(name);
  };

  const icon = isOpen ? (
    <img src={DropdownCloseSvg} alt="" />
  ) : (
    <img src={DropdownOpenSvg} alt="" />
  );

  const ref = useRef(null);

  const clickListener = useCallback((e: MouseEvent) => {
    if (!(ref.current! as any)?.contains(e.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", clickListener);
    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, [clickListener]);

  return (
    <div
      className={`dropdown ${classes}`}
      ref={ref}
      onClick={() => setIsOpen(!isOpen)}
    >
      <label>{label}</label>
      <div className="dropdown__header">
        <p>{chosen}</p>

        {icon}
      </div>
      {isOpen && (
        <div className="dropdown__items">
          {items.map((item: any) => {
            return (
              <div
                className="dropdown__item"
                key={item}
                onClick={() => onItemClick(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
