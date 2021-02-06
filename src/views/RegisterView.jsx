import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { register } from '../redux/auth/authOperations';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function Register() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  console.log(name);
  console.log(email);
  console.log(password);

  // for input text fields whos changing by user
  const handleChange = evt => {
    const { name, value } = evt.target;

    // записує відповідне значення у відповідний State
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  // for Submit button
  const onSubmitPress = evt => {
    evt.preventDefault();

    // checks the unique Name
    // if (
    //   contactsList.find(item => item.name.toLowerCase() === name.toLowerCase())
    // ) {
    //   alert(`${name} is already in contact`);
    //   return;
    // }

    // () => ({
    //   dispatch(register({ name, email, password })),
    //   resetFormField(),
    // });

    dispatch(register({ name, email, password }));
    resetFormField();
    console.log(name);
    console.log(email);
    console.log(password);
  };

  // utilits === set input fields value by default
  const resetFormField = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <form onSubmit={onSubmitPress} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                value={name}
                name="name"
                id="name"
                label="Name"
                type="text"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="email"
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                value={email}
                name="email"
                id="email"
                label="Email"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="current-password"
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                value={password}
                name="password"
                id="password"
                label="Password"
                type="password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
