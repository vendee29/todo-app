import * as React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  const mockClick = jest.fn(() => console.log("clicked"));

  test(`renders the button with the text 'Button'`, () => {
    render(<Button text="Button" onClick={mockClick} />);
    const button: HTMLElement = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Button");
  });
});
