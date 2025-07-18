import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import MangaCard from "../../components/MangaCard";
import { MemoryRouter } from "react-router-dom";
import { favoriteMangas } from "../../components/data/MangaData";
import "@testing-library/jest-dom";
import { beforeAll } from "vitest";

const manga = favoriteMangas[0];

describe("MangaCard Component", () => {
  let link: HTMLElement;
  let image: HTMLElement;
  beforeAll(() => {
    render(
      <MemoryRouter>
        <MangaCard manga={manga} />
      </MemoryRouter>
    );
    link = screen.getByRole("link");
    image = screen.getByRole("img", {
      name: `${manga.titleEnglish} manga cover`,
    });
  });

  it("renders correctly", () => {
    //? Link renders
    expect(link).toHaveAttribute("href", `/manga/${manga.titleEnglish}`);

    //? Title renders
    expect(within(link).getByText(manga.titleEnglish)).toBeInTheDocument();

    //? Image renders
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", manga.imgJPG);
  });
});
