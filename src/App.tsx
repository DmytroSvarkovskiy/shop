import { GlobalStyle } from './globalStyle';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './hooks';
import { getGoodsFetch } from './redux';
import { useEffect, lazy } from 'react';
import { Layout, MainPage } from './components';

const Basket = lazy(() => import('./components/'));

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getGoodsFetch());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/basket" element={<Basket />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;