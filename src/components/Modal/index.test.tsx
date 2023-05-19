import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ModalEdit } from "./";

test("button click testing", () => {
  const setState = jest.fn();
  jest.spyOn(React, "useState").mockImplementationOnce(setState);

  render(
    <ModalEdit
      modal={{ isOpen: true, id: null, subId: null }}
      state={[{}]}
      setState={() => {}}
      setModal={() => {}}
    />
  );
  const button = screen.getByTestId("submit_button_save");
  fireEvent.click(button);
  expect(button).toBeDefined();
});
