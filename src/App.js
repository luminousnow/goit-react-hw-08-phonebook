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
        <PublicRoute path="/login" restricted>
          <Login />
        </PublicRoute>
        <PrivateRoute path="/contacts">
          <Contacts />
        </PrivateRoute>

        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/registration" component={Register} /> */}
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route path="/contacts" component={Contacts} /> */}
      </Switch>
    </Container>
  );
}

export default App;
