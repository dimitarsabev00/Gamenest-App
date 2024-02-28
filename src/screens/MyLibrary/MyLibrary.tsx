import React from "react";

type MyLibraryProps = {
  reference: React.RefObject<HTMLElement>;
};
const MyLibrary: React.FC<MyLibraryProps> = ({ reference }) => {
  return (
    <section id="myLibrary" className="myLibrary" ref={reference}>
      <h1>MyLibrary</h1>
    </section>
  );
};

export default MyLibrary;
