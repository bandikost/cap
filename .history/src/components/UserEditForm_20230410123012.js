import React, { useState } from "react";

const UserInput = ({ user, name, balance, onChange }) => {
  const [inputName, setInputName] = useState(name);
  const [inputBalance, setInputBalance] = useState(balance);

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleBalanceChange = (e) => {
    setInputBalance(e.target.value);
  };

  return (
    <div className="cell">
      <p>{inputName}</p>
      <input type="text" value={inputName} onChange={handleNameChange} />
      <hr />
      <p>{inputBalance}</p>
      <input type="number" value={inputBalance} onChange={handleBalanceChange} />
      <button onClick={() => onChange(user, inputName, inputBalance)}>Save</button>
    </div>
  );
};

export default UserInput;
