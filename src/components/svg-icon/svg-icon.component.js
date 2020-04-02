import React from "react";

const SvgIcon = props => {
  const { icon, iconclass } = props;
  return (
    <svg className={`icon ${iconclass ? iconclass : icon}`}>
      <use xlinkHref={`/assets/icons-v7.svg#${icon}`} />
    </svg>
  );
};

export default SvgIcon;
