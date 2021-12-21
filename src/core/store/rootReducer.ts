import { combineReducers } from "redux";
import searchReducer from "./SearchMed/searchReducer";
import zipReducer from "./SearchZip/zipReducer";
import topMedReducer from "./topMed/topMedReducer";
import currentReducer from "./currentMed/currentReducer";
import priceReducer from "./Price/priceReducer";
import couponReducer from "./coupon/couponReducer";
const rootReducer = combineReducers({
  searchReducer,
  zipReducer,
  topMedReducer,
  currentReducer,
  priceReducer,
  couponReducer,
});


export type OptimeRootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;