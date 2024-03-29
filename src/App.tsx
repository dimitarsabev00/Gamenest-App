import { useEffect, useRef, useState } from "react";
import { Header, SideMenu } from "./components";
import "./App.scss";
import { Home, Games, MyBag, MyLibrary } from "./screens";
import { gamesData } from "./utils/constants";
import { Game } from "./Types";
import { useSelector } from "react-redux";
import { RootState } from "./store";
const App = () => {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState<Game[]>([]);

  const homeRef = useRef<HTMLDivElement>(null);
  const gamesRef = useRef<HTMLDivElement>(null);
  const myLibraryRef = useRef<HTMLDivElement>(null);
  const myBagRef = useRef<HTMLDivElement>(null);

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
    sections.forEach((section) => {
      const ref = section.ref as React.MutableRefObject<HTMLDivElement>;
      if (ref.current) {
        ref.current.classList.remove("active");
        if (ref.current.id === target) {
          ref.current.classList.add("active");
        }
      }
    });
  };

  useEffect(() => {
    setGames(gamesData);
  }, []);

  const myLibrary: Game[] = useSelector(
    (state: RootState) => state.generalSlice.myLibrary
  );
  const myBag: Game[] = useSelector(
    (state: RootState) => state.generalSlice.myBag
  );

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
          {games && games.length > 0 && (
            <MyLibrary myLibrary={myLibrary} reference={myLibraryRef} />
          )}
          {games && games.length > 0 && (
            <MyBag myBag={myBag} reference={myBagRef} />
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
