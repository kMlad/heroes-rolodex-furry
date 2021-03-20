import React from "react";
import "./search-box-styles.css";

const SearchBox = (props) => {
  return (
    <div className="search-container">
      <input
        type="search"
        className="search"
        placeholder={props.placeholder}
        onChange={props.handleChange}
      ></input>
    </div>
  );
};

export default SearchBox;
