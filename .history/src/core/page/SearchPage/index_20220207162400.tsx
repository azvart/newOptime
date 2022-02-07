import React, {useState, useEffect, useCallback, useRef} from "react";
import { Footer, InputField } from "../../components";
import InputAutoSuggest from '../../components/InputAutoSuggest';
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import TopMed from "../../store/topMed/action";
import SearchZip from "../../store/SearchZip/action";
import { ClearZip } from "../../store/SearchZip/action";
import CurrentMed from "../../store/currentMed/action";
import InputZipAutoSuggest from '../../components/inputZipAutoSuggest';
import {
  HeaderLogoImage,
  LocationIconSvg,
  SearchIconSvg,
} from "../../assets/images";
import "../../assets/pages/search.scss";

export const SearchPage: React.FC = () => {
  const history = useHistory();
  const state = useSelector((state:any) => state.topMedReducer.top);
  const zip = useSelector((zip:any) => zip.zipReducer.sort((a:any, b:any) => {return (a.label < b.label) ? -1 : (a.label > b.label) ? 1 : 0;}) );
  const data = useSelector((state:any) => state.currentReducer);
  const [cookies, setCookies] = useCookies();
  const [search, setSearch] = useState("");
  const [error,setError] = useState(false);
  const [zipError,setZipError] = useState(false);
  const [codes, setCodes] = useState("");
  const [searchBool, setSearchBool] = useState(false);
  const [zipBool, setZipBool] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(TopMed({authorization: `Bearer ${cookies['token']}`, 'x-account-id':cookies['account']}));
  }, []);

  useEffect(() => {
    if(codes.length){
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
    if(searchSubmit.length === 0){
      setError(true)
      return;
    }
    const sorting = searchSubmit.map(({label}:any) => label).flat()
    .sort((a:any,b:any) => {
      return (a.label < b.label) ? -1 : (a.label > b.label) ? 1 : 0;
    }).map((e:any) => {
      return {
        label:[{label: e.label, type: e.type}]
      }
    })[0].label[0].label; 
    setSearchBool(true);
    setSearch(sorting);
    return ;
  }else{
    setSearchBool(false);
    setError(true);
    return ;

  }

  
}

// const submitActionZip = useCallback((str:string) => {
//     console.log('callback codes', str);
//     if(zip.length === 1){
//       console.log(codes);
//       setZipBool(true);
//       return;
//     }
//     if(zip.length > 1){
//       setCodes(zip[0].label);
//       setZipBool(true);
//       return;
//     }
//     if(zip.length === 0){
//       setZipError(true);
//       setZipBool(false);
//       return;
//     }
// },[zip]);

const submitActionZip = (value:string) => {
  console.log(value);
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
  useEffect(() => {
    setCodes(codes);
  },[codes]);
  useEffect(() => {

    if(zipBool && searchBool ){
      const timer = setTimeout(() => {
        dispatch(CurrentMed(search,{authorization: `Bearer ${cookies['token']}`, 'x-account-id':cookies['account']}))
      }, 500)
      return () => {
        clearTimeout(timer);
      }  
    }
    
  },[zipBool,searchBool]);

  useEffect(() => {
    
    const handleClick = (event:any) => {
     
      const {key} = event;
      if(key === 'Enter'){
        if(search.length){
          submitAction();
        }
        if(codes.length){
          submitActionZip(codes)
        }
      }
    }

    document.addEventListener('keydown', handleClick);

    return () => {
      document.removeEventListener('keydown', handleClick);
    }
  },[]);

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
              error={error}
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
              onSubmit={submitActionZip}
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
