import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMediationBySociete } from '../../actions/mediation';
import Spinner from '../layout/layoutStyle/Spinner';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DemandeForm from './AddForm/DemandeForm';

import AlertSnackbar from '../layout/layoutStyle/AlertSnackbar';
import CardActions from '@material-ui/core/CardActions';

import ModelReadFile from './ModelReadFile';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Divider from '@material-ui/core/Divider';
import { useHistory } from 'react-router-dom';

import Icon from '@material-ui/core/Icon';
import Stepa from './StepJuge';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
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
  roote: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const DemandeSuivi = ({
  getMediationBySociete,
  mediation: { mediation, loading },
  auth: { user },
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [opena, setOpena] = React.useState(false);
  useEffect(() => {
    getMediationBySociete();
  }, [getMediationBySociete]);
  useEffect(() => {
    if (mediation === null) {
    } else {
      console.log(mediation);
    }
  }, [mediation]);
  const handleClick = () => {
    setOpena(!opena);
  };
  const [open, setOpen] = React.useState(false);
  const [openfile, setOpenfile] = React.useState(false);
  const [fileid, setFileid] = React.useState(null);
  const handleClose = () => {
    setOpen(false);
    setOpenfile(false);
    setFileid(null);
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
                            {(function () {
                              switch (mediationa.etat) {
                                case 'EnCours':
                                  return (
                                    <Fragment>
                                      <Stepa
                                        mediationa={mediationa}
                                        user={user}
                                      />
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
                        </Collapse>
                      </List>
                      <Fragment></Fragment>
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
DemandeSuivi.propTypes = {
  getMediationBySociete: PropTypes.func.isRequired,
  mediation: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  mediation: state.mediation,
  auth: state.auth,
});

export default connect(mapStateToProps, { getMediationBySociete })(
  DemandeSuivi
);
