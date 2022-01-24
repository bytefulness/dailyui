import React from "react";
import Account from "../Account";
import notFoundImage from "../../images/not-found.png";

import "./Accounts.css";

export default function Accounts(props) {
  console.log(props.accounts);

  // Account List
  const accountList = props.accounts.map((account) => (
    <Account key={account.id} {...account} />
  ));

  if (!props.accounts.length) {
    return (
      <section className="accounts-none">
        <img className="none__image" src={notFoundImage} />
        <h1 className="none__title">Opps! We didn't find any account</h1>
        <p className="none__explanation">
          Looks like here is ultimately empty. Let's add some accounts for you.
        </p>
        <button className="button button--primary">Add Account</button>
      </section>
    );
  }

  return (
    <section className="accounts">
      <div className="accounts__header">
        <span>Account</span>
        <span>Account Password</span>
        <span>Filter</span>
      </div>

      <div className="accounts__container">{accountList}</div>
    </section>
  );
}
