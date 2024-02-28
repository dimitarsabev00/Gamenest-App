import React, { useState } from "react";
import { navListItems, socialListItems } from "../../utils/constants";
import NavListItem from "./NavListItem";
import SocialListItem from "./SocialListItem";
import "./styles.scss";

type SideMenuProps = {
  active: boolean;
  sectionActive: (target: string) => void;
};
const SideMenu: React.FC<SideMenuProps> = ({ active, sectionActive }) => {
  const [navData, setNavData] = useState(navListItems);

  const handleNavClick = (id: number, target: string) => {
    const newNavData = navData.map((nav) => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    sectionActive(target);
    setNavData(newNavData);
  };
  return (
    <div className={`sideMenu-container ${active ? "active" : undefined}`}>
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Gamenest</span>
      </a>
      <ul className="nav">
        {navData.map((item) => (
          <NavListItem
            key={item._id}
            item={item}
            handleNavClick={handleNavClick}
          />
        ))}
      </ul>
      <ul className="social">
        {socialListItems.map((item) => (
          <SocialListItem
            key={item.id}
            item={item}
            className={`${item.icon === "bi-share" && "share"}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
