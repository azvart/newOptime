import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeaderLogoImage } from '../../assets/images';
import {useSearch} from '../../hooks/useSearch';

///custom hooks
import useUpdateEffect from '../../hooks/useIsFirstRender';

///actions

import TopMed from '../../store/topMed/action';

///style
import "../../assets/pages/result.scss";



const Header:FC = () => {

  const {search, setName, setLocation}:any = useSearch();
  useUpdateEffect(() => {
    console.log(search);
  },[search]);
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