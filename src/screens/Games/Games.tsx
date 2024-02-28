import React from "react";
import { Game } from "../../Types";

type GamesProps = {
  games: Game[];
  reference: React.RefObject<HTMLElement>;
};

const Games: React.FC<GamesProps> = ({ reference }) => {
  return (
    <section id="games" className="games" ref={reference}>
      <h1>Games</h1>
    </section>
  );
};

export default Games;
