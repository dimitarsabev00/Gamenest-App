import React from "react";
import { Header, SideMenu } from "../../components";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <main className="home-screen-container">
      <SideMenu />
      <div className="select-tab-content">
        <Header />
      </div>
    </main>
  );
};

export default Home;
