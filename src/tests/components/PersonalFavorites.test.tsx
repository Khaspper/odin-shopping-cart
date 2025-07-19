import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PersonalFavorites from "../../components/PersonalFavorites";
import { MemoryRouter } from "react-router-dom";
import { favoriteMangas } from "../../components/data/MangaData";

describe("PersonalFavorite Component", () => {
  it("Renders correctly", () => {
    render(
      <MemoryRouter>
        <PersonalFavorites />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "My Favorite Manga"
    );

    const links = screen.getAllByRole("link", { name: /manga cover/i });

    expect(links).toHaveLength(favoriteMangas.length);

    links.forEach((link, inx) => {
      expect(link).toHaveAttribute(
        "href",
        `/manga/${favoriteMangas[inx].titleEnglish}`
      );
    });
  });
});
