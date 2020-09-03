import React, { Fragment, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ModelReadFile from './ModelReadFile';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import Timer from './Timer';
import AddPvForm from './AddForm/AddPvForm';
import AlertSnackbar from '../layout/layoutStyle/AlertSnackbar';
import Moment from 'react-moment';
import Divider from '@material-ui/core/Divider';
import { getMediaById } from '../../actions/medi';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  roota: {
    flexGrow: 1,
  },
  papera: {
    fontWeight: '700',
    fontSize: '34px',
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
  textCreate: {
    fontSize: '24px',
    fontWeight: 'bolder',
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
    display: 'flex',
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
    minHeight: 40,
  },
  rootc: {
    marginLeft: 'auto',
  },
  roota: {
    display: 'flex',
    maxWidth: '90%',
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
    maxWidth: 150,
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
    marginLeft: '40%',
    bottom: theme.spacing(1),
    position: 'absolute',
  },
  paginationa: {
    marginLeft: '90%',
    position: 'absolute',
    bottom: theme.spacing(1),
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
  roote: {
    flexGrow: 1,
  },
  papere: {
    padding: theme.spacing(1),
    margin: 'auto',
  },
  imagee: {
    width: 151,
    height: 151,
  },
  pos: { marginLeft: '40px' },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    margin: '2px',
  },
}));
const MediationDetails = ({
  auth: { user },
  medi: { med, loading },
  getMediaById,
  match,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [openfile, setOpenfile] = React.useState(false);
  const [fileid, setFileid] = React.useState(null);
  const [value, setValue] = React.useState('one');
  const [meda, setMeda] = React.useState(null);
  useEffect(() => {
    console.log(match.params.id);
    getMediaById(match.params.id);
    console.log(med);
    //console.log(users);
  }, [getMediaById]);
  const handleClose = () => {
    setOpen(false);
    setOpenfile(false);
    setFileid(null);
    //getMediation();
  };
  useEffect(() => {
    setMeda(med);
  }, [med]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return meda === null ? (
    <p>dsd</p>
  ) : (
    <Fragment>
      <div className={classes.roota}>
        <Grid container direction='row' spacing={2}>
          <Grid item xs={1}>
            <IconButton
              aria-label='delete'
              onClick={() => {
                history.push('/dashboard');
              }}
            >
              <ArrowBackRoundedIcon />
            </IconButton>
          </Grid>
          <Grid item xs={5}>
            <h1 className={classes.papera}> Médiation</h1>
          </Grid>
        </Grid>

        <Grid container direction='row' justify='flex-end' alignItems='center'>
          <Grid item></Grid>
          <Grid item>
            <Timer time={meda.createdAt} />
          </Grid>
        </Grid>
      </div>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='stretch'
        spacing={1}
      >
        <Grid item xs={11}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={5}>
                  <Grid
                    container
                    direction='column'
                    justify='center'
                    alignItems='center'
                    spacing={1}
                  >
                    <Grid item>
                      <Avatar
                        alt={med.demendeur.name}
                        src={'../../uploads/img/' + meda.demendeur.photo}
                      />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.pos}>
                        <strong>Domandeur</strong>
                      </Typography>
                      <Typography className={classes.textCreate}>
                        <strong>{meda.demendeur.name}</strong>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <img className={classes.imge} src='../../zigzag.png' />
                </Grid>
                <Grid item xs={5}>
                  <Grid
                    container
                    direction='column'
                    justify='center'
                    alignItems='center'
                  >
                    <Grid item>
                      <Avatar
                        alt={meda.adverse.name}
                        src={'../../uploads/img/' + meda.adverse.photo}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>
                        <strong>Adverse</strong>
                      </Typography>
                      <Typography className={classes.textCreate}>
                        {meda.adverse.name}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  Description: {meda.details.description}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item={11}>
          <AppBar position='static' color='inherit'>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='wrapped label tabs example'
            >
              <Tab value='one' label='Juges' wrapped {...a11yProps('one')} />
              <Tab value='two' label='Fiches' {...a11yProps('two')} />
              <Tab value='three' label='Action' {...a11yProps('three')} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index='one'>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
            >
              {meda.juges.map((juge) => {
                return (
                  <Fragment>
                    <div>
                      <Grid item xs={2}>
                        <Avatar
                          alt={juge.name}
                          src={'../../uploads/img/' + juge.photo}
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography>{juge.name}</Typography>
                      </Grid>
                    </div>
                  </Fragment>
                );
              })}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index='two'>
            Ficher:{' '}
            <Button
              color='primary'
              startIcon={<InsertDriveFileIcon />}
              onClick={() => {
                setFileid(meda.details.file);
                //  console.log(mediationa._id);
                setOpenfile(true);
              }}
            >
              File
            </Button>
          </TabPanel>
          <TabPanel value={value} index='three'>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
              spacing={2}
            >
              {user.role === 'juge' ? (
                <Fragment>
                  <Grid item={6}>
                    <Button
                      variant='outlined'
                      color='secondary'
                      className={classes.button}
                      startIcon={<AddToPhotosIcon />}
                      onClick={() => {
                        setOpen(true);
                      }}
                    >
                      Ajouter PV
                    </Button>
                  </Grid>
                  <Grid item={6}>
                    <Button
                      variant='contained'
                      color='primary'
                      className={classes.button}
                      endIcon={<Icon>send</Icon>}
                    >
                      Cloturé
                    </Button>
                  </Grid>
                </Fragment>
              ) : (
                <p>Not Authrized</p>
              )}
            </Grid>
          </TabPanel>
        </Grid>
        <Grid container direction='column' spacing={1}>
          <Card>
            <CardContent>
              <Grid item={10}>
                <h1 className={classes.papera}> Réunion</h1>
              </Grid>
              <Grid item={10}>
                <Fragment>
                  {meda.pvRenion.length > 0 ? (
                    <Timeline align='alternate'>
                      {meda.pvRenion.map((pvRenion) => (
                        <TimelineItem>
                          <TimelineOppositeContent>
                            <Typography variant='body2' color='textSecondary'>
                              <Moment format='DD/MM/YYYY hh:mm'>
                                {moment.utc(pvRenion.date)}
                              </Moment>
                            </Typography>
                          </TimelineOppositeContent>
                          <TimelineSeparator>
                            <TimelineDot color='secondary'>
                              <FastfoodIcon />
                            </TimelineDot>
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                              <Typography variant='subtitle1' gutterBottom>
                                {pvRenion.description} subtitle1. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                                Quos blanditiis tenetur
                              </Typography>

                              <Button
                                color='primary'
                                startIcon={<InsertDriveFileIcon />}
                                onClick={() => {
                                  setFileid(pvRenion.file);

                                  setOpenfile(true);
                                }}
                              >
                                Ficher
                              </Button>
                              <Divider />
                              <Typography variant='subtitle2' gutterBottom>
                                Ajouter par : {pvRenion.ajouterPar.name}
                              </Typography>
                            </Paper>
                          </TimelineContent>
                        </TimelineItem>
                      ))}
                    </Timeline>
                  ) : (
                    <p>dffd</p>
                  )}
                </Fragment>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {open === true ? (
        <AddPvForm
          open={open}
          idMediation={meda._id}
          handleClose={handleClose}
        />
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
  );
};
const mapStateToProps = (state) => ({
  medi: state.medi,
  auth: state.auth,
});
MediationDetails.propTypes = {
  getMediaById: PropTypes.func.isRequired,
  medi: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getMediaById })(MediationDetails);
