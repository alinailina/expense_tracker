import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// Children
import Transaction from "./Transaction";

const History = () => {
  const { transactions } = useContext(GlobalContext);

  return transactions.length ? (
    <div>
      <h2>History</h2>
      <ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  ) : (
    <div>
      <h2>History</h2>
      <p>No transactions</p>
    </div>
  );
};

export default History;
