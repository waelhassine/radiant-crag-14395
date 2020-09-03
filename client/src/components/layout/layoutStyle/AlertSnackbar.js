import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const AlertSnackbar = ({ alerts }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  if (alerts !== null && alerts.length > 0) {
    return alerts.map((alert) => (
      <Fragment>
        <div className={classes.root}>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            key={alert.id}
            open={open}
          >
            <Alert severity={alert.alertType}>{alert.msg}</Alert>
          </Snackbar>
        </div>
      </Fragment>
    ));
  }
  return null;
};
AlertSnackbar.propTypes = {
  alerts: PropTypes.array.isRequired,
};
// function Alert(props) {
//   return <MuiAlert elevation={6} variant='filled' {...props} />;
// }
const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(AlertSnackbar);
