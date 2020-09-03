import React, { Fragment, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updatePassword } from '../../../actions/auth';
import moment from 'moment';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  rota: {},
  modal: {
    display: 'flex',
    width: '50%',
    left: '100px',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '330px',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  test: {
    marginLeft: 'auto',
  },
}));
const PasswordForm = ({open, handleClose,updatePassword, history}) => {
 
  const classes = useStyles();
  const [formData, setFormData] = React.useState({});
  const { currentPassword, newPassword } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    updatePassword(formData,history);
  };

  return (
    <Fragment>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card className={classes.roota}>
            <CardHeader title='Expérience' />
            <form
              className={classes.root}
              noValidate
              onSubmit={(e) => onSubmit(e)}
              autoComplete='off'
            >
              <Divider />
              <CardContent>
                <TextField
                  required
                  id='currentPassword'
                  name='currentPassword'
                  label='Mot de passe'
                  variant='outlined'
                  type='password'
                  onChange={(e) => onChange(e)}
                  value={currentPassword}
                />
                <TextField
                  required
                  id='newPassword'
                  name='newPassword'
                  type='password'
                  onChange={(e) => onChange(e)}
                  value={newPassword}
                  label='Nouvaux Mot de passe'
                  variant='outlined'
                />
               
              </CardContent>
              <CardActions>
                <Fragment><Button
  className={classes.test}
  size='medium'
  type='clear'
  variant='outlined'
  color='secondary'
>
  Cancel
</Button>
<Button
  className={classes.test}
  type='submit'
  size='medium'
  variant='outlined'
  color='primary'
  startIcon={<CloudUploadIcon />}
>
  Enregister</Button></Fragment>
               
              </CardActions>
            </form>
          </Card>
        </Fade>
      </Modal>
    </Fragment>
  );
};
PasswordForm.propTypes = {
    updatePassword: PropTypes.func.isRequired,
};

export default connect(null,{updatePassword} )(withRouter(PasswordForm));
