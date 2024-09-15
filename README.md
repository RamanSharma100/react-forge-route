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
// main.tsx;

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
// App.tsx

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
        <Route path="/:param" component={ParameterizedComponent} />
        <Route path="/:param/test/:param2" component={ParameterizedComponent} />
      </Routes>
    </div>
  );
};

export default App;
```

```tsx
// ParameterizedComponent.tsx

import { ParameterizedRouteComponent } from 'react-forge-route'; // or import { ParameterizedRouteComponent } from "../lib";

interface IProps extends ParameterizedRouteComponent {}

const ParameterizedComponent: React.FC<IProps> = ({ params }) => {
  return <h1>From Param: {JSON.stringify(params)}</h1>;
};

export default ParameterizedComponent;
```

```tsx
// ParameterizedComponent.tsx (with hooks)

import { useParams } from 'react-forge-route'; // or import { useParams } from "../lib";

const ParameterizedComponent: React.FC = () => {
  const { getParams } = useParams();
  return <h1>From Param: {JSON.stringify(getParams())}</h1>;
};

export default ParameterizedComponent;
```

## Features

- [x] Basic Routing
- [ ] Nested Routing
- [x] Route Parameters
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
