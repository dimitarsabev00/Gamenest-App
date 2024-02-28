import React from "react";

type MyBagProps = {
  reference: React.RefObject<HTMLElement>;
};
const MyBag: React.FC<MyBagProps> = ({ reference }) => {
  return (
    <section id="myBag" className="myBag" ref={reference}>
      <h1>MyBag</h1>
    </section>
  );
};

export default MyBag;
