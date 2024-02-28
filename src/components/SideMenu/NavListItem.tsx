import React from "react";

type NavListItemProps = {
  item: {
    name: string;
    icon: string;
    target: string;
    active: boolean;
    _id: number;
  };
  handleNavClick: (_id: number, target: string) => void;
};

const NavListItem: React.FC<NavListItemProps> = ({ item, handleNavClick }) => {
  return (
    <li>
      <a
        href="#"
        className={`${item.active ? "active" : undefined}`}
        onClick={() => handleNavClick(item._id, item.target)}
      >
        <i className={`bi ${item.icon}`}></i>{" "}
        <span className="navItemName">{item.name}</span>
      </a>
    </li>
  );
};

export default NavListItem;
