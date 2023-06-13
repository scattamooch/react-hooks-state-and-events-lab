import React, {useState} from "react";

function Item({ name, category }) {

const [addItem, setItemAdded] = useState(false);

function handleClick() {
  setItemAdded(!addItem);
}

const itemClass = addItem ? "in-cart" : "";
const buttonText = addItem ? "Remove from Cart" : "Add to Cart";
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
