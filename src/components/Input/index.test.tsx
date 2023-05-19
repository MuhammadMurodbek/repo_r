import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from "./";

test("check button exist", () => {
  render(<Input />);
  const inputElement = screen.getAllByTestId("input_element");
  expect(inputElement).toBeTruthy();
});
