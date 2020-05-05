import React from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import EntriesTotal from "./components/EntriesTotal";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <EntriesTotal />
        <History />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
