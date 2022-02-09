import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { HeaderLogoImage } from '../../assets/images';

const Header:FC = () => {



  return(
    <div className="result-page__header">
      <div className="result-page__row">
        <Link to="/">
          <img src={HeaderLogoImage} alt="" />
        </Link>
      </div>
    </div>
  )
}