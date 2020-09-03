import React, { Fragment } from 'react';
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
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { addPv } from '../../../actions/medi';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  rota: {
    maxWidth: 200,
  },
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
  input: {
    display: 'none',
  },
}));
const AddPvForm = ({ open, handleClose, idMediation, addPv, history }) => {
  const [formData, setFormData] = React.useState({
    description: '',
  });
  const classes = useStyles();
  const [fileaa, setfileaa] = React.useState(null);

  const [filename, setFilename] = React.useState();
  const { description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log('from  submit');
    console.log(fileaa);
    addPv(idMediation, fileaa, formData, history);
    // createUserJuge(formData, history, userRole);
  };
  const onChangeHandler = async (event) => {
    event.preventDefault();
    setfileaa(event.target.files[0]);
    // addMediation(event.target.files[0], history);
    console.log(event.target.files[0]);
    setFilename(event.target.files[0].name);
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
            <CardHeader title='Ajouter PV Réunion' />
            <form
              className={classes.root}
              noValidate
              onSubmit={(e) => onSubmit(e)}
              autoComplete='off'
            >
              <Divider />
              <CardContent>
                <TextField
                  id='description'
                  name='description'
                  label='Description'
                  multiline
                  rows={4}
                  onChange={(e) => onChange(e)}
                  value={description}
                  variant='outlined'
                  required
                />
                <input
                  accept='application/pdf'
                  className={classes.input}
                  id='icon-button-file'
                  type='file'
                  name='file'
                  onChange={onChangeHandler}
                  required
                />
                <label htmlFor='icon-button-file'>
                  <Button variant='contained' color='primary' component='span'>
                    Upload
                  </Button>
                </label>
                {filename}
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
AddPvForm.propTypes = {
  addPv: PropTypes.func.isRequired,
  idMediation: PropTypes.string.isRequired,
};
export default connect(null, { addPv })(AddPvForm);
