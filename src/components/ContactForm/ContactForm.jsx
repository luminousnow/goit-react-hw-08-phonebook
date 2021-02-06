import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from '../../redux/contacts/contacts-operations';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function ContactForm() {
  // === useState hook === //
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactsList = useSelector(getAllContacts);
  const dispatch = useDispatch();

  // === пише значення в Store === //
  const handleImputChange = evt => {
    const { name, value } = evt.currentTarget;

    // записує відповідне значення у відповідний State
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  // on Submit
  const onSubmitPress = evt => {
    evt.preventDefault();

    // checks the unique Name
    if (
      contactsList.find(item => item.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contact`);
      return;
    }

    dispatch(createContact({ name, number }));
    resetFormField();
  };

  // чистить поля name, number
  const resetFormField = () => {
    setName('');
    setNumber('');
  };

  //

  const classes = useStyles();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar variant="rounded" className={classes.rounded}>
            <ContactPhoneIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contacts
          </Typography>
          <form onSubmit={onSubmitPress} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="text"
              id="name"
              label="Contacts Name"
              name="name"
              value={name}
              onChange={handleImputChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="tel"
              name="number"
              value={number}
              onChange={handleImputChange}
              label="phone number"
              id="number"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              add new contact
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}

export { ContactForm };
