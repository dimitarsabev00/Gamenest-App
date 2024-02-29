import React, { useEffect, useState } from "react";
import ShopBagItem from "./ShopBagItem";
import "./styles.scss";
import { Game } from "../../Types";
import { useDispatch } from "react-redux";
import { setGeneralFields } from "../../store";

type MyBagProps = {
  reference: React.RefObject<HTMLElement>;
  myBag: Game[];
};
const MyBag: React.FC<MyBagProps> = ({ myBag, reference }) => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const handleTotalPayment = () => {
    let total = myBag
      .map((item) => item.price * (1 - item.discount))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return total;
  };

  const handleCheckout = () => {
    dispatch(setGeneralFields({ myBag: [] }));
  };

  useEffect(() => {
    setTotal(handleTotalPayment());
  }, [myBag]);

  return (
    <section id="myBag" className="myBag" ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>My Bag</h1>
        </div>
        {myBag.length === 0 ? (
          <h2>Your bag is empty</h2>
        ) : (
          <>
            <div className="row">
              <div className="table-responsive">
                <table className="shopBagTable table table-borderless align-middle ">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Preview</th>
                      <th scope="col">Game</th>
                      <th scope="col">Price</th>
                      <th scope="col">Discount</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>

                  <tbody>
                    {myBag.map((item, index: number) => (
                      <ShopBagItem
                        index={index}
                        key={item._id}
                        shopItem={item}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row d-flex justify-content-between mt-5">
              <div className="col-lg-2 align-items-center">
                <p className="itemCount">Total Items: {myBag.length}</p>
              </div>
              <div
                className="col-lg-10 d-flex justify-content-end"
                onClick={handleCheckout}
              >
                <div className="payment">
                  Total: ${total.toFixed(2)}
                  <a href="#">
                    Check out <i className="bi bi-wallet-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MyBag;
