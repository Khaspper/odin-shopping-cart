import { render, screen } from "@testing-library/react";
import MangaPage from "../../pages/MangaPage";
import { MemoryRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { favoriteMangas } from "../../components/data/MangaData";

describe("Manga Page", () => {
  const manga = favoriteMangas[0];

  it("Checks to see if Manga Page Rendered correctly", () => {
    render(
      <MemoryRouter initialEntries={[`/manga/${manga.titleEnglish}`]}>
        <Routes>
          <Route
            path="/manga/:mangaName"
            element={<MangaPage setChosenManga={() => {}} />}
          />
        </Routes>
      </MemoryRouter>
    );

    //? Check if the Navbar is present
    expect(
      screen.getByRole("link", { name: /manga book icon/i })
    ).toHaveAttribute("href", "/");

    //? Check to see if the image is rendered
    expect(
      screen.getByRole("img", {
        name: `Cover manga image for ${manga.titleEnglish}`,
      })
    ).toBeInTheDocument();

    //? Check to see if both english and japanese heading is rendered

    const englishTitle = screen.getByRole("heading", {
      level: 1,
      name: manga.titleEnglish,
    });
    expect(englishTitle).toHaveTextContent(manga.titleEnglish);

    const japaneseTitle = screen.getByRole("heading", {
      level: 2,
      name: manga.titleJapanese,
    });
    expect(japaneseTitle).toHaveTextContent(manga.titleJapanese);

    //? Check to see if Authors is present
    const authors = screen.getAllByRole("author");
    authors.forEach((author, index) => {
      expect(author).toHaveTextContent(manga.authors[index]);
    });

    //? Check to see if score is present
    const score = screen.getByRole("score");
    expect(score).toHaveTextContent(`${manga.score} / 10`);

    //? Check to see if synopsis is present
    const synopsis = screen.getByText(manga.synopsis);
    expect(synopsis).toBeInTheDocument();

    //? Check to see if genres is present
    const genres = screen.getAllByRole("listitem");
    genres.forEach((genre, index) => {
      expect(genre).toHaveTextContent(manga.genres[index]);
    });

    //? Check to see if Add to cart Button is present
    const addToCartButton = screen.getByRole("button", {
      name: /Add to cart/i,
    });
    expect(addToCartButton).toBeInTheDocument();
  });
});
