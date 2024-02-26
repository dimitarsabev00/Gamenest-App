import React, { useState, useEffect } from "react";
import "./styles.scss";

type GameRatingProps = {
  rating: number;
};

const GameRating: React.FC<GameRatingProps> = ({ rating }) => {
  const [stars, setStars] = useState<Array<number>>([]);

  const generateStars = () => {
    let stars = [];
    if (rating > 5 || rating < 1) {
      return [];
    }
    for (let i = 0; i < rating; i++) {
      stars.push(i);
    }
    return stars;
  };

  useEffect(() => {
    setStars(generateStars());
  }, [rating]);

  return (
    <div className="gameRating">
      {stars.map((_, index) => (
        <i key={index} className="bi bi-star-fill"></i>
      ))}
    </div>
  );
};

export default GameRating;
