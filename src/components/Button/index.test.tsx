import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./";

test("check button exist", () => {
  render(<Button />);
  const linkElement = screen.getAllByTestId("button_component");
  expect(linkElement).toBeTruthy();
});

test("check icon element exists", () => {
  render(<Button />);
  const iconElement = screen.getAllByTestId("icon_element");
  expect(iconElement).toBeDefined();
});
