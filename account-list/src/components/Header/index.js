import React from "react";
import "./Header.css";

// Icons
import bell from "../../images/bell.png";
import search from "../../images/search.png";

export default function Header(props) {
  return (
    <header>
      <div className="header__search-box">
        <img className="search-icon" src={search} alt="" />
        <input
          className="search-input"
          type="search"
          placeholder="Find Account"
          onChange={props.handleSearch}
        />
      </div>
      <img className="header__icon" src={bell} alt="" />
      <div className="header__profile">
        <span>EA</span>
      </div>
    </header>
  );
}
