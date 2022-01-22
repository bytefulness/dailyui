import React from "react";

// Components
import Account from "./components/Account";
import Header from "./components/Header";

// Style
import "./app.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Account />
    </div>
  );
}
