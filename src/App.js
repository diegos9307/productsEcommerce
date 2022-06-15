import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Detail from './pages/Detail';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';
import { DataProvider } from './components/DataContext';
import PrivateRoute from './components/PrivateRoute';
import ConfirmEmail from './pages/ConfirmEmail';

function App() {
  return (
    <>
      <DataProvider>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route element={<PrivateRoute />}>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/detail/:cardId" element={<Detail />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/confirm/:emailToken" element={<ConfirmEmail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
