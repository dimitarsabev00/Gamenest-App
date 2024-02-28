import { useEffect, useRef, useState } from "react";
import { Header, SideMenu } from "./components";
import "./App.scss";
import { Creators, Games, Home, MyBag, MyLibrary, Stores } from "./screens";
import { gamesData } from "./utils/constants";
import { Game } from "./Types";

const App = () => {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState<Game[]>([]);

  const homeRef = useRef(null);
  const gamesRef = useRef(null);
  const storesRef = useRef(null);
  const creatorsRef = useRef(null);
  const myLibraryRef = useRef(null);
  const myBagRef = useRef(null);

  const sections = [
    {
      name: "home",
      ref: homeRef,
      active: true,
    },
    {
      name: "games",
      ref: gamesRef,
      active: false,
    },
    {
      name: "stores",
      ref: storesRef,
      active: false,
    },
    {
      name: "creators",
      ref: creatorsRef,
      active: false,
    },
    {
      name: "myLibrary",
      ref: myLibraryRef,
      active: false,
    },
    {
      name: "myBag",
      ref: myBagRef,
      active: false,
    },
  ];
  const handleToggleActive = () => {
    setActive((prev) => !prev);
  };

  const handleSectionActive = (target: string) => {
    sections.map((section) => {
      section.ref.current.classList.remove("active");
      if (section.ref.current.id === target) {
        section.ref.current.classList.add("active");
      }
      return section;
    });
  };

  useEffect(() => {
    setGames(gamesData);
  }, []);
  return (
    <main>
      <SideMenu active={active} sectionActive={handleSectionActive} />
      <div className={`select-tab-content ${active ? "active" : undefined}`}>
        <Header toggleActive={handleToggleActive} />
        <div className="contain-fluid">
          {games && games.length > 0 && (
            <Home games={games} reference={homeRef} />
          )}
          {games && games.length > 0 && (
            <Games games={games} reference={gamesRef} />
          )}
          {games && games.length > 0 && <Stores reference={storesRef} />}
          {games && games.length > 0 && <Creators reference={creatorsRef} />}
          {games && games.length > 0 && <MyLibrary reference={myLibraryRef} />}
          {games && games.length > 0 && <MyBag reference={myBagRef} />}
        </div>
      </div>
    </main>
  );
};

export default App;
