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

import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUserJuge } from '../../../actions/user';

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
const AddFormJuge = ({
  open,
  handleClose,
  history,
  createUserJuge,
  userRole,
}) => {
  const [formData, setFormData] = React.useState({});
  const classes = useStyles();

  const { name, email, gsm } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    createUserJuge(formData, history, userRole);
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
            <CardHeader title='Ajouter Juge' />
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
                  id='name'
                  name='name'
                  label='Nom'
                  variant='outlined'
                  onChange={(e) => onChange(e)}
                  value={name}
                />
                <TextField
                  required
                  id='email'
                  name='email'
                  label='Email'
                  variant='outlined'
                  onChange={(e) => onChange(e)}
                  value={email}
                />
                <TextField
                  required
                  id='gsm'
                  name='gsm'
                  label='Gsm'
                  variant='outlined'
                  onChange={(e) => onChange(e)}
                  value={gsm}
                />
              </CardContent>
              <CardActions>
                <Fragment>
                  <Button
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
                    Enregister
                  </Button>{' '}
                </Fragment>
              </CardActions>
            </form>
          </Card>
        </Fade>
      </Modal>
    </Fragment>
  );
};
AddFormJuge.propTypes = {
  createUserJuge: PropTypes.func.isRequired,
  userRole: PropTypes.PropTypes.string.isRequired,
};

export default connect(null, { createUserJuge })(withRouter(AddFormJuge));
