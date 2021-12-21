import React, { FC } from "react";
import { Dropdown } from "..";

import { RowsIconSvg, RowsSelectedIconSvg, TilesIconSvg, TilesSelectedIconSvg } from "../../assets/images";
import "../../assets/components/itemscontrol.scss";

type Props = {
  sortingItems: Array<string>;
  mode?: ITEMS_CONTROL_MODE;
  action: (selectedMode: ITEMS_CONTROL_MODE) => void;
};

export enum ITEMS_CONTROL_MODE {
  ROWS = "ROWS",
  TILES = "TILES"
}

const ItemsControl: FC<Props> = ({ sortingItems, mode = ITEMS_CONTROL_MODE.ROWS, action }) => {
  let buttons;

  switch (mode) {
    case ITEMS_CONTROL_MODE.ROWS: {
      buttons = (
        <div className="items-control__buttons-wrapper">
          <div onClick={() => action(ITEMS_CONTROL_MODE.ROWS)} className="items-control__button">
            <img src={RowsSelectedIconSvg} className="items-control__icon" />
          </div>
          <div onClick={() => action(ITEMS_CONTROL_MODE.TILES)} className="items-control__button">
            <img src={TilesIconSvg} className="items-control__icon" />
          </div>
        </div>
      );
      break;
    }
    default:
      buttons = (
        <div className="items-control__buttons-wrapper">
          <div onClick={() => action(ITEMS_CONTROL_MODE.ROWS)} className="items-control__button">
            <img src={RowsIconSvg} className="items-control__icon" />
          </div>
          <div onClick={() => action(ITEMS_CONTROL_MODE.TILES)} className="items-control__button">
            <img src={TilesSelectedIconSvg} className="items-control__icon" />
          </div>
        </div>
      );
  }

  return (
    <div className="items-control">
      {/* <div className="items-control__row">
        <p className="items-control__sorting-label">Price sorting:</p>
        <Dropdown items={sortingItems} classes="items-control__dropdown" />
      </div> */}
      {buttons}
    </div>
  );
};

export default ItemsControl;
