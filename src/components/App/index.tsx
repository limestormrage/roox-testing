import './app.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../../layout';
import Main from '../../pages/Main';
import { APPRoute } from '../../const';
import Profile from '../../pages/Profile';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route
            path={APPRoute.Main}
            element={<Main />}
          />
          <Route
            path={`${APPRoute.Profile}/:id`}
            element={<Profile />}
          />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
