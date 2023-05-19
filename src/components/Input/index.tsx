import React from "react";
import "./style.css";

export const Input = (props: any) => {
  return (
    <input {...props} className="input_style" data-testid="input_element" />
  );
};
