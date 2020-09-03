import React, { Fragment, useEffect } from 'react';
import DashTest from '../layout/DashTest';
import { makeStyles } from '@material-ui/core/styles';
import NavigationDrawer from '../layout/layoutStyle/NavigationDrawer';
import Profile from './Profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/layoutStyle/Spinner';
import AlertSnackbar from '../layout/layoutStyle/AlertSnackbar';
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
    // padding: theme.spacing(3),
  },
}));
const ProfileDash = ({
  getCurrentProfile,
  profile: { profile, loading },
  auth: { user },
}) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(1);
  const getData = (val) => {
    setChecked(val);
  };

  const Notification = () => {
    if (checked === 1) {
      return (
        <Fragment>
          <Profile user={user} profile={profile} />
        </Fragment>
      );
    }

    if (checked === 2) {
      return (
        <div>
          <Fragment>
            <h1>checked 4dm</h1>
            <h1>checked 4dm</h1>
            <h1>checked 4dm</h1>
            <h1>checked 4dm</h1>
            <h1>checked 4dm</h1>
          </Fragment>
        </div>
      );
    }

    if (checked === 3) {
      return (
        <div>
          <Fragment>
            <h1>checked 4dm</h1>
            <h1>checked 4dm</h1>
            <h1>checked 4dm</h1>
            <h1>checked 4dm</h1>
            <h1>checked 4dm</h1>
          </Fragment>
        </div>
      );
    }

    return <h1>checked 2dm</h1>;
  };
  useEffect(() => {
    getCurrentProfile();
    console.log(profile);
  }, [getCurrentProfile]);
  return loading ===true && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.appBar}>
          <DashTest user={user} />
        </div>
        <NavigationDrawer sendData={getData} user={user} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {user.role === 'juge' ? (
            <Profile user={user} profile={profile} />
          ) : (
            <Notification />
          )}
          <AlertSnackbar/>
        </main>
      </div>
    </Fragment>
  );
};
ProfileDash.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { getCurrentProfile })(ProfileDash);
