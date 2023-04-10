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
    <div>
      <p >{inputBalance}<span style={{marginLeft: "5px"}}>₽</span></p>

      <input type="number" value={inputBalance} onChange={handleBalanceChange} />
      
    </div>
  );
};

export default UserInput;