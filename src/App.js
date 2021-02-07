import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar, PublicRoute, PrivateRoute } from './components';
import { Switch } from 'react-router-dom';
import { Home } from './views/HomeView';
import { Contacts } from './views/ContactsView';
import { Register } from './views/RegisterView';
import { Login } from './views/LoginView';
import { refreshCurrentUser } from './redux/auth/authOperations';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <AppBar />
      <Switch>
        <PublicRoute exact path="/">
          <Home />
        </PublicRoute>
        <PublicRoute path="/registration" restricted>
          <Register />
        </PublicRoute>
        <PublicRoute path="/login" redirectTo="/contacts" restricted>
          <Login />
        </PublicRoute>
        <PrivateRoute path="/contacts" redirectTo="/login">
          <Contacts />
        </PrivateRoute>
      </Switch>
    </Container>
  );
}

export default App;
