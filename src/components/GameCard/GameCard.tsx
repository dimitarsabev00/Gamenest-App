import React from "react";
import { Game } from "../../Types";
import GameRating from "./GameRating";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setGeneralFields } from "../../store";

type GameCardProps = {
  game: Game;
};

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const myLibrary: Game[] = useSelector(
    (state: RootState) => state.generalSlice.myLibrary
  );

  const dispatch = useDispatch();
  const handleAddToLibrary = (game: Game) => {
    dispatch(setGeneralFields({ myLibrary: [...myLibrary, game] }));
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gameCard">
        <img src={game.img} alt={game.title} className="img-fluid" />
        <a
          href="#"
          className={`like ${myLibrary.includes(game) ? "active" : undefined}`}
          onClick={() => handleAddToLibrary(game)}
        >
          <i className="bi bi-heart-fill"></i>
        </a>
        <div className="gameFeature">
          <span className="gameType">{game.level}</span>
          <GameRating rating={game.rating} />
        </div>
        <h4 className="gameTitle mt-4 mb-3">{game.title}</h4>
        <div className="gamePrice">
          {game.discount != 0 && (
            <>
              <span className="discount">
                <i>{game.discount * 100}%</i>
              </span>
              <span className="prevPrice">${game.price.toFixed(2)}</span>
            </>
          )}
          <span className="currentPrice">
            ${((1 - game.discount) * game.price).toFixed(2)}
          </span>
        </div>
        <a className="addBag" href="#">
          <i className="bi bi-bag-plus-fill"></i>
        </a>
      </div>
    </div>
  );
};

export default GameCard;
