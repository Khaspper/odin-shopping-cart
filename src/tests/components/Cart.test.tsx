import { render, screen } from "@testing-library/react";
import Cart from "../../components/Cart";
// import { MemoryRouter } from "react-router-dom";

describe("Cart Components", () => {
  it("Renders Correctly", () => {
    render(<Cart />);
    const cart = screen.getByText("Cart");
    expect(cart).toBeInTheDocument();
  });
});
