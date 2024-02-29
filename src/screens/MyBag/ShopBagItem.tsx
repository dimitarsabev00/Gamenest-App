import React from "react";
import "./styles.scss";
import { Game } from "../../Types";

type ShopBagItemProps = { index: number; shopItem: Game };

const ShopBagItem: React.FC<ShopBagItemProps> = ({ shopItem, index }) => {
 

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
        <a href="#">
          <i className="bi bi-trash"></i>
        </a>
      </td>
    </tr>
  );
};

export default ShopBagItem;
