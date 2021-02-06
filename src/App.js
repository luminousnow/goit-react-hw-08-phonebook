import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar } from './components';
import { Route, Switch } from 'react-router-dom';
import { Home } from './views/HomeView';
import { Contacts } from './views/ContactsView';
import { Register } from './views/RegisterView';
import { Login } from './views/LoginView';

function App() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <AppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/registration" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Container>
  );
}

export default App;
