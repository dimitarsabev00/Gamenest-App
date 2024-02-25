import React from "react";

type NavListItemProps = {
  item: {
    name: string;
    icon: string;
  };
};

const NavListItem: React.FC<NavListItemProps> = ({ item }) => {
  return (
    <li>
      <a href="#">
        <i className={`bi ${item.icon}`}></i>{" "}
        <span className="navItemName">{item.name}</span>
      </a>
    </li>
  );
};

export default NavListItem;
