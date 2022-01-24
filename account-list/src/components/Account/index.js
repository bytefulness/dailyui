import React from "react";
import "./Account.css";
import dots from "../../images/dots.png";

export default function Account(props) {
  function computeImageName(name, dataFormat = "png") {
    // Convert to lowercase first letter
    let imageName;

    // If includes space in prop.accountName; replace the space char with '-' char
    name.includes(" ")
      ? (imageName = name.toLowerCase().split(" ").join("-"))
      : (imageName = name.toLowerCase());

    return imageName + "." + dataFormat;
  }

  return (
    <article className="account">
      <img
        className="account__logo"
        src={
          process.env.PUBLIC_URL +
          `/images/${computeImageName(props.accountName, "png")}`
        }
      />
      <div className="account__platform">
        <h3 className="platform__title">{props.accountName}</h3>
        <a className="platform__link" href={"https://" + props.accountWebsite}>
          {props.accountWebsite}
        </a>
      </div>
      <h4 className="account__password">{props.accountPassword}</h4>
      <button className="account__settings">
        <img src={dots} alt="" />
      </button>
    </article>
  );
}
