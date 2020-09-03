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
import AlertSnackbar from '../layout/layoutStyle/AlertSnackbar';
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
const TermsOfService = ({ open, handleClose }) => {
  const classes = useStyles();
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
            <CardHeader title='Terms of Services' />

            <CardContent>
              <p>
                Je souhaite recevoir les courriers et autres communications
                postales du Centre de Médiation et d'Arbitrage de APT à mon
                adresse électronique,
              </p>
              <p>
                J’autorise le Centre de Médiation et d'Arbitrage de APT à
                partager mes informations personnelles eu sein du groupe des
                adhérant,
              </p>
              <p>Je souhaite participer à la vie professionnelle du centre,</p>
              <p>
                Je souhaite participer comme membre à l’une des commissions du
                APT : Commission médiation et arbitrage, Commission formation et
                recherche scientifique, Commission communication et relations
                internationales.
              </p>
            </CardContent>
            <CardActions>
              <Button
                className={classes.test}
                type='submit'
                size='medium'
                variant='outlined'
                color='primary'
                startIcon={<CloudUploadIcon />}
                onClick={handleClose}
              >
                Je confirme
              </Button>{' '}
            </CardActions>
          </Card>
        </Fade>
      </Modal>
    </Fragment>
  );
};
export default TermsOfService;
