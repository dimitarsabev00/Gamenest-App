import React, { ChangeEvent, useState } from "react";
import { Game } from "../../Types";
import { categoryListData } from "../../utils/constants";
import { GameCard } from "../../components";
import "./styles.scss";

type GamesProps = {
  games: Game[];
  reference: React.RefObject<HTMLElement>;
};

const Games: React.FC<GamesProps> = ({ games, reference }) => {
  const [data, setData] = useState(games);
  const [filters, setFilters] = useState(categoryListData);

  const handleFilterGames = (category: string) => {
    setFilters(
      filters.map((filter) => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );

    if (category === "All") {
      setData(games);
      return;
    }
    const filteredGames = games.filter((game) => game.category === category);
    setData(filteredGames);
  };

  const [text, setText] = useState("");

  const handleSearchGames = (e: ChangeEvent<HTMLInputElement>) => {
    setData(
      games.filter((game) =>
        game.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setText(e.target.value);
  };

  return (
    <section id="games" className="games" ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <div className="col-lg-8 d-flex align-items-center justify-content-start">
            <ul className="filters">
              {filters.map((filter) => (
                <li
                  key={filter._id}
                  className={`${filter.active ? "active" : undefined}`}
                  onClick={() => handleFilterGames(filter.name)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-end">
            <div className="search">
              <i className="bi bi-search"></i>
              <input
                type="text"
                name="search"
                value={text}
                placeholder="Search"
                onChange={handleSearchGames}
              />
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((game) => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
