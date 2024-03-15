import React from "react";
import "./styles.scss";
import { Game } from "../../Types";
import { GameCard, GamesSwiper } from "../../components";

type HomeProps = {
  games: Game[];
  reference: React.RefObject<HTMLElement>;
};

const Home: React.FC<HomeProps> = ({ games, reference }) => {
  return (
    <section id="home" className="home active" ref={reference}>
      <div className="container-fluid">
        <div className="row">
          <GamesSwiper games={games} />
        </div>
        <div className="row mb-4 mt-4 ">
          <div className="col-lg-6">
            <h2 className="sectionTitle">Top Popular Games</h2>
          </div>
          {/* <div className="col-lg-6 d-flex justify-content-end align-items-center">
            <a href="#" className="viewMore">
              View More Games <i className="bi bi-arrow-right"></i>
            </a>
          </div> */}
        </div>
        <div className="row cards">
          {games.slice(0, 4).map((game) => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
