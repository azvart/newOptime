import React, { FC, useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie";
import "../../assets/components/tileitems.scss";
import axios from "axios";
import {adress} from '../../../../types/env';
type Props = {
  name: string;
  price: string;
  index: number;
  label?: string;
  onClick: (num: number) => void;
  distance?: any;

  retailerId?: string;
  retailerName?: string;
  retailerLogo?: {
    imageUrl: string;
  };
  quantityDisplay?: string;
  priceCurrency?: string;
  pbmId?: string;
  partnerId?: null;
  ndc?: string;
  lowPriceAmount?: string;
  locationPhoneNumber?: string;
  locationId?: string;
  isOtcDrug?: boolean;
  highPriceAmount?: null;
  formulationId?: string;
  drugUrlSlug?: string;
  drugName?: string;
  drugId?: any;
  dosageDisplay?: string;
};

const TileItem: FC<Props> = ({
  name,
  price,
  index,
  onClick,
  label,
  distance,

  retailerId,
  retailerName,
  retailerLogo,
  quantityDisplay,
  priceCurrency,
  pbmId,
  partnerId,
  ndc,
  lowPriceAmount,
  locationPhoneNumber,
  locationId,
  isOtcDrug,
  highPriceAmount,
  formulationId,
  drugUrlSlug,
  drugName,
  drugId,
  dosageDisplay,
}) => {
  const [url, setUrl]: any = useState("");
  const [cookies, setCookies] = useCookies();
  const payload = useMemo(() => {
    return {
      retailerId,
      retailerName,
      retailerLogo: {
        imageUrl: retailerLogo?.imageUrl,
      },
      quantityDisplay,
      priceCurrency,
      pbmId,
      partnerId,
      ndc,
      lowPriceAmount,
      locationPhoneNumber,
      locationId,
      isOtcDrug,
      highPriceAmount,
      formulationId,
      drugUrlSlug,
      drugName,
      drugId,
      dosageDisplay,
    };
  }, [
    retailerId,
    retailerName,
    retailerLogo,
    quantityDisplay,
    priceCurrency,
    pbmId,
    partnerId,
    ndc,
    lowPriceAmount,
    locationPhoneNumber,
    locationId,
    isOtcDrug,
    highPriceAmount,
    formulationId,
    drugUrlSlug,
    drugName,
    drugId,
    dosageDisplay,
  ]);

 

  const LinkCoupon = () => {
    axios({
      method: "POST",
      url: `${adress}/api/coupon/get`,
      data:{
        data:payload,
        headers:{
          authorization: `Bearer ${cookies['token']}`, 
          'x-account-id':cookies['account']
        }
      }

    }).then((res:any) => {
      setUrl(res.data.url)
    });
  }
  useEffect(() => {
    if(url && LinkCoupon){
      window.open(url);
    }
  }, [url]);
  return (
    <div className="tile-item">
      <p className="tile-item__name">{name}</p>
      {label && <p className="tile-item__label">{label}</p>}
      <div className="tile-item__content">
        <p className="tile-item__price">{price}</p>
        {distance && <p>{distance}</p>}
        <button className="tile-item__button" onClick={LinkCoupon}>
          Get Coupon
        </button>
      </div>
    </div>
  );
};

export default TileItem;
