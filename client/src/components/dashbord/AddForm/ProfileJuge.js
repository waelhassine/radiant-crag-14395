import React, { Fragment, useEffect } from 'react';
import { getJugeProfile } from '../../../actions/mediation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { Link, withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import Badge from '@material-ui/core/Badge';
import { Divider } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Moment from 'react-moment';
import moment from 'moment';
import { indigo } from '@material-ui/core/colors';
import { teal } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
const useStyles = makeStyles((theme) => ({
  roota: {
    flexGrow: 1,
  },
  root: {
    maxHeight: 345,
  },
  paper: {
    width: 'fit-content',
    height: '200px',
  },
  imgCover: {
    width: 'fit-content',
    height: '200px',
  },

  media: {
    height: '200px',
  },

  large: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    borderStyle: 'solid',
    borderColor: 'white',
    boxShadow: '0 0 5px gray',
  },
  paddingIamge: {
    marginTop: '-70px',
  },
  textNom: {
    marginLeft: '110px',
    marginTop: '-40px',
  },
  testa: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '-40px',
    display: 'flex',
  },
  iconHouse: {
    background: '#ccc',
    padding: '2px',
    marginRight: '5px',
  },

  input: {
    display: 'none',
  },
  paddingContent: {
    paddingTop: '30px',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
  colorAvatarRealisation: {
    color: theme.palette.getContrastText(indigo[800]),
    backgroundColor: indigo[500],
  },
  colorAvatarFormation: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
  },

  textPrimary: {
    marginTop: '0px',
    fontSize: '18px',
    fontWeight: '600',
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
  textPlace: {
    marginTop: '-20px',
    fontSize: '16px',
    fontWeight: '500',
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
  textDate: {
    marginTop: '-10px',
  },
  test: {
    float: 'right',
  },
}));
const ProfileJuge = ({
  getJugeProfile,
  match,
  history,
  mediation: { juge },
}) => {
  const location = useLocation();
  const classes = useStyles();
  useEffect(() => {
    console.log(location.state.id);
    getJugeProfile(location.state.id);
  }, [getJugeProfile]);
  return juge === null ? (
    <Fragment>
      <h1>sdsdsdsdsd</h1>
    </Fragment>
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
        </Grid>
      </div>
      <Grid>
        <Grid item xs={12}>
          <Card>
            <CardMedia
              className={classes.media}
              image='slidertete.png'
              title='Paella dish'
            />
            <CardContent>
              <div className={classes.paddingIamge}>
                <Badge
                  overlap='circle'
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                >
                  <Avatar
                    alt={juge.user.name}
                    src={'./uploads/img/' + juge.user.photo}
                    className={classes.large}
                  />
                </Badge>
              </div>
              <div className={classes.textNom}>
                <Typography gutterBottom variant='h5' component='h2'>
                  {juge.user.name}
                </Typography>
                <Typography component='h5'>{juge.titre}</Typography>
              </div>
              <div className={classes.testa}>
                <HomeWorkIcon className={classes.iconHouse} />
                <p>{juge.location}</p>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Divider />
        <section id='experience'>
          <Grid item xs={12} className={classes.paddingContent}>
            <Card>
              <CardHeader title=' Licences et certifications' />
              <CardContent>
                <Grid
                  container
                  direction='row'
                  justify='flex-start'
                  alignItems='flex-start'
                  spacing={2}
                >
                  {juge.certification ? (
                    juge.certification.map((certification) => (
                      <Fragment>
                        <Grid item xs={12} sm={12}>
                          <Avatar
                            variant='square'
                            className={classes.colorAvatarCertification}
                          >
                            <VerifiedUserIcon />
                          </Avatar>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                          <p className={classes.textPrimary}>
                            {certification.title}
                          </p>
                          <p className={classes.textDate}>
                            {certification.date}
                          </p>

                          <p>{certification.description}</p>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Divider />
                        </Grid>
                      </Fragment>
                    ))
                  ) : (
                    <h4>No profiles found...</h4>
                  )}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </section>

        <section id='formation'>
          <Grid item xs={12} className={classes.paddingContent}>
            <Card>
              <CardHeader title='Expérience' />
              <CardContent>
                <Grid
                  container
                  direction='row'
                  justify='flex-start'
                  alignItems='flex-start'
                  spacing={2}
                >
                  {juge.experience ? (
                    juge.experience.map((experience) => (
                      <Fragment>
                        <Grid item xs={12} sm={1}>
                          <Avatar
                            variant='square'
                            className={classes.colorAvatarFormation}
                          >
                            <AccountBalanceIcon />
                          </Avatar>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                          <p className={classes.textPrimary}>
                            {experience.title}
                          </p>
                          <p className={classes.textPlace}>
                            {experience.company}
                          </p>
                          <p className={classes.textDate}>
                            <Moment format='DD/MM/YYYY'>
                              {moment.utc(experience.from)}
                            </Moment>{' '}
                            –{' '}
                            <Moment format='DD/MM/YYYY'>
                              {moment.utc(experience.to)}
                            </Moment>{' '}
                            | {experience.location}
                          </p>

                          <p>{experience.description}</p>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Divider />
                        </Grid>
                      </Fragment>
                    ))
                  ) : (
                    <h4>No profiles found...</h4>
                  )}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </section>

        <section id='certification'>
          <Grid item xs={12} className={classes.paddingContent}>
            <Card>
              <CardHeader title='Formation' />
              <CardContent>
                <Grid
                  container
                  direction='row'
                  justify='flex-start'
                  alignItems='flex-start'
                  spacing={2}
                >
                  {juge.formation ? (
                    juge.formation.map((formation) => (
                      <Fragment>
                        <Grid item xs={12} sm={1}>
                          <Avatar
                            variant='square'
                            className={classes.colorAvatarFormation}
                          >
                            <AssignmentIcon />
                          </Avatar>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                          <p className={classes.textPrimary}>
                            {formation.degree}
                          </p>
                          <p className={classes.textPlace}>
                            {formation.school} || {formation.fieldofstudy}
                          </p>
                          <p className={classes.textDate}>
                            <Moment format='DD/MM/YYYY'>
                              {moment.utc(formation.from)}
                            </Moment>{' '}
                            –{' '}
                            <Moment format='DD/MM/YYYY'>
                              {moment.utc(formation.to)}
                            </Moment>{' '}
                            |{' '}
                          </p>

                          <p>{formation.description}</p>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Divider />
                        </Grid>
                      </Fragment>
                    ))
                  ) : (
                    <h4>No formations found...</h4>
                  )}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </section>
        <section id='realisation'>
          <Grid item xs={12} className={classes.paddingContent}>
            <Card>
              <CardHeader title='Réalisations' />
              <CardContent>
                <Grid
                  container
                  direction='row'
                  justify='flex-start'
                  alignItems='flex-start'
                  spacing={2}
                >
                  {juge.realisation.length ? (
                    juge.realisation.map((realisation) => (
                      <Fragment>
                        <Grid item xs={12} sm={1}>
                          <Avatar
                            variant='square'
                            className={classes.colorAvatarRealisation}
                          >
                            <AccountTreeIcon />
                          </Avatar>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                          <p className={classes.textPrimary}>
                            {realisation.title}
                          </p>
                          <p className={classes.textDate}>{realisation.date}</p>

                          <p>{realisation.description}</p>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Divider />
                        </Grid>
                      </Fragment>
                    ))
                  ) : (
                    <h4>No profiles found...</h4>
                  )}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </section>
      </Grid>
    </Fragment>
  );
};

ProfileJuge.propTypes = {
  getJugeProfile: PropTypes.func.isRequired,
  juge: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  mediation: state.mediation,
});

export default connect(mapStateToProps, { getJugeProfile })(ProfileJuge);
