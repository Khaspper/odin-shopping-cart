import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import MangaCard from "../../src/components/MangaCard";
import { MemoryRouter } from "react-router-dom";
import { favoriteMangas } from "../../src/components/data/MangaData";
import "@testing-library/jest-dom";

const manga = favoriteMangas[0];

describe("MangaCard Component", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <MangaCard manga={manga} />
      </MemoryRouter>
    );
    //? Link renders
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/manga/${manga.titleEnglish}`);

    //? Title renders
    expect(within(link).getByText(manga.titleEnglish)).toBeInTheDocument();

    //? Image renders
    const image = screen.getByRole("img", {
      name: `${manga.titleEnglish} manga cover`,
    });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", manga.imgJPG);
  });
});
