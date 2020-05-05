import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const EntriesTotal = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const debit = amounts
    .filter((a) => a > 0)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  const credit = amounts
    .filter((a) => a < 0)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  return (
    <div>
      <p>
        Income <span>{debit}</span>
      </p>
      <p>
        Expenses <span>{credit}</span>
      </p>
    </div>
  );
};

export default EntriesTotal;
