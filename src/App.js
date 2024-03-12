
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import routes from './routes';
import { Suspense } from 'react';

function App() {
  return (
    <BrowserRouter basename="/">
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          exact={route.exact}
          path={route.path}
          element={<Suspense fallback={'Loading...'}>{route.component}</Suspense>}
        />
      ))}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
