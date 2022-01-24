import React from "react";
import Account from "../Account";
import "./Accounts.css";

export default function Accounts() {
  return (
    <section className="accounts">
      <div className="header">
        <span>Account</span>
        <span>Account Password</span>
        <span>Filter</span>
      </div>
      <Account />
      <Account />
    </section>
  );
}
