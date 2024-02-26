import { useEffect, useRef, useState } from "react";
import { Header, SideMenu } from "./components";
import "./App.scss";
import { Home } from "./screens";
import { gamesData } from "./utils/constants";
import { Game } from "./Types";

const App = () => {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState<Game[]>([]);

  const handleToggleActive = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    setGames(gamesData);
  }, []);

  return (
    <main className="main-screen-container">
      <SideMenu active={active} />
      <div className={`select-tab-content ${active ? "active" : undefined}`}>
        <Header toggleActive={handleToggleActive} />
        <div className="contain-fluid">
          {games && games.length > 0 && <Home games={games} />}
        </div>
      </div>
    </main>
  );
};

export default App;
