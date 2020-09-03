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
import { updateProfile } from '../../../actions/profile';
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
const SocieteForm = ({
  open,
  handleClose,
  updateProfile,
  history,
  profile,
}) => {
  const [formData, setFormData] = React.useState({});
  useEffect(() => {
    setFormData(profile);
    console.log(profile);
  }, [profile]);
  const classes = useStyles();

  const {
    raisonSociale,
    responsable,
    adresseUsine,
    registreCommerce,
    tel,
    fax,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    updateProfile(formData, history);
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
            <CardHeader title='Information Géneral' />
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
                  id='raisonSociale'
                  name='raisonSociale'
                  label='Raison Sociale'
                  variant='outlined'
                  onChange={(e) => onChange(e)}
                  value={raisonSociale}
                />
                <TextField
                  required
                  id='responsable'
                  name='responsable'
                  label='Responsable'
                  variant='outlined'
                  onChange={(e) => onChange(e)}
                  value={responsable}
                />
                <TextField
                  required
                  id='adresseUsine'
                  name='adresseUsine'
                  label='Adresse Usine'
                  variant='outlined'
                  onChange={(e) => onChange(e)}
                  value={adresseUsine}
                />

                <TextField
                  required
                  id='registreCommerce'
                  name='registreCommerce'
                  label='Registre Commerce'
                  variant='outlined'
                  onChange={(e) => onChange(e)}
                  value={registreCommerce}
                />
                <TextField
                  required
                  id='tel'
                  name='tel'
                  label='Tel'
                  variant='outlined'
                  onChange={(e) => onChange(e)}
                  value={tel}
                />
                <TextField
                  required
                  id='fax'
                  name='fax'
                  label='Fax'
                  variant='outlined'
                  onChange={(e) => onChange(e)}
                  value={fax}
                />
              </CardContent>
              <CardActions>
                <Fragment>
                  <Button
                    className={classes.test}
                    size='medium'
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
                    Modifier
                  </Button>
                </Fragment>
              </CardActions>
            </form>
          </Card>
        </Fade>
      </Modal>
    </Fragment>
  );
};
SocieteForm.propTypes = {
  updateProfile: PropTypes.func.isRequired,

  profile: PropTypes.object.isRequired,
};

export default connect(null, {
  updateProfile,
})(withRouter(SocieteForm));
