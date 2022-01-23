import React from "react";

// Components
import Header from "./components/Header";
import Accounts from "./components/Accounts";

// Style
import "./app.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Accounts />
    </div>
  );
}
