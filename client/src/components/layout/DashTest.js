import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchInput from '../layout/NavbarContent/SearchInput';
import MiddleNavbar from '../layout/NavbarContent/MiddleNavbar';
import PopupMenuCreation from './NavbarContent/PopupMenu/PopupMenuCreation';
import PopupMenuMessage from './NavbarContent/PopupMenu/PopupMenuMessage';
import PopuoMenuNotification from './NavbarContent/PopupMenu/PopupMenuNotification';
import PopupMenuProfile from './NavbarContent/PopupMenu/PopupMenuProfile';
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { Link as MaterialLink } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  middlestyle: {
    position: 'inherit',
    marginLeft: 'auto',
  },
  rightstyle: {
    position: 'inherit',
    marginLeft: 'auto',
  },
  navbarRight: {
    backgroundColor: 'white',
    height: '37px',
    fontSize: '15px',
    fontWeight: 500,
  },
}));
const NavbarJuge = ({ user, classes }) => {
  return (
    <Fragment>
      <Toolbar>
        <Link to='/dashboard' className={classes.link}>
          <img src='logoa.png' height='35' width='35' />
        </Link>

        <Hidden mdDown>
          <SearchInput />
        </Hidden>
        <div className={classes.rightstyle}>
          <Hidden mdDown>
            <Link to='/profile' className={classes.link}>
              <Chip
                avatar={<Avatar src={'./uploads/img/' + user.photo} />}
                className={classes.navbarRight}
                component='a'
                label={user.name}
                clickable
              />
            </Link>
          </Hidden>
          <PopupMenuMessage />
          <PopuoMenuNotification />
          <PopupMenuProfile />
        </div>
      </Toolbar>
    </Fragment>
  );
};
const NavbarSociete = ({ user, classes }) => {
  return (
    <Fragment>
      <Toolbar>
        <Link to='/dashboard' className={classes.link}>
          <img src='logoa.png' height='35' width='35' />
        </Link>

        <div className={classes.rightstyle}>
          <Hidden mdDown>
            <Link to='/profile' className={classes.link}>
              <Chip
                avatar={<Avatar src={'./uploads/img/' + user.photo} />}
                className={classes.navbarRight}
                component='a'
                label={user.name}
                clickable
              />
            </Link>
          </Hidden>
          <PopupMenuMessage />
          <PopuoMenuNotification />
          <PopupMenuProfile />
        </div>
      </Toolbar>
    </Fragment>
  );
};
const NavbarAuteur = ({ user, classes }) => {
  return (
    <Fragment>
      <Toolbar>
        <Link to='/dashboard' className={classes.link}>
          <img src='logoa.png' height='35' width='35' />
        </Link>
        <Hidden mdDown>
          <SearchInput />
        </Hidden>

        <div className={classes.middlestyle}>
          <MiddleNavbar />
        </div>
        <div className={classes.rightstyle}>
          <Hidden mdDown>
            <Chip
              avatar={<Avatar src={'./uploads/img/' + user.photo} />}
              className={classes.navbarRight}
              component='a'
              label={user.name}
              href='/settings'
              clickable
            />
          </Hidden>
          <Tooltip title='Add'>
            <PopupMenuCreation />
          </Tooltip>

          <PopupMenuMessage />
          <PopuoMenuNotification />
          <PopupMenuProfile />
        </div>
      </Toolbar>
    </Fragment>
  );
};
const DashTest = ({ user }) => {
  const classes = useStyles();
  const [dataSocket, setDataSocket] = React.useState();

  const NavbarContent = () => {
    switch (user.role) {
      case 'juge':
        return <NavbarJuge user={user} classes={classes} />;
      case 'societe':
        return <NavbarSociete user={user} classes={classes} />;
      case 'auteur':
        return <NavbarAuteur user={user} classes={classes} />;
      case 'administrateur':
        return <NavbarAuteur user={user} classes={classes} />;
      default:
        return <h1>Error</h1>;
    }
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color='white' position='fixed'>
        <NavbarContent />
      </AppBar>
    </div>
  );
};

export default withRouter(DashTest);
