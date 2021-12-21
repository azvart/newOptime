import React, { FC } from "react";
import { ReactSVG } from "react-svg";

import "../../assets/components/plugsvg.scss";

type Props = {
  classes?: string;
  url: string;
  title: string;
  alt?: string;
};

const Plug: FC<Props> = ({ classes = "", url, title, alt }) => {
  return (
    <ReactSVG
      src={url}
      role="img"
      aria-label={alt || `${title} svg`}
      className={`plug-svg ${classes}`}
      loading={() => <div className={`plug-svg-loading ${classes}`} />}
      fallback={() => <div className={`plug-svg-error ${classes}`} />}
    />
  );
};

export default Plug;
