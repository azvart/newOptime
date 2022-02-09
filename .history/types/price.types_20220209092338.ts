interface IPriceObj{
  amount: string;
  currency: string;
  display: string;
  quantity: number;
}

interface IRetailer{
  id: string;
  isBigNameRetailer: boolean,
  isFavorite: boolean;
  isMembershipRequired: boolean;
  location: ILocation;
  logo: any;
  membershipDetailsUrl: null | string;
  name: string;
}

interface ILocation{
  adressLine1: null | string;
  addressLIne2: null | string;
  city: string;
  coordinates: ICoordinates ;
  hours: IHours[] ;
  isFavorite: boolean;
  phoneNumber: string;
  state: string;
  zipCode: string;

}


interface ICoordinates {
  latitude: number;
  longitude: number;
}

interface IHours {
  close: IClose;
  open: IOpen;
}
interface IOpen {
  day: string;
  time: string;
}
interface IClose {
  day: string;
  time: string;
}



export interface IPrice {
  couponId: null | string;
  isLowestPrice: boolean;
  pbmId: string;
  price: IPriceObj;
  priceLevel: string;
  retailer: IRetailer;
  formId: string;
  location: string;
  quantity: string;
  data: any;
}


export type IRequestPriceParamsService = {
  quantity: [number],
  formulationId:any,
  'b-g': string,
  dn: string,
  gpi14: string,
  ubi: boolean,
  searchLocation: string,
  searchLocationZipCode: string
}