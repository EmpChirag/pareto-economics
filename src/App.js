
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import routes from './routes';
import { Suspense, useEffect } from 'react';

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <Suspense>
      <BrowserRouter basename="/">
        <ScrollToTop />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
