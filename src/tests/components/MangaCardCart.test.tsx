import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { favoriteMangas } from "../../components/data/MangaData";
import MangaCardCart from "../../components/MangaCardCart";

describe("Render Manga Card Cart", () => {
  it("Check to see if everything get's rendered properly", () => {
    render(
      <MemoryRouter>
        <MangaCardCart manga={favoriteMangas[0]} deleteManga={() => {}} />
      </MemoryRouter>
    );
    //? Make sure the link is present
    const mangaPageLink = screen.getAllByRole("link");
    mangaPageLink.forEach((link) =>
      expect(link).toHaveAttribute(
        "href",
        `/manga/${favoriteMangas[0].titleEnglish}`
      )
    );

    //? Make sure the manga cover is shown
    const mangaCover = screen.getByRole("img");
    expect(mangaCover).toHaveAttribute("src", favoriteMangas[0].imgJPG);

    //? Make sure the manga Title is present
    const mangaTitle = screen.getByRole("heading", {
      level: 1,
      name: favoriteMangas[0].titleEnglish,
    });
    expect(mangaTitle).toBeInTheDocument();

    //? Make sure the authors are present
    const authors = screen.getAllByRole("heading", { level: 3 });
    expect(authors).toHaveLength(favoriteMangas[0].authors.length);
    authors.forEach((author, index) => {
      expect(author).toHaveTextContent(favoriteMangas[0].authors[index]);
    });

    const deleteButton = screen.getByRole("button", { name: /X/i });
    expect(deleteButton).toBeInTheDocument();
  });
});
