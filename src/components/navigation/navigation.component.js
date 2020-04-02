import React from "react";
import NavigationItem from "./navigation.item.component";

const Navigation = props => {
  const headerNav = [];

  return (
    <ul className="menu">
      {headerNav.map(item => {
        return <NavigationItem key={item.ID} item={item} />;
      })}
    </ul>
  );
};

export default Navigation;
