import React from "react";
import "./List.css";

function List(props) {
  return (
    <div className="list">
      {props.items.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
}

export default List;
