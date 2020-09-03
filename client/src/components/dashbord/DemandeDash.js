import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMediation } from '../../actions/mediation';
import { createMedi } from '../../actions/medi';
import Spinner from '../layout/layoutStyle/Spinner';
import AlertSnackbar from '../layout/layoutStyle/AlertSnackbar';
import CardActions from '@material-ui/core/CardActions';
import PDFViewer from 'pdf-viewer-reactjs';
import ModelReadFile from './ModelReadFile';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Divider from '@material-ui/core/Divider';
import ActionForm from './ActionForm';
import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Stepa from './StepAuteur';

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

const DemandeDash = ({
  getMediation,
  createMedi,
  mediation: { mediation, loading },
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [opena, setOpena] = React.useState(false);

  const handleClick = () => {
    setOpena(!opena);
  };

  const [openfile, setOpenfile] = React.useState(false);
  const [fileid, setFileid] = React.useState(null);
  const [idDemande, setIdDemande] = React.useState(null);
  useEffect(() => {
    getMediation();
  }, [getMediation]);
  useEffect(() => {
    if (mediation === null) {
    } else {
      console.log(mediation);
    }
  }, [mediation]);

  const handleClose = () => {
    // setOpen(false);
    setOpenfile(false);
    setFileid(null);
    //getMediation();
  };
  const setIdFilea = (id) => {
    console.log(id.toString());
    console.log(typeof id);
    setFileid(id);
    setOpenfile(true);
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
            {mediation === null ? (
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
                        <Grid item xs={6}>
                          <br />
                          <Typography className={classes.pos}>
                            <strong>Domande</strong>
                          </Typography>
                          <Typography className={classes.pos}>
                            Nom : {mediationa.demendeur.name}
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
                          <Button
                            color='primary'
                            startIcon={<InsertDriveFileIcon />}
                            onClick={() => {
                              setFileid(mediationa.file);
                              setIdDemande(mediationa._id);
                              console.log(mediationa._id);
                              setOpenfile(true);
                            }}
                          >
                            File
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <br />

                          <Typography className={classes.pos}>
                            <strong>Adverse</strong>
                          </Typography>
                          <Typography className={classes.pos}>
                            Nom : {mediationa.name}
                          </Typography>
                          <Typography className={classes.pos}>
                            Email : {mediationa.email}
                          </Typography>
                          <Typography className={classes.pos}>
                            Gsm : {mediationa.gsm}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions disableSpacing>
                      <List className={classes.roote}>
                        <ListItem button onClick={handleClick}>
                          <ListItemIcon>
                            <InboxIcon />
                          </ListItemIcon>
                          <ListItemText primary='Etat' />
                          {opena ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={opena} timeout='auto' unmountOnExit>
                          <Fragment>
                            <Stepa mediationa={mediationa} />
                            {/* <div className={classes.rootstepper}>
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
                                    className={classes.instructionsstepper}
                                  >
                                    Mediation Numéro :{' '}
                                    {mediationa.mediationNumero}
                                  </Typography>
                                </div>
                              ) : (
                                <div>
                                  <Typography
                                    className={classes.instructionsstepper}
                                  >
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
                            </div> */}
                          </Fragment>
                        </Collapse>
                      </List>
                    </CardActions>
                  </Card>
                ))}
              </Fragment>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Fragment>
        {open === true ? (
          <ActionForm open={open} id={idDemande} handleClose={handleClose} />
        ) : (
          <AlertSnackbar />
        )}
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

DemandeDash.propTypes = {
  createMedi: PropTypes.func.isRequired,
  getMediation: PropTypes.func.isRequired,
  mediation: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  mediation: state.mediation,
});
export default connect(mapStateToProps, { getMediation, createMedi })(
  DemandeDash
);
