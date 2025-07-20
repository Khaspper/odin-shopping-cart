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

Omg I did it

I finished the project

MVP!!!

it works everything works the styling is butt cheeks

but everything freaking works!!!!

the tests I made for ongoing and communityfavorites component is not written they just follow popular components test so I didn't really see the point in it... anyways... I freaking did it...

this has to be the hardest project I have done I understood everything tho... I feel like I learned a lot especially with async and await and TDD...

TDD isn't that bad I supposed

AND THE PERFORMANCE IS AT 100!!!!!!!
