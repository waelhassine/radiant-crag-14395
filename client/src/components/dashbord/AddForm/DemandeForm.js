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
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { createUserJuge } from '../../../actions/user';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import { addMediation } from '../../../actions/mediation';
import { setAlert } from '../../../actions/alert';
import Alert from '../../layout/layoutStyle/Alert';
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
const AddFormJuge = ({ open, handleClose, history, addMediation ,setAlert }) => {
  const [formData, setFormData] = React.useState({
    typeDemande: 'Mediation',
    juridiction: 'true',
    categorie: 'Meuble',
    description:'',
    name :'',
    email:'',
    gsm:'',
  });
  const classes = useStyles();
  const [fileaa, setfileaa] = React.useState(null);

  const [filename, setFilename] = React.useState();
  const {
    typeDemande,
    juridiction,
    categorie,
    description,
    name,
    email,
    gsm,
  } = formData;

  const [checked, setChecked] = React.useState(false);
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onChangeHandler = (event) => {
    setfileaa(event.target.files[0]);
    // addMediation(event.target.files[0], history);
    console.log(event.target.files[0]);
    setFilename(event.target.files[0].name);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // console.log(fila);
    //  createUserJuge(formData, history);
  };
  const onSubmita = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log('from  submit');
    console.log(fileaa);
    if(description === '' || name === '' || email === '' || gsm === '' || fileaa === null){
      setAlert('Please complete required field', 'danger');
    }
    else {
      addMediation(fileaa, formData, history);
      handleClose();
    }
    //
    
    // console.log(fila);
    //  createUserJuge(formData, history);
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
            {checked == !true ? (
              <CardHeader title='Ajouter Demande' action={<h4>Etape 1/2</h4>} />
            ) : (
              <CardHeader title='Ajouter Demande' action={<h4>Etape 2/2</h4>} />
            )}

            <form
              className={classes.root}
              onSubmit={onSubmita}
              autoComplete='off'
            >
              <Divider />
              {checked === false ? (
                
                <Fragment>
                  <CardContent>
                  <Alert />
                    <FormControl
                      variant='outlined'
                      className={classes.formControl}
                    >
                      <InputLabel id='typeDemande'>Type Demande</InputLabel>
                      <Select
                        id='typeDemande'
                        name='typeDemande'
                        value={typeDemande}
                        onChange={(e) => onChange(e)}
                        label='Type Demande'
                        required
                      >
                        <MenuItem value=''>
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value='Mediation'>Médiation</MenuItem>
                        <MenuItem value='Arbitrage'>Arbitrage</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl
                      variant='outlined'
                      className={classes.formControl}
                    >
                      <InputLabel id='juridiction'>Juridiction</InputLabel>
                      <Select
                        id='juridiction'
                        name='juridiction'
                        value={juridiction}
                        onChange={(e) => onChange(e)}
                        label='Type Demande'
                        required
                      >
                        <MenuItem value=''>
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value='true'>Oui</MenuItem>
                        <MenuItem value='false'>Non</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl
                      variant='outlined'
                      className={classes.formControl}
                    >
                      <InputLabel id='categorie'>Categorie</InputLabel>
                      <Select
                        id='categorie'
                        name='categorie'
                        value={categorie}
                        onChange={(e) => onChange(e)}
                        label='Type Demande'
                        required
                      >
                        <MenuItem value=''>
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value='Meuble'>Meuble</MenuItem>
                        <MenuItem value='Ciment'>Ciment</MenuItem>
                      </Select>
                    </FormControl>
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
                      <Button
                        variant='contained'
                        color='primary'
                        component='span'
                      >
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
                        type='reset'
                        variant='outlined'
                        color='secondary'
                      >
                        Cancel
                      </Button>
                      <Button
                        className={classes.test}
                        size='medium'
                        variant='outlined'
                        color='primary'
                        startIcon={<NavigateNextRoundedIcon />}
                        onClick={() => {
                          setChecked(true);
                        }}
                      >
                        Suivant
                      </Button>{' '}
                    </Fragment>
                  </CardActions>
                </Fragment>
              ) : (
                <Fragment>
                  <CardContent>
                  <Alert />
                    <h3>Adverse</h3>
                    <TextField
                      required
                      id='name'
                      name='name'
                      label='Nom'
                      variant='outlined'
                      onChange={(e) => onChange(e)}
                      value={name}
                      required
                    />
                    <TextField
                      required
                      id='email'
                      name='email'
                      label='Email'
                      variant='outlined'
                      onChange={(e) => onChange(e)}
                      value={email}
                      required
                    />
                    <TextField
                      required
                      id='gsm'
                      name='gsm'
                      label='Gsm'
                      variant='outlined'
                      onChange={(e) => onChange(e)}
                      value={gsm}
                      required
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
                        onClick={() => {
                          setChecked(false);
                        }}
                      >
                        Précédent
                      </Button>
                      <Button
                        className={classes.test}
                        onClick={onSubmita}
                        size='medium'
                        variant='outlined'
                        color='primary'
                        startIcon={<CloudUploadIcon />}
                      >
                        Enregister
                      </Button>{' '}
                    </Fragment>
                  </CardActions>
                </Fragment>
              )}
            </form>
          </Card>
        </Fade>
      </Modal>
    </Fragment>
  );
};
AddFormJuge.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addMediation: PropTypes.func.isRequired,
};

export default connect(null, { addMediation ,setAlert})(withRouter(AddFormJuge));
