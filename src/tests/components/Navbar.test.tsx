import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../../components/Navbar";

//? Images
import mangaIcon from "../../assets/img/manga-icon.png";
import shoppingCartIcon from "../../assets/img/shopping-cart-icon.png";

describe("Navbar Component", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    //? Image Link renders properly
    const imgLink = screen.getByRole("link", { name: "manga book icon" });
    expect(imgLink).toHaveAttribute("href", `/`);

    //? Manga icon renders properly
    const mangaIconImg = screen.getByRole("img", { name: "manga book icon" });
    expect(mangaIconImg).toHaveAttribute("src", mangaIcon);

    //? Search input renders properly
    expect(
      screen.getByRole("searchbox", { name: "Search Manga" })
    ).toBeInTheDocument();

    //? Cart Icon renders properly
    const cartIcon = screen.getByRole("img", { name: "shopping cart icon" });
    expect(cartIcon).toHaveAttribute("src", shoppingCartIcon);

    //? Shop Link
    const shopLink = screen.getByText("Shop");
    expect(shopLink).toHaveAttribute("href", `/shop`);
  });
});
