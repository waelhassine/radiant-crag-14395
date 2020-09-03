import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMediationBySociete } from '../../actions/mediation';
import Spinner from '../layout/layoutStyle/Spinner';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DemandeForm from './AddForm/DemandeForm';
import ConfirmBlock from './AddForm/ConfirmBlock';
import AlertSnackbar from '../layout/layoutStyle/AlertSnackbar';
import CardActions from '@material-ui/core/CardActions';
import PDFViewer from 'pdf-viewer-reactjs';
import ModelReadFile from './ModelReadFile';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Divider from '@material-ui/core/Divider';
import { useHistory } from 'react-router-dom';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Icon from '@material-ui/core/Icon';
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
  textCenter: {
    textAlign: 'center',
  },
}));
function getSteps() {
  return ['Formulaire Demande', 'Choix Juge', 'Creation Médiation'];
}
function getStepContent(stepIndex, mediationa, classes, history, mediation) {
  console.log(mediationa);
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
            {mediationa.nbrJuge && mediationa.juges.length === 0 ? (
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
          {mediationa.nbrJuge && mediationa.juges.length === 0 ? (
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
const MediationDash = ({
  getMediationBySociete,
  mediation: { mediation, loading },
}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const history = useHistory();
  useEffect(() => {
    getMediationBySociete();
  }, [getMediationBySociete]);
  useEffect(() => {
    if (mediation === null) {
    } else {
      console.log(mediation);
      mediation.map((medi) => {
        setActiveStep(medi.step);
      });
    }
  }, [mediation]);
  const [open, setOpen] = React.useState(false);
  const [openfile, setOpenfile] = React.useState(false);
  const [fileid, setFileid] = React.useState(null);
  const handleClose = () => {
    setOpen(false);
    setOpenfile(false);
    setFileid(null);
  };
  const setIdFilea = (id) => {
    console.log(id.toString());
    console.log(typeof id);
    setFileid(id);
    setOpenfile(true);
  };
  const choixJuge = () => {
    history.push('/choixjuge');
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={1}
            direction='row'
            justify='flex-start'
            alignItems='stretch'
          >
            <Grid item>
              <p className={classes.textPrimary}>Demande</p>
            </Grid>
          </Grid>
          <Grid>
            {mediation.length <= 0 ? (
              <Fragment>
                <Grid item>
                  <div className={classes.blocnotFound}>
                    <img src='not_found.png' height='300px' with='300px' />

                    <h1>No Data found !</h1>
                    <Button
                      variant='outlined'
                      color='secondary'
                      onClick={() => {
                        setOpen(true);
                      }}
                    >
                      Créer Médiation
                    </Button>
                  </div>
                </Grid>
              </Fragment>
            ) : (
              <Fragment>
                {mediation.map((mediationa) => (
                  <Card className={classes.roota} key={mediationa._id}>
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color='textSecondary'
                        gutterBottom
                      >
                        Demande {mediationa.typeDemande}
                      </Typography>
                      <Divider />
                      <Grid container>
                        <Grid item xs={10}>
                          <br />
                          <Typography className={classes.pos}>
                            Adverse : {mediationa.name}
                          </Typography>
                          <Typography className={classes.pos}>
                            Date : {mediationa.createdAt}
                          </Typography>
                          <Typography className={classes.pos}>
                            Categorie : {mediationa.categorie}
                          </Typography>
                          <Typography variant='body2' component='p'>
                            Description :{mediationa.description}
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <br />
                          <br />
                          <Button
                            variant='outlined'
                            color='primary'
                            className={classes.iconPossion}
                            startIcon={<InsertDriveFileIcon />}
                            onClick={() => {
                              setFileid(mediationa.file);
                              setOpenfile(true);
                            }}
                          >
                            File
                          </Button>
                        </Grid>
                        <Grid item>
                          <h3>Status</h3>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions disableSpacing>
                      <Fragment>
                        {(function () {
                          switch (mediationa.etat) {
                            case 'EnCours':
                              return (
                                <Fragment>
                                  <div className={classes.rootstepper}>
                                    <Stepper
                                      activeStep={mediationa.step}
                                      alternativeLabel
                                    >
                                      {steps.map((label) => (
                                        <Step key={label}>
                                          <StepLabel>{label}</StepLabel>
                                        </Step>
                                      ))}
                                    </Stepper>

                                    {activeStep === steps.length ? (
                                      <div>
                                        <Typography
                                          className={
                                            classes.instructionsstepper
                                          }
                                        >
                                          Mediation Numéro :{' '}
                                          {mediationa.mediationNumero}
                                        </Typography>
                                      </div>
                                    ) : (
                                      <div>
                                        <Typography
                                          className={
                                            classes.instructionsstepper
                                          }
                                        >
                                          {getStepContent(
                                            activeStep,
                                            mediationa,
                                            classes,
                                            history,
                                            mediation
                                          )}
                                        </Typography>
                                      </div>
                                    )}
                                  </div>
                                </Fragment>
                              );
                            case 'Refuser':
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
                              return null;
                          }
                        })()}
                      </Fragment>
                    </CardActions>
                  </Card>
                ))}
              </Fragment>
            )}
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.btnAdd}>
        <Fab
          color='primary'
          aria-label='add'
          onClick={() => {
            setOpen(true);
          }}
        >
          <AddIcon />
        </Fab>
      </div>

      {open === true ? (
        <DemandeForm open={open} handleClose={handleClose} />
      ) : (
        <AlertSnackbar />
      )}
      <Fragment>
        {openfile === true ? (
          <div className={classes.btnAdd}>
            <ModelReadFile
              fileid={fileid}
              open={openfile}
              handleClose={handleClose}
            />
          </div>
        ) : null}
      </Fragment>
    </div>
  );
};
MediationDash.propTypes = {
  getMediationBySociete: PropTypes.func.isRequired,
  mediation: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  mediation: state.mediation,
});

export default connect(mapStateToProps, { getMediationBySociete })(
  MediationDash
);
