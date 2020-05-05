import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuidv4 } from "uuid";

const AddTransaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState();

  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuidv4(),
      name: name,
      amount: +amount,
      // + turns string into a number
    };

    addTransaction(newTransaction);
    setName("");
    setAmount("");
  };

  return (
    <div>
      <h2>Add new transaction</h2>
      <form onSubmit={onSubmit}>
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label for="amount">Amount:</label>
        <input
          type="number"
          name="name"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
