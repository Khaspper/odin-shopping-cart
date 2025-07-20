#What I learned

When running lighthouse I got this error called using third party cookies to fix that I had to use `crossOrigin="anonymous"` in my image Tags we don't like third party cookies because of cross-site tracking

When writing tests I wrote a basic test but you need to wrap components with `<MemoryRouter>...</ MemoryRouter>` if the component has a Link tag from `react-router-dom` in it including it's children

We "console.log" a `container` by doing this
`describe("Home Page", () => {
  it("Renders Home page correctly", () => {
    const { container, debug } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    debug(container);
  });
});`

to "console.log" a `asFragment` we have to import prettyDOM from `@testing-library/dom` and do this
`console.log(prettyDOM(asFragment()))`

While writing the FetchManga.tsx code I learned that you need to make your api the exact shape of the json file you are parsing through

anything you are waiting for to be rendered use await waitfor...
