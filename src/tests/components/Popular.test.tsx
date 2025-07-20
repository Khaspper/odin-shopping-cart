import { MemoryRouter } from "react-router-dom";
import { it, expect } from "vitest";
import Popular from "../../components/Popular";
import { render, waitFor } from "@testing-library/react";

describe("Popular component", () => {
  beforeEach(() => {
    {
      vi.spyOn(window, "fetch").mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => ({
          data: [
            {
              title_english: "Naruto",
              title_japanese: "Naruto.J",
              synopsis: "synopsis",
              authors: [{ name: "First Author" }, { name: "Second Author" }],
              score: 9.0,
              genres: [{ name: "First Genre" }, { name: "Second Genre" }],
              images: {
                jpg: { large_image_url: "/naruto.jpg" },
                webp: { large_image_url: "/naruto.webp" },
              },
            },
          ],
        }),
      } as unknown as Response);
    }
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Make sure all fetched manga is rendered", async () => {
    render(
      <MemoryRouter>
        <Popular />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(window.fetch).toHaveBeenCalledTimes(1);
    });
  });
});
