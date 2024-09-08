# React Forge Route

A React routing library inspired by [React Router Dom](https://reactrouter.com/web/guides/quick-start)

## Installation (while learning)

```bash
  git clone git@github.com:RamanSharma100/react-forge-route.git
  cd react-forge-route
  pnpm install
  pnpm dev
```

## Installation (when published)

```bash
  pnpm install react-forge-route
```

## Usage

```tsx
main.tsx;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Router from 'react-forge-route'; // or import Router from "../lib";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
```

```tsx
import { Route, Routes, useRouter } from 'react-forge-route'; // or import { Route, Routes, useRouter } from "../lib";

const App: React.FC = () => {
  const { location, navigate } = useRouter();
  return (
    <div>
      <h1>React Typescript App: {location}</h1>

      <Routes>
        <Route path="/" component={() => <h1>From Home Page</h1>} />
        <Route path="/test" component={() => <h1>From Test</h1>} />
        <Route path="/test2" component={() => <h1>From Test 2</h1>} />
      </Routes>
    </div>
  );
};

export default App;
```

## Features

- [x] Basic Routing
- [ ] Nested Routing
- [ ] Route Parameters
- [ ] Route Guards
- [x] Route Redirects
- [ ] Route Lazy Loading
- [x] Route
- [x] Routes
- [x] Redirect
- [x] Link
- [x] NavLink
- [x] useRouter
- [x] useNavigate
- [x] useLocation
- [x] useParams
- [x] useRedirect
- [x] useRoute
- [x] useMatch

## Enjoy Learning
