import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import IconButton from '@material-ui/core/IconButton';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { lightBlue } from '@material-ui/core/colors';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import CertificationForm from '../Form/CertificationForm';
const useStyles = makeStyles((theme) => ({
  paddingContent: {
    paddingTop: '30px',
    paddingLeft: '20px',
    paddingRight: '20px',
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
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  colorAvatarCertification: {
    color: theme.palette.getContrastText(lightBlue[800]),
    backgroundColor: lightBlue[500],
  },
  test: {
    float: 'right',
  },
}));
const Certifications = ({ certifications }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [certification, setCertification] = React.useState(null);

  const handleClose = () => {
    setOpen(false);
    setCertification(null);
  };
  return (
    <div>
      <Grid item xs={12} className={classes.paddingContent}>
        <Card>
          <CardHeader
            action={
              <IconButton aria-label='settings'>
                <AddRoundedIcon
                  onClick={() => {
                    setOpen(true);
                    setCertification(null);
                  }}
                />
              </IconButton>
            }
            title=' Licences et certifications'
          />
          <CardContent>
            <Grid
              container
              direction='row'
              justify='flex-start'
              alignItems='flex-start'
              spacing={2}
            >
              {certifications.length > 0 ? (
                certifications.map((certification) => (
                  <Fragment>
                    <Grid item xs={12} sm={1}>
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
                      <p className={classes.textDate}>{certification.date}</p>

                      <p>{certification.description}</p>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <div className={classes.test}>
                        <IconButton aria-label='delete'>
                          <EditRoundedIcon
                            onClick={() => {
                              setOpen(true);
                              setCertification(certification);
                            }}
                          />
                        </IconButton>
                      </div>
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
      {open === true ? (
        <CertificationForm
          open={open}
          certification={certification}
          handleClose={handleClose}
        />
      ) : null}
    </div>
  );
};
Certifications.propTypes = {
  certifications: PropTypes.object.isRequired,
};
export default Certifications;
