import React, { Fragment,useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
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
import { Divider } from '@material-ui/core';

import Experience from './Content/Experience';
import Formation from './Content/Formation';
import Certifications from './Content/Certifications';
import Realisation from './Content/Realisations';
import AproposSociete from './Content/aProposSociete';
import Button from '@material-ui/core/Button';
import Spinner from '../layout/layoutStyle/Spinner';
import AlertSnackbar from '../layout/layoutStyle/AlertSnackbar';
import { connect } from 'react-redux';
import { getCurrentProfile, updateProfilePhoto } from '../../actions/profile';
import { loadUser } from '../../actions/auth';
const useStyles = makeStyles((theme) => ({
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
}));
const Profile = ({
  profile: { profile, loading },
  auth: { user },
  updateProfilePhoto,
}) => {
  const classes = useStyles();
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  const handleFile = (e) => {
    console.log(e.target.files[0]);
    // this.setState({ ...this.state, [e.target.name]: e.target.files[0] });
  };
  const SectionProfile = () => {
    if (user.role === 'juge') {
      return (
        <Fragment>
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
                      badgeContent={
                        <Fragment>
                        <input
                          accept='image/*'
                          className={classes.input}
                          id='icon-button-file'
                          type='file'
                          name='file'
                          onChange={(e) => {
                            console.log(e.target.files[0]);
                            updateProfilePhoto(e.target.files[0]);
                            window.location.reload(false);
                          }}
                        />
                        <label htmlFor='icon-button-file'>
                          <IconButton
                            color='primary'
                            aria-label='upload picture'
                            component='span'
                          >
                            <PhotoCamera />
                          </IconButton>
                        </label>
                      </Fragment>
                      }
                    >
                      <Avatar
                        alt={user.name}
                        src={'./uploads/img/' + user.photo}
                        className={classes.large}
                      />
                    </Badge>
                  </div>
                  <div className={classes.textNom}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {user.name}
                    </Typography>
                    <Typography component='h5'>{profile.titre}</Typography>
                  </div>
                  <div className={classes.testa}>
                    <HomeWorkIcon className={classes.iconHouse} />
                    <p>{profile.location}</p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Divider />
            <section id='experience'>
              <Experience experiences={profile.experience} />
            </section>

            <section id='formation'>
              <Formation formations={profile.education} />
            </section>

            <section id='certification'>
              <Certifications certifications={profile.certification} />
            </section>
            <section id='realisation'>
              <Realisation realisations={profile.realisation} />
            </section>
          </Grid>
        </Fragment>
      );
    } else if (user.role === 'societe') {
      return (
        <Fragment>
          <Grid>
            <Grid item xs={12}>
              <Card>
                <CardMedia
                  className={classes.media}
                  image='testslideTwo.png'
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
                      badgeContent={
                        <Fragment>
                          <input
                            accept='image/*'
                            className={classes.input}
                            id='icon-button-file'
                            type='file'
                            name='file'
                            onChange={(e) => {
                              console.log(e.target.files[0]);
                              updateProfilePhoto(e.target.files[0]);
                              window.location.reload(false);
                            }}
                          />
                          <label htmlFor='icon-button-file'>
                            <IconButton
                              color='primary'
                              aria-label='upload picture'
                              component='span'
                            >
                              <PhotoCamera />
                            </IconButton>
                          </label>
                        </Fragment>
                      }
                    >
                      <Avatar
                        alt={user.name}
                        src={'./uploads/img/' + user.photo}
                        className={classes.large}
                      />
                    </Badge>
                  </div>
                  <div className={classes.textNom}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {user.name}
                    </Typography>
                    <Typography component='h5'>{profile.titre}</Typography>
                  </div>
                  <div className={classes.testa}>
                    <HomeWorkIcon className={classes.iconHouse} />
                    <p>{profile.ville}</p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Divider />
            <AproposSociete profile={profile} />
          </Grid>
        </Fragment>
      );
    } else {
      return <h1>sdllsd sdklsd sdklsd</h1>;
    }
  };
  return user === null && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <AlertSnackbar />
      <SectionProfile /> 
    </Fragment>
  );
};
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile:state.profile
});
export default connect(mapStateToProps, {
  loadUser,
  updateProfilePhoto,
})(withRouter(Profile));
