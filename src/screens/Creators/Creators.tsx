import React from "react";

type CreatorsProps = {
  reference: React.RefObject<HTMLElement>;
};

const Creators: React.FC<CreatorsProps> = ({ reference }) => {
  return (
    <section id="creators" className="creators" ref={reference}>
      <h1>Creators</h1>
    </section>
  );
};

export default Creators;
