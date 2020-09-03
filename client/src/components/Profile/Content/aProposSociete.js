import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import { Divider } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { teal } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import SocieteForm from '../Form/SoiceteForm';
const useStyles = makeStyles((theme) => ({
  paddingContent: {
    paddingTop: '30px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },

  textPrimary: {
    marginTop: '0px',
    fontSize: '14px',
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
  colorAvatarFormation: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
  },
  test: {
    float: 'right',
  },
}));
const AproposSociete = ({ profile }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [pro, setProfile] = React.useState(null);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Grid item xs={12} className={classes.paddingContent}>
        <Card>
          <CardHeader
            action={
              <IconButton aria-label='settings'>
                <EditRoundedIcon
                  onClick={() => {
                    setOpen(true);
                  }}
                />
              </IconButton>
            }
            title='Information Géneral'
          />
          <CardContent>
            <Grid
              container
              direction='row'
              justify='flex-start'
              alignItems='flex-start'
              spacing={2}
            >
              <Grid item xs={12} sm={12}>
                <p className={classes.textPrimary}>
                  Raison Sociale:<span>{profile.raisonSociale}</span>{' '}
                </p>
                <p className={classes.textPrimary}>
                  Responsable:<span>{profile.responsable}</span>{' '}
                </p>
                <p className={classes.textPrimary}>
                  Adresse Usine:<span>{profile.adresseUsine}</span>{' '}
                </p>
                <p className={classes.textPrimary}>
                  Registre Commerce:<span>{profile.registreCommerce}</span>{' '}
                </p>
                <p className={classes.textPrimary}>
                  Tel:<span>{profile.tel}</span>{' '}
                </p>
                <p className={classes.textPrimary}>
                  Fax:<span>{profile.fax}</span>{' '}
                </p>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      {
        open === true ? ( <SocieteForm
          open={open}
          profile={profile}
          handleClose={handleClose}
        />):(null)
      }
    </div>
  );
};
AproposSociete.propTypes = {
  profile: PropTypes.object.isRequired,
};
export default AproposSociete;
