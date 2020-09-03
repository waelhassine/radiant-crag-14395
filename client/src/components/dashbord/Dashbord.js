import React, { Fragment, useEffect, useState } from 'react';
import DashTest from '../layout/DashTest';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavigationDrawer from '../layout/layoutStyle/NavigationDrawer';
import Spinner from '../layout/layoutStyle/Spinner';
import { getCurrentProfile } from '../../actions/profile';
import { loadUser } from '../../actions/auth';
import JugeContent from './JugeContent';
import SocieteContent from './SocieteContent';
import MediDash from './MediDash';
import DemandeDash from './DemandeDash';
import AlertSnackbar from '../layout/layoutStyle/AlertSnackbar';
import DemandeSuivi from './DemandeSuivi';
import Messagerie from './Messagerie';
//import { openWebsocket } from '../../actions/socket';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    paddingTop: theme.spacing(14),
    // padding: theme.spacing(3),
  },
}));

const Dashbord = ({ getCurrentProfile, loadUser, auth: { user, loading } }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  useEffect(() => {
    loadUser();
    getCurrentProfile();
    // openWebsocket('localhost:5000');
  }, [loadUser, getCurrentProfile]);
  const getData = (val) => {
    setChecked(val);
    console.log(val);
  };
  const renderSwitch = (param) => {
    switch (param) {
      case 'auteur':
        return <MainAuteur />;
      case 'juge':
        return <MainJuge />;
      case 'societe':
        return <MainSociete />;
      default:
        return 'Error';
    }
  };
  const MainAuteur = () => {
    if (checked === 1) {
      return <JugeContent />;
    }

    if (checked === 2) {
      return <SocieteContent />;
    }

    if (checked === 3) {
      return <DemandeDash />;
    }
    if (checked === 4) {
      return <MediDash />;
    }
    if (checked === 5) {
      return <MediDash />;
    }
    if (checked === 6) {
      return <Messagerie />;
    }

    return <JugeContent />;
  };
  const MainJuge = () => {
    if (checked === 1) {
      return <MediDash />;
    }

    if (checked === 2) {
      return <MediDash />;
    }

    if (checked === 3) {
      return (
        <div>
          <h1>checked 4dm</h1>
          <h1>checked 4dm</h1>
          <h1>checked 4dm</h1>
          <h1>checked 4dm</h1>
          <h1>checked 4dm</h1>
        </div>
      );
    }

    return <MediDash />;
  };
  const MainSociete = () => {
    if (checked === 1) {
      return <DemandeSuivi />;
    }

    if (checked === 2) {
      return (
        <div>
          <DemandeSuivi />
        </div>
      );
    }

    if (checked === 3) {
      return (
        <div>
          <MediDash />
        </div>
      );
    }

    return <DemandeSuivi />;
  };
  return user === null && loading === false ? (
    <Spinner />
  ) : (
    <Fragment>
      {user.profile === false ? (
        <Fragment>
          <Redirect to='/test' />
        </Fragment>
      ) : (
        <Fragment>
          {' '}
          <div className={classes.root}>
            <div className={classes.appBar}>
              <DashTest user={user} />
            </div>
            <NavigationDrawer sendData={getData} user={user} />
            <main className={classes.content}>
              {renderSwitch(user.role)}
              <AlertSnackbar />
            </main>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
Dashbord.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  loadUser,
  getCurrentProfile,
})(Dashbord);
