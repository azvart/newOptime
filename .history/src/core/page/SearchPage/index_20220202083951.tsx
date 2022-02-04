import React, {useState, useEffect, useCallback} from "react";
import { Footer, InputField } from "../../components";
import InputAutoSuggest from '../../components/InputAutoSuggest';
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
  const zip = useSelector((zip:any) => zip.zipReducer.sort((a:any,b:any) => {return (a.label < b.label)? -1 :(a.label > b.label) ? 1 : 0 }));
  const data = useSelector((state:any) => state.currentReducer);
  const [cookies, setCookies] = useCookies();
  const [search, setSearch] = useState("");
  const [error,setError] = useState(false);
  const [zipError,setZipError] = useState(false);
  const [codes, setCodes] = useState("");
  const [groups,setGroups] = useState([]);
  const [filteredItems,setFilteredItems] = useState([]);
  const [bool, setBool] = useState({search:false, zip:false});
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
  // const submitAction = () => {
  //   const item = state.map(({label}:any) => {
  //     return {
  //       label: label.filter(({label}:any) => label === search)
  //     }
  //   }).filter(({label}:any) => label.length > 0)[0]
  //   console.log(item);
  //   if(search && codes && item.label[0].label){
  //     dispatch(CurrentMed(search,{authorization: `Bearer ${cookies['token']}`, 'x-account-id':cookies['account']}))
  //     return true;
  //   }else{
  //     codes ? setZipError(false) :setZipError(true);
  //     search && state.filter((item:any) => item.label.label === search)[0] ? setError(false) : setError(true);
  //     return false;
  //   }
  // }
  const escapedRegexCharacters =(str:any) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  const submitAction = () => {
    const escaped = escapedRegexCharacters(search.trim());
    const regex = new RegExp('^' + escaped, 'i');
    if(search.length > 0){
    const searchSubmit = state.map(({label}:any) => {
      return {
        label: label.filter(({label}:any) => regex.test(label))
      }
    })
    .filter(({label}:any) => label.length > 0)
    const sorting = searchSubmit.map(({label}:any) => label).flat()
    .sort((a:any,b:any) => {
      return (a.label < b.label) ? -1 : (a.label > b.label) ? 1 : 0;
    }).map((e:any) => {
      return {
        label:[{label: e.label, type: e.type}]
      }
    })[0].label[0].label;
    
    setSearch(sorting);
  }else{

    setError(true);

  }
  // if( codes.length >=3 ){

  //   setCodes(zip[0].label)

  // }else{

  //   setZipError(true);

  // }

  codes.length >= 3 ? setCodes(zip[0].label)  :  setZipError(true);

  zipError && error ? dispatch(CurrentMed(search,{authorization: `Bearer ${cookies['token']}`, 'x-account-id':cookies['account']})) : false;
}
  useEffect(() => {
    if(search.length > 0){
      setError(false);
    }
  },[search])
  useEffect(() => {
    if(codes.length > 0 ){
      setZipError(false);
    }
  },[codes]);


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
            <InputAutoSuggest
              value={search}
              setValue={setSearch}
              autocomplete={state}
              iconUrl={SearchIconSvg}
              placeholder="Search Medications"
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