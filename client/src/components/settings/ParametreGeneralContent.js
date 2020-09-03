import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  paddingContent: {
    paddingTop: '40px',
  },
  paddingListItem: {
    marging: '5px 5px',
  },
  textPrimary: {
    fontSize: '22px',
    fontWeight: '600',
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
  FirstText: {
    fontSize: '18px',
    fontWeight: '500',
    float: 'left',
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
  SecondText: {
    float: 'left',
    textAlign: 'center',
    marginLeft: '20px',
    fontSize: '16px',
    fontWeight: '400',

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
  LastText: {
    fontSize: '16px',
    marginLeft: 'auto',
    color: 'orange',
    float: 'right',
    fontWeight: '400',
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
}));
const ParametreGeneralContent = ({auth: { user, loading }}) => {
  const classes = useStyles();
  return (
    <div className={classes.paddingContent}>
      <p className={classes.textPrimary}>Paramètres généraux du compte</p>
      <Divider />
      <List>
        <ListItem button>
          <span className={classes.FirstText}>Nom : </span>
          <span className={classes.SecondText}>{user.name}</span>
          <span className={classes.LastText}>Modifier</span>
        </ListItem>
        <Divider />
        <ListItem button>
          <span className={classes.FirstText}>Nom d’utilisateur : </span>
  <span className={classes.SecondText}>{user.email}</span>
          <span className={classes.LastText}>Modifier</span>
        </ListItem>
        <Divider />
        <ListItem button>
          <span className={classes.FirstText}>Public Profile  : </span>
          <span className={classes.SecondText}>{user.email}</span>
          <span className={classes.LastText}>Modifier</span>
        </ListItem>
        <Divider />
      </List>
    </div>
  );
};

ParametreGeneralContent.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ParametreGeneralContent);

