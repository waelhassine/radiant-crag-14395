import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';
import PersonPinRoundedIcon from '@material-ui/icons/PersonPinRounded';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
const useStyles = makeStyles((theme) => ({
  textCreate: {
    fontSize: '24px',
    fontWeight: 'bolder',
    marginTop: '16px',
    marginLeft: '16px',
    display: 'flex',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

  iconStyle: {
    color: '#777777',
    backgroundColor: '#ccc',
  },
  textPrimary: {
    fontWeight: '700',
    fontSize: '16px',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
}));
const CreationMenuContent = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div>
        <p className={classes.textCreate}>Créer</p>
      </div>
      <ListItem button>
        <ListItemAvatar>
          <Avatar className={classes.iconStyle}>
            <PersonAddRoundedIcon color='inherit' />
          </Avatar>
        </ListItemAvatar>
        <span className={classes.textPrimary}>Juge</span>
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar className={classes.iconStyle}>
            <AccountBalanceRoundedIcon color='inherit' />
          </Avatar>
        </ListItemAvatar>
        <span className={classes.textPrimary}>Sociéte</span>
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar className={classes.iconStyle}>
            <PersonPinRoundedIcon color='inherit' />
          </Avatar>
        </ListItemAvatar>
        <span className={classes.textPrimary}>Administrateur</span>
      </ListItem>
    </Fragment>
  );
};
export default CreationMenuContent;
