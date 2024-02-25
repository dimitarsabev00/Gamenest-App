import React from "react";
import { navListItems, socialListItems } from "../../utils/constants";
import NavListItem from "./NavListItem";
import SocialListItem from "./SocialListItem";
import "./styles.scss";

const SideMenu: React.FC = () => {
  return (
    <div className="sideMenu-container">
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand-name">Gamenest</span>
      </a>
      <ul className="nav">
        {navListItems.map((item) => (
          <NavListItem key={item.id} item={item} />
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
        {/* <li>
          <a href="#">
            <i className="bi bi-meta"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-twitter-x"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-youtube"></i>
          </a>
        </li>
        <li>
          <a href="#" className="share">
            <i className="bi bi-share"></i>
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default SideMenu;
