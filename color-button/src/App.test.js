import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Button name is "click here"', () => {
  render(<App />);
  const linkElement = screen.getByRole("link", { name: /click here/i });
  expect(linkElement).toBeInTheDocument();
});

test("Background color of button is initially blue", () => {
  render(<App></App>);
  const linkElement = screen.getByRole("button", { name: /change to red/i });
  expect(linkElement).toHaveStyle({ backgroundColor: "blue" });
});

test("Background color will be changed", () => {
  render(<App></App>);
  const linkElement = screen.getByRole("button", { name: "Change to Red" });
  fireEvent.click(linkElement);
  expect(linkElement).toHaveStyle({ backgroundColor: "red" });
  expect(linkElement.textContent).toBe("Change to Blue");
});

test("Check box is checked yes", () => {
  render(<App></App>);
  const checkboxElement = screen.getByRole("checkbox", {
    name: "Disable button",
  });
  const buttonElement = screen.getByRole("button", { name: "Change to Red" });

  expect(checkboxElement).not.toBeChecked();

  // http://alphasis.info/2014/01/javascript-dom-input-checkbox-defaultchecked/
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
});

test("Color of button will be changed", () => {
  render(<App></App>);
  const buttonElement = screen.getByRole("button", { name: "Just button" });
  const checkElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });
  expect(buttonElement).toBeDisabled();
  fireEvent.click(checkElement);
  expect(buttonElement).toHaveStyle({ backgroundColor: "gray" });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});

