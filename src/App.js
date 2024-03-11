
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import routes from './routes';

function App() {
  return (
    <BrowserRouter basename="/">
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
  );
}

export default App;
