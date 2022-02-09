import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { HeaderLogoImage } from '../../assets/images';
import {useSearch} from '../../hooks/useSearch';
import "../../assets/pages/result.scss";



const Header:FC = () => {

  const search = useSearch();


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