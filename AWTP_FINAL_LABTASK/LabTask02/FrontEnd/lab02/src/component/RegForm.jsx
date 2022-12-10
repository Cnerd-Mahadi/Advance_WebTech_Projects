import React, { useState } from "react";
import RegForm from "./SubmitForm";

export const Body = () => {
  const [inputText, setInputText] = useState({
    name: "",
    email: "",
    gender: "",
    country: "",
  });

  const handleTextChange = (event) => {
    const { name, value } = event.target;

    setInputText((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const handleClick = () => {
    console.log(inputText);
  };
  return (
    <SubmitForm
      textChange={handleTextChange}
      value={inputText}
      onClick={handleClick}
    />
  );
};
