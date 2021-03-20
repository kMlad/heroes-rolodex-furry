import React from "react";
import "./card-list.styles.css";
import Card from "../card/card.component.jsx";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.heroes.map((hero) => {
        return <Card hero={hero} key={hero.id} />;
      })}
    </div>
  );
};

export default CardList;
