import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AlertSnackbar from '../layout/layoutStyle/AlertSnackbar';
import ActionForm from './ActionForm';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import { useHistory } from 'react-router-dom';
function getSteps() {
  return ['Formulaire Demande', 'Choix Juge', 'Creation Médiation'];
}
function getStepContent(
  stepIndex,
  mediationa,
  classes,
  setIdDemande,
  setOpen,
  history
) {
  console.log(mediationa);
  switch (stepIndex) {
    case 0:
      return (
        <Fragment>
          <div className={classes.textCenter}>
            <p>Etat : En Cours de validation Administration</p>
            <Button
              variant='outlined'
              color='secondary'
              className={classes.btnAction}
              onClick={() => {
                setOpen(true);
                setIdDemande(mediationa._id);
                console.log(mediationa._id);
              }}
            >
              Action
            </Button>
          </div>
        </Fragment>
      );
    case 1:
      return (
        <Fragment>
          {mediationa.jugesDemandeur.length > 0 &&
          mediationa.jugesAdverse.length > 0 ? (
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
              spacing={2}
            >
              {mediationa.jugesDemandeur.map((juge) => {
                return (
                  <Fragment>
                    <Grid item>
                      <Grid
                        container
                        direction='column'
                        justify='center'
                        alignItems='center'
                      >
                        <Grid item>
                          <Avatar
                            alt={juge.name}
                            src={'./uploads/img/' + juge.photo}
                          />
                        </Grid>
                        <Grid item>
                          <Typography>{juge.name}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Fragment>
                );
              })}
              {mediationa.jugesAdverse.map((juge) => {
                return (
                  <Fragment>
                    <Grid item>
                      <Grid
                        container
                        direction='column'
                        justify='center'
                        alignItems='center'
                      >
                        <Grid item>
                          <Avatar
                            alt={juge.name}
                            src={'./uploads/img/' + juge.photo}
                          />
                        </Grid>
                        <Grid item>
                          <Typography>{juge.name}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Fragment>
                );
              })}
              <Grid item xs={12}>
                <Grid
                  container
                  direction='column'
                  justify='center'
                  alignItems='center'
                >
                  <Grid item>
                    <Button
                      variant='contained'
                      color='primary'
                      endIcon={<Icon>send</Icon>}
                      onClick={() => {
                        console.log('halooossssssssssssssssss');
                        console.log(mediationa._id);
                        console.log(mediationa.nbrJuge);
                        history.push('/choixjuge', {
                          id: mediationa._id,
                          nbrJuge: mediationa.nbrJuge,
                          owner: 'administrateur',
                          mediationa,
                        });
                        //history.push('/dashboard');
                      }}
                    >
                      Confirm Choix Juge
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <Fragment>
              <div className={classes.textCenter}>
                <p>En attent client de faire choix juge</p>
              </div>
            </Fragment>
          )}
        </Fragment>
      );
    case 3:
      return (
        <Fragment>
          <Typography className={classes.instructionsstepper}>
            Mediation Numéro : {mediationa.mediationNumero}
          </Typography>
        </Fragment>
      );
    case 5:
      return (
        <Fragment>
          <Button size='small' color='secondary'>
            Refuser
          </Button>
          Justrification :
          <Button size='small' color='secondary'>
            {mediationa.justification}
          </Button>
        </Fragment>
      );
    default:
      return 'Unknown stepIndex';
  }
}
const useStyles = makeStyles((theme) => ({
  textPrimary: {
    fontSize: '22px',
    fontWeight: '600',
    display: 'flex',
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
  roote: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  root: {
    flexGrow: 1,
    maxHeight: 345,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    minWidth: 120,
    minHeight: 50,
  },
  button: {
    minWidth: 120,
    minHeight: 55,
  },
  roota: {
    marginTop: '10px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom: theme.spacing(1),
    justifyContent: 'flex-end',
    marginLeft: 'auto',
  },
  playIcon: {
    height: 20,
    width: 20,
  },
  pagination: {
    marginLeft: '30%',
    bottom: theme.spacing(5),
    position: 'absolute',
  },
  btnAdd: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  buttona: {
    height: 5,
    width: 5,
  },
  blocnotFound: {
    textAlign: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  boo: {
    height: '50%',
  },
  iconPossion: {
    marginLeft: '30%',
  },
  btnAction: {
    marginLeft: 'auto',
  },
  rootstepper: {
    width: '100%',
  },
  backButtonstepper: {
    marginRight: theme.spacing(1),
  },
  instructionsstepper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  roottestepper: {
    marginLeft: '15px',
  },
  textCentera: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textCenter: {
    textAlign: 'center',
  },
}));
const Stepa = ({ mediationa }) => {
  const classes = useStyles();
  const steps = getSteps();
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(mediationa.step);
  const [idDemande, setIdDemande] = React.useState(null);
  const handleClose = () => {
    setOpen(false);
    //getMediation();
  };
  const history = useHistory();
  return (
    <Fragment>
      <div className={classes.rootstepper}>
        <Stepper activeStep={mediationa.step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructionsstepper}>
              Mediation Numéro : {mediationa.mediationNumero}
            </Typography>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructionsstepper}>
              {getStepContent(
                activeStep,
                mediationa,
                classes,
                setIdDemande,
                setOpen,
                history,
                setActiveStep
              )}
            </Typography>
          </div>
        )}
        {open === true ? (
          <ActionForm open={open} id={idDemande} handleClose={handleClose} />
        ) : (
          <AlertSnackbar />
        )}
      </div>
    </Fragment>
  );
};
export default Stepa;
