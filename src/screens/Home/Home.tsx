import React, { useState } from "react";
import { Header, SideMenu } from "../../components";
import "./Home.scss";

const Home: React.FC = () => {
  const [active, setActive] = useState(false);
  const handleToggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <main className="home-screen-container">
      <SideMenu active={active} />
      <div className={`select-tab-content ${active ? "active" : undefined}`}>
        <Header toggleActive={handleToggleActive} />
      </div>
    </main>
  );
};

export default Home;
