import React, { useState } from "react";
import defaultAvatarMan from "../../assets/images/default-image-man.png";
import "./styles.scss";

type HeaderProps = {
  toggleActive: () => void;
};

const Header: React.FC<HeaderProps> = ({ toggleActive }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
    toggleActive();
  };

  return (
    <header>
      <a
        href="#"
        className={`menu ${menu ? "active" : undefined}`}
        onClick={toggleMenu}
      >
        <i className="bi bi-sliders"></i>
      </a>
      <div className="userItems">
        <a href="#" className="icon">
          <i className="bi bi-heart-fill"></i>
          <span className="like">{0}</span>
        </a>
        <a href="#" className="icon">
          <i className="bi bi-bag-fill"></i>
          <span className="bag">{0}</span>
        </a>
        <div className="avatar">
          <a href="#">
            <img src={defaultAvatarMan} alt="User Avatar" />
          </a>
          <div className="user">
            <span>User_00</span>
            <a href="#">View Profile</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
