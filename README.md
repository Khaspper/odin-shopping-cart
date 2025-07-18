#What I learned

When running lighthouse I got this error called using third party cookies to fix that I had to use `crossOrigin="anonymous"` in my image Tags we don't like third party cookies because of cross-site tracking

When writing tests I wrote a basic test but you need to wrap components with `<MemoryRouter>...</ MemoryRouter>` if the component has a Link tag from `react-router-dom` in it
