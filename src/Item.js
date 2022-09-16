import React from "react";
import "./Item.css";

function Item(props) {
  return (
    <div className="item">
      <div className="image">
        <img src={"img/" + props.image} width="100%" alt="" />
      </div>
      <div className="title">{props.title}</div>
      <div className="rating">
        <p></p>
        Clasificacion:
        <select value={props.rating}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="actions">
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Item;
