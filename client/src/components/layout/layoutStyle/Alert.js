import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alerta = ({ alerts }) => {
  const classes = useStyles();

  if (alerts !== null && alerts.length > 0) {
    return alerts.map((alert) => (
      <Fragment>
        <div className={classes.root}>
          <Alert key={alert.id} severity='error'>
            {alert.msg}
          </Alert>
        </div>
      </Fragment>
    ));
  }
  return null;
};

Alerta.propTypes = {
  alerts: PropTypes.array.isRequired,
};
// function Alert(props) {
//   return <MuiAlert elevation={6} variant='filled' {...props} />;
// }
const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(Alerta);
