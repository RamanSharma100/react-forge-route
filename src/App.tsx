import { Route, Routes, useRouter } from '../lib';

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

      <button type="button" onClick={() => navigate('/test')}>
        test
      </button>
      <button type="button" onClick={() => navigate('/test2')}>
        test 2
      </button>
      <button type="button" onClick={() => navigate('/not-found')}>
        Route Not Available
      </button>
      <button type="button" onClick={() => navigate(-1)}>
        GO Back
      </button>
    </div>
  );
};

export default App;
