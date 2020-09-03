import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ElevationScroll from '../utils/ElevationScroll';
//import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    height: '70px',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 2,
  },
  link: {
    margin: theme.spacing(1, 4),
    fontSize: '12px',
    fontWeight: 'bold',
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  bottonLoginIn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    fontSize: 16,
    borderRadius: 20,
    boxShadow: ' -5px 3px 24px -1px rgba(0,0,0,0.15)',
    color: 'white',
    height: 40,
    padding: '0 50px',
  },
  imageLogo: {
    display: 'flex',
    flexWrap: 'nowrap'
  
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar color='white' elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography
              variant='h6'
              color='inherit'
              noWrap
              className={classes.toolbarTitle}
            >
              <div className={classes.imageLogo}>
              <img
                
                src='logoa.png'
                height='35'
                width='45'
              />
              ALPHA PARTNERS              </div>
              
            </Typography>
            <nav>
              <Link
                variant='button'
                color='textPrimary'
                href='#'
                className={classes.link}
              >
                Features
              </Link>
              <Link
                variant='button'
                color='textPrimary'
                href='/login'
                className={classes.link}
              >
                Enterprise
              </Link>
              <Link
                variant='button'
                color='textPrimary'
                href='#'
                className={classes.link}
              >
                Support
              </Link>
            </nav>
            <Button
              href='/login'
              color='primary'
              variant='outlined'
              className={classes.bottonLoginIn}
            >
              Log in
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Fragment>
  );
};
export default Navbar;
