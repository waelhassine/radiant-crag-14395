import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMedia } from '../../actions/medi';
import Spinner from '../layout/layoutStyle/Spinner';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Moment from 'react-moment';
import moment from 'moment';
import Divider from '@material-ui/core/Divider';
import WarningIcon from '@material-ui/icons/Warning';
import Icon from '@material-ui/core/Icon';
import { useHistory } from 'react-router-dom';
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
const MediDash = ({ getMedia, medi: { medi, loading } }) => {
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    getMedia();
  }, [getMedia]);

  return loading ? (
    <Fragment>
      <Spinner />
    </Fragment>
  ) : (
    <Fragment>
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
                <p className={classes.textPrimary}>Médiation</p>
              </Grid>
            </Grid>
            <Grid>
              {medi.length <= 0 ? (
                <Fragment>
                  <Grid item>
                    <div className={classes.blocnotFound}>
                      <img src='not_found.png' height='300px' with='300px' />

                      <h1>No Data found !</h1>
                    </div>
                  </Grid>
                </Fragment>
              ) : (
                <Fragment>
                  {medi.map((mediationa) => (
                    <Card className={classes.roota} key={medi._id}>
                      <CardHeader
                        action={
                          <Fragment>
                            <p>
                              Date colture :{'  '}
                              <Button
                                startIcon={<WarningIcon />}
                                variant='outlined'
                                color='secondary'
                              >
                                <Moment format='DD/MM/YYYY'>
                                  {moment
                                    .utc(mediationa.createdAt)
                                    .add(6, 'month')}
                                </Moment>
                              </Button>
                            </p>
                          </Fragment>
                        }
                        title='Médiation'
                      />
                      <Divider />
                      <CardContent>
                        <Grid container>
                          <Grid item xs={10}>
                            <br />
                            <Typography className={classes.pos}>
                              Adverse :{mediationa.adverse.name}
                            </Typography>
                            <Typography className={classes.pos}>
                              Demander :{mediationa.demendeur.name}
                            </Typography>

                            <Typography className={classes.pos}>
                              Description :{mediationa.details.description}
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions disableSpacing>
                        <Button
                          variant='outlined'
                          color='primary'
                          endIcon={<Icon>send</Icon>}
                          className={classes.btnAction}
                          onClick={() => {
                            history.push(`/mediationdetails/${mediationa._id}`);
                          }}
                        >
                          Details
                        </Button>
                      </CardActions>
                    </Card>
                  ))}
                </Fragment>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};
MediDash.propTypes = {
  getMedia: PropTypes.func.isRequired,
  medi: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  medi: state.medi,
});

export default connect(mapStateToProps, {
  getMedia,
})(MediDash);
