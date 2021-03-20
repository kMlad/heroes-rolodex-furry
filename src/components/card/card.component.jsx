import React from "react";
import "./card-styles.css";

const Card = (props) => {
  return (
    <div key={props.hero.id} className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.hero.id}?set=set4&size=180x180`}
      ></img>
      <h2>{props.hero.name}</h2>
      <p>{props.hero.email}</p>
    </div>
  );
};

export default Card;
