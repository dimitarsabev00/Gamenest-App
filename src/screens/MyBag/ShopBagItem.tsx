import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setGeneralFields } from "../../store";
import "./styles.scss";
import { Game } from "../../Types";

type ShopBagItemProps = { index: number; shopItem: Game };

const ShopBagItem: React.FC<ShopBagItemProps> = ({ shopItem, index }) => {
  const myBag: Game[] = useSelector(
    (state: RootState) => state.generalSlice.myBag
  );
  const dispatch = useDispatch();
  const handleRemoveFromBag = (shopItem: Game) => {
    dispatch(
      setGeneralFields({
        myBag: myBag.filter((item: Game) => item._id !== shopItem._id),
      })
    );
  };

  return (
    <tr className="shopBagItem">
      <th scope="row">{index + 1}</th>
      <td>
        <img src={shopItem.img} alt="" className="img-fluid" />
      </td>
      <td>{shopItem.title}</td>
      <td>${shopItem.price.toFixed(2)}</td>
      <td>{shopItem.discount * 100}%</td>
      <td>${(shopItem.price * (1 - shopItem.discount)).toFixed(2)}</td>
      <td>
        <a href="#" onClick={() => handleRemoveFromBag(shopItem)}>
          <i className="bi bi-trash"></i>
        </a>
      </td>
    </tr>
  );
};

export default ShopBagItem;
