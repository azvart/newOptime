import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeaderLogoImage } from '../../assets/images';
import {useSearch} from '../../hooks/useSearch';


/// library hooks

import { useDispatch, useSelector, shallowEqual } from 'react-redux';

///custom hooks
import useUpdateEffect from '../../hooks/useUpdateEffect';

///actions

import TopMed from '../../store/topMed/action';

///style
import "../../assets/pages/result.scss";



const Header:FC = () => {
  const {search, setName, setLocation}:any = useSearch();
  const { top }:any = useSelector((state:any) => state.topMedReducer, shallowEqual);
  useUpdateEffect(() => {
    console.log("custom hook",top);
  },[top]);
  useEffect(() => {
    console.log("standart hook",top)
  },[top])
  return(
    <div className="result-page__header">
      <div className="result-page__row">
        <Link to="/">
          <img src={HeaderLogoImage} alt="" />
        </Link>
        <div className="input_search_error">

        </div>
      </div>
      <div className="result-page__row">
        <div className="input_search_error fild_animation">

        </div>
      </div>
    </div>
  )
}

export default Header;