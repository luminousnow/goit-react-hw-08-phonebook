import s from './ContactListItem.module.css';
import React from 'react';
import { string, func } from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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

function ContactListItem({ name, number, onDeleteContact }) {
  const classes = useStyles();

  return (
    <li className={s.listItem}>
      <p className={s.text}>
        {name}: {number}
      </p>
      <Button
        type="button"
        className={s.button}
        onClick={onDeleteContact}
        fullWidth
        variant="contained"
        color="primary"
        // className={classes.submit}
      >
        delete
      </Button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: string.isRequired,
  number: string.isRequired,
  onDeleteContact: func.isRequired,
};

export default ContactListItem;
