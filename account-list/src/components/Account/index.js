import React from "react";
import "./Account.css";
import dots from "../../images/dots.png";

export default function Account() {
  return (
    <article className="account">
      <img
        className="account__logo"
        src={process.env.PUBLIC_URL + "/images/dropbox.png"}
      />
      <div className="account__platform">
        <h3 className="platform__title">Dropbox</h3>
        <span className="platform__link">www.dropbox.com</span>
      </div>
      <h4 className="account__password">123456</h4>
      <button className="account__settings">
        <img src={dots} alt="" />
      </button>
    </article>
  );
}
