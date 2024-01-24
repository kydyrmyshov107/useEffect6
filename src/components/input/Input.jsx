import React, { useEffect, useState } from "react";
import "./Input.css";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    console.log(inputValue.length);
    console.log("is working ");
    localStorage.setItem(
      "inputValue",
      inputValue ? JSON.stringify(inputValue) : ""
    );
  }, [inputValue]);

  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="localStorage"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
