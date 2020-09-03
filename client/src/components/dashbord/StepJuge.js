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
function getStepContent(stepIndex, mediationa, classes, history, user) {
  if (stepIndex == !0) {
    if (mediationa.adverse._id === user._id) {
      switch (stepIndex) {
        case 0:
          return (
            <Fragment>
              <div className={classes.textCenter}>
                <p>Etat : En Cours de validation Administration</p>
              </div>
            </Fragment>
          );
        case 1:
          return (
            <Fragment>
              <Fragment>
                {mediationa.nbrJuge && mediationa.jugesAdverse.length === 0 ? (
                  <div className={classes.textCenter}>
                    <Button
                      variant='contained'
                      color='primary'
                      endIcon={<Icon>send</Icon>}
                      className={classes.btnAction}
                      onClick={() => {
                        history.push('/choixjuge', {
                          id: mediationa._id,
                          nbrJuge: mediationa.nbrJuge,
                          owner: 'adverse',
                        });
                      }}
                    >
                      Choix Juge
                    </Button>
                  </div>
                ) : (
                  <div className={classes.textCenter}>
                    <p>Etat : En Cours de validation Choix juge </p>
                  </div>
                )}
              </Fragment>
            </Fragment>
          );
        case 2:
          return (
            <Fragment>
              <h1>sdsd</h1>
              {mediationa.nbrJuge && mediationa.jugesAdverse.length === 0 ? (
                <Button
                  variant='outlined'
                  color='secondary'
                  className={classes.btnAction}
                  onClick={() => {
                    history.push('/choixjuge', {
                      id: mediationa._id,
                      nbrJuge: mediationa.nbrJuge,
                      owner: 'adverse',
                    });
                  }}
                >
                  Choix Juge
                </Button>
              ) : (
                'Etat : En Cours de validation Choix juge'
              )}
            </Fragment>
          );
        case 3:
          return 'waaaaaa';
        case 4:
          return 'Refuser';
        default:
          return 'Unknown stepIndex';
      }
    } else if (mediationa.demendeur === user._id) {
      switch (stepIndex) {
        case 0:
          return (
            <Fragment>
              <div className={classes.textCenter}>
                <p>Etat : En Cours de validation Administration</p>
              </div>
            </Fragment>
          );
        case 1:
          return (
            <Fragment>
              <Fragment>
                {mediationa.nbrJuge &&
                mediationa.jugesDemandeur.length === 0 ? (
                  <div className={classes.textCenter}>
                    <Button
                      variant='contained'
                      color='primary'
                      endIcon={<Icon>send</Icon>}
                      className={classes.btnAction}
                      onClick={() => {
                        history.push('/choixjuge', {
                          id: mediationa._id,
                          nbrJuge: mediationa.nbrJuge,
                          owner: 'demendeur',
                        });
                      }}
                    >
                      Choix Juge
                    </Button>
                  </div>
                ) : (
                  <div className={classes.textCenter}>
                    <p>Etat : En Cours de validation Choix juge</p>
                  </div>
                )}
              </Fragment>
            </Fragment>
          );
        case 2:
          return (
            <Fragment>
              <h1>sdsd</h1>
              {mediationa.nbrJuge && mediationa.jugesDemandeur.length === 0 ? (
                <Button
                  variant='outlined'
                  color='secondary'
                  className={classes.btnAction}
                  onClick={() => {
                    history.push('/choixjuge', {
                      id: mediationa._id,
                      nbrJuge: mediationa.nbrJuge,
                      owner: 'demendeur',
                    });
                  }}
                >
                  Choix Juge
                </Button>
              ) : (
                'Etat : En Cours de validation Choix juge'
              )}
            </Fragment>
          );
        case 3:
          return 'waaaaaa';
        case 4:
          return 'Refuser';
        default:
          return 'Unknown stepIndex';
      }
    } else {
      switch (stepIndex) {
        case 0:
          return (
            <Fragment>
              <div className={classes.textCenter}>
                <p>Etat : En Cours de validation Administration</p>
              </div>
            </Fragment>
          );
        case 1:
          return (
            <Fragment>
              <Fragment>
                {mediationa.nbrJuge &&
                mediationa.jugesAdministrateur.length === 0 ? (
                  <div className={classes.textCenter}>
                    <Button
                      variant='contained'
                      color='primary'
                      endIcon={<Icon>send</Icon>}
                      className={classes.btnAction}
                      onClick={() => {
                        history.push('/choixjuge', {
                          id: mediationa._id,
                          nbrJuge: mediationa.nbrJuge,
                        });
                      }}
                    >
                      Choix Juge
                    </Button>
                  </div>
                ) : (
                  <div className={classes.textCenter}>
                    <p>Etat : En Cours de validation Choix juge</p>
                  </div>
                )}
              </Fragment>
            </Fragment>
          );
        case 2:
          return (
            <Fragment>
              <h1>sdsd</h1>
              {mediationa.nbrJuge &&
              mediationa.jugesAdministrateur.length === 0 ? (
                <Button
                  variant='outlined'
                  color='secondary'
                  className={classes.btnAction}
                  onClick={() => {
                    history.push('/choixjuge', {
                      id: mediationa._id,
                      nbrJuge: mediationa.nbrJuge,
                    });
                  }}
                >
                  Choix Juge
                </Button>
              ) : (
                'Etat : En Cours de validation Choix juge'
              )}
            </Fragment>
          );
        case 3:
          return 'waaaaaa';
        case 4:
          return 'Refuser';
        default:
          return 'Unknown stepIndex';
      }
    }
  } else {
    return (
      <Fragment>
        <div className={classes.textCenter}>
          <p>Etat : En Cours de validation Administration</p>
        </div>
      </Fragment>
    );
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
const StepJuge = ({ mediationa, user }) => {
  const classes = useStyles();
  const steps = getSteps();
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(mediationa.step);
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
              {getStepContent(activeStep, mediationa, classes, history, user)}
            </Typography>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default StepJuge;
