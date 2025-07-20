import { render, screen } from "@testing-library/react";
import cover from "../../assets/img/website-cover.jpg";
import { MemoryRouter } from "react-router-dom";
import Home from "../../pages/Home";

describe("Home Page", () => {
  it("Renders Home page correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <Home chosenManga={[]} />
      </MemoryRouter>
    );

    //? Background Image renders properly
    expect(container.firstChild).toHaveStyle(`background-image: url(${cover})`);

    expect(
      screen.getByRole("link", { name: /manga book icon/i })
    ).toHaveAttribute("href", "/");

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "My Favorite Manga"
    );
  });
});
