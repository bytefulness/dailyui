import React from "react";
import data from "./data";

// Components
import Header from "./components/Header";
import Accounts from "./components/Accounts";

// Style
import "./app.css";

export default function App() {
  const [accounts, setAccounts] = React.useState(data);

  function handleSearch(event) {
    const input = event.target;

    if (input.value) {
      setAccounts((prevAccounts) => {
        return prevAccounts.filter((prevAccounts) => {
          return Object.keys(prevAccounts).some((key) =>
            prevAccounts[key]
              .toString()
              .toLowerCase()
              .includes(input.value.toLowerCase())
          );
        });
      });
    } else {
      setAccounts(data);
    }
  }

  return (
    <div className="app">
      <Header accounts={accounts} handleSearch={handleSearch} />
      <Accounts accounts={accounts} />
    </div>
  );
}
