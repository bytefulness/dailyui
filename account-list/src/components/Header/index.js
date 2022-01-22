import React from "react";
import "./Header.css";

// Icons
import bell from "../../images/bell.png";
import search from "../../images/search.png";

export default function Header() {
  return (
    <header>
      <div className="header__search-box">
        <img className="search-icon" src={search} alt="" />
        <input
          className="search-input"
          type="text"
          placeholder="Find Account"
        />
      </div>
      <img className="header__icon" src={bell} alt="" />
      <div className="header__profile">
        <span>EA</span>
      </div>
    </header>
  );
}
