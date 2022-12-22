import * as React from "react";
import { render, screen } from "@testing-library/react";
import AddTodo from "../AddTodo";

describe("AddTodo component", () => {
  test("renders the submit button", () => {
    render(<AddTodo />);
    const button: HTMLElement = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
