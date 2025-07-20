import Shop from "../../pages/Shop";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
// import { favoriteMangas } from "../../components/data/MangaData";

describe("Shop Page", () => {
  it("Checks to see if it renders properly", () => {
    render(
      <MemoryRouter>
        <Shop chosenManga={[]} />
      </MemoryRouter>
    );

    //? Check if popular Link is present
    const popularTitle = screen.getByRole("link", { name: /Popular/i });
    expect(popularTitle).toBeInTheDocument();

    //? Check if popular Link is present
    const onGoingPopularTitles = screen.getByRole("link", {
      name: /On Going/i,
    });
    expect(onGoingPopularTitles).toBeInTheDocument();

    //? Check if popular Link is present
    const favorites = screen.getByRole("link", {
      name: /Community Favorites/i,
    });
    expect(favorites).toBeInTheDocument();
  });
});
