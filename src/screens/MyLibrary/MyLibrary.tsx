import React from "react";
import { Game } from "../../Types";
import { GameCard } from "../../components";

type MyLibraryProps = {
  myLibrary: Game[];
  reference: React.RefObject<HTMLElement>;
};
const MyLibrary: React.FC<MyLibraryProps> = ({ myLibrary, reference }) => {
  return (
    <section id="myLibrary" className="myLibrary" ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>My Library</h1>
        </div>
        <div className="row">
          {myLibrary.length === 0 ? (
            <h2>Your library is empty</h2>
          ) : (
            myLibrary.map((item) => <GameCard key={item._id} game={item} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default MyLibrary;
