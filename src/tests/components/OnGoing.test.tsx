import { MemoryRouter } from "react-router-dom";
import { it, expect } from "vitest";
import OnGoing from "../../components/OnGoing";
import { render, screen } from "@testing-library/react";
// import { favoriteMangas } from "../../components/data/MangaData";

describe("Popular component", () => {
  it("Make sure all fetched manga is rendered", () => {
    render(
      <MemoryRouter>
        <OnGoing />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading")).toHaveTextContent("OnGoing");
  });
});
