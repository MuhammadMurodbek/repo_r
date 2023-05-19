import React from "react";
import "./style.css";

export const Button = (props: any) => {
  return (
    <button className="btn_events" data-testid="button_component" {...props}>
      <i
        className={`${props.iconname} ${props.colortype}-color`}
        data-testid="icon_element"
      ></i>
    </button>
  );
};
