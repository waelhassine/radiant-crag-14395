import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import { Zoom } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { createPassword } from '../../actions/auth';
const useStyles = makeStyles((theme) => ({
  containera: {
    position: 'fixed',
    top: '20%',
    left: '35%',
    margin: 'auto',
  },
  containerb: {
    position: 'fixed',
    top: '5%',
    left: '30%',
    margin: 'auto',
  },
  papera: {
    marginTop: '-40px',
    marginLeft: '-15px',
    fontWeight: '700',
    fontSize: '34px',
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
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
  con: {
    marginLeft: '100px',
  },
  formControl: {
    margin: theme.spacing(1),
    width: '50%',
  },
  test: {
    width: '70%',
    marginLeft: '7px',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '70%',
    },
  },
  formControla: {
    margin: theme.spacing(1),
    width: '70%',
  },
}));

const CreatePassword = ({ createPassword, match, history }) => {
  const classes = useStyles();

  const [formData, setFormData] = React.useState({});
  const { password, passwordTwo } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(match.params.id);
    createPassword(password, match.params.id, history);
  };
  return (
    <Fragment>
      <div className={classes.containera}>
        <h1 className={classes.papera}> Complete your profile</h1>
        <form
          className={classes.root}
          noValidate
          onSubmit={(e) => onSubmit(e)}
          autoComplete='off'
        >
          <TextField
            required
            id='password'
            name='password'
            label='Password'
            variant='outlined'
            onChange={(e) => onChange(e)}
            value={password}
          />
          <TextField
            required
            id='passwordTwo'
            name='passwordTwo'
            onChange={(e) => onChange(e)}
            value={passwordTwo}
            label='Password'
            variant='outlined'
          />
          <Button
            type='submit'
            className={classes.test}
            size='large'
            variant='outlined'
            color='primary'
            startIcon={<CloudUploadIcon />}
          >
            Enregister
          </Button>
        </form>
      </div>
    </Fragment>
  );
};
CreatePassword.propTypes = {
  createPassword: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(null, { createPassword })(CreatePassword);
