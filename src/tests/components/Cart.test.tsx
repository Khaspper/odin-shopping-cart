import { render, screen } from "@testing-library/react";
import Cart from "../../components/Cart";
import { MemoryRouter } from "react-router-dom";
import { favoriteMangas } from "../../components/data/MangaData";

describe("Cart Components", () => {
  it("Renders Correctly", () => {
    render(
      <MemoryRouter>
        <Cart chosenManga={favoriteMangas} setChosenManga={() => {}} />
      </MemoryRouter>
    );

    //? Check to see if Navbar is being rendered
    const navBar = screen.getByRole("link", { name: /manga book icon/i });
    expect(navBar).toBeInTheDocument();

    //? Check to see if the mangas the user choose is present
    const mangasToBuy = screen.getAllByRole("link", { name: /manga cover/i });
    expect(mangasToBuy).toHaveLength(favoriteMangas.length);

    mangasToBuy.forEach((manga, index) => {
      expect(manga).toHaveAttribute(
        "href",
        `/manga${favoriteMangas[index].titleEnglish}`
      );
    });

    // const mangasTitle = screen;
  });
});
