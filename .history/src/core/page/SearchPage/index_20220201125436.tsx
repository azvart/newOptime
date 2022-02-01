import React, {useState, useEffect, useCallback} from "react";
import { Footer, InputField, InputAutoSuggest } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import TopMed from "../../store/topMed/action";
import SearchZip from "../../store/SearchZip/action";
import { ClearZip } from "../../store/SearchZip/action";
import CurrentMed from "../../store/currentMed/action";
import AutoSuggestInput from '../../components/AutoSuggestInput';
import {
  HeaderLogoImage,
  LocationIconSvg,
  SearchIconSvg,
} from "../../assets/images";
import "../../assets/pages/search.scss";

export const SearchPage: React.FC = () => {
  const history = useHistory();
  const state = useSelector((state:any) => state.topMedReducer.top);
  const grouping = useSelector((state:any) => state.topMedReducer.group)
  const [group,setGroup] = useState(false);
  const zip = useSelector((zip:any) => zip.zipReducer);
  const data = useSelector((state:any) => state.currentReducer);
  const [cookies, setCookies] = useCookies();
  const [search, setSearch] = useState("");
  const [error,setError] = useState(false);
  const [zipError,setZipError] = useState(false);
  const [codes, setCodes] = useState("");
  const [groups,setGroups] = useState([]);
  const [filteredItems,setFilteredItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(TopMed({authorization: `Bearer ${cookies['token']}`, 'x-account-id':cookies['account']}));
    
  }, []);

  useEffect(() => {
    if(codes){
      dispatch(SearchZip(codes));
    }
    
    return () => {dispatch(ClearZip())}
    
  },[codes,dispatch]);
  useEffect(() => {
    if(data.name){
        history.push({
        pathname:"/results",
        state:{
          name: search,
          location: zip.filter((item:any) => item.label === codes),
        }
      })
    }
  }, [data]);
  const submitAction = () => {
    if(search && codes && state.filter((item:any) => item.label === search || item.label.label === search)[0]){
      dispatch(CurrentMed(search,{authorization: `Bearer ${cookies['token']}`, 'x-account-id':cookies['account']}))
      return true;
    }else{
      codes ? setZipError(false) :setZipError(true);
      search && state.filter((item:any) => item.label.label === search)[0] ? setError(false) : setError(true);
      return false;
    }
  }
  return (
    <div className="search-page">
      <div>
        <div className="search-page__header">
          <img
            src={HeaderLogoImage}
            className="search-page__header-logo"
            alt=""
          />
        </div>
        <div className="search-page__content">
          <h1 className="search-page__title">
            Save on your medications today!
          </h1>

          <div className="search-page__input-wrapper">
            <InputAutoSuggest />
          <InputField
              iconUrl={SearchIconSvg}
              value={search}
              placeholder="Search Medications"
              onChange={setSearch}
              onSubmit={submitAction}
              buttonText="Find lowest prices"
              autocomplete={search.length >= 3 && group === false ? state : []}
              errorHandle={error}
              grouping={true}
              filtered={filteredItems}
              setFiltered={setFilteredItems}
              // error="Please type correct medication"
            />
            {error ? (
              <p className="error_message">Please choose correct medication</p>
            ) : (
              <p></p>
            )}
            <InputField
              iconUrl={LocationIconSvg}
              value={codes}
              placeholder="ZIP (enter at least 3 characters)"
              onChange={setCodes}
              onSubmit={submitAction}
              buttonText="Find lowest prices"
              autocomplete={zip}
              errorHandle={zipError}
              haveSubmit
              // error="Please type correct ZIP code"
            />
            {zipError ? (
              <p className="error_message">Please choose correct Zip code</p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
