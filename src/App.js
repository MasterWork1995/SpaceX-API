import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import routes from './constants/routes';
import { Homepage, Launches, SingleLaunch, ErrorPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={routes.HOME} element={<Homepage />}></Route>
        <Route path={routes.LAUNCHES} element={<Launches />}></Route>
        <Route path={routes.SINGLELAUNCH} element={<SingleLaunch />}></Route>
        <Route path={routes.ERRORPAGE} element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
