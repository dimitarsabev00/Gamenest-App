import React from "react";

type StoresProps = {
  reference: React.RefObject<HTMLElement>;
};

const Stores: React.FC<StoresProps> = ({ reference }) => {
  return (
    <section id="stores" className="stores" ref={reference}>
      <h1>Stores</h1>
    </section>
  );
};

export default Stores;
