import React, { Fragment } from 'react';
import DashTest from '../layout/DashTest';
import { makeStyles } from '@material-ui/core/styles';
import NavigationDrawer from '../layout/layoutStyle/NavigationDrawer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ParametreGeneralContent from './ParametreGeneralContent';
import ParametreConnectionEtSecurite from './ParametreConnectionEtSecurite';
import Spinner from '../layout/layoutStyle/Spinner';
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
    paddingTop: theme.spacing(8),
  },
}));

const SettingsProfile = ({ auth: { user, loading } }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const getData = (val) => {
    setChecked(val);
  };
  const Notification = () => {
    if (checked === 1) {
      return <ParametreGeneralContent />;
    }

    if (checked === 2) {
      return <ParametreConnectionEtSecurite />;
    }

    if (checked === 3) {
      return <p>sddsd</p>;
    }

    return <ParametreGeneralContent />;
  };

  return user === null && loading === false ?(
    <Spinner />
    
  ) : (
    <Fragment>
      <div className={classes.root}>
      <div className={classes.appBar}>
        <DashTest user={user} />
      </div>
      <NavigationDrawer user={user} sendData={getData} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Notification />
      </main>
    </div>
      </Fragment>
  );
};
SettingsProfile.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(SettingsProfile);
