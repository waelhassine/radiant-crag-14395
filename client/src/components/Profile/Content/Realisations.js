import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import AccountTreeIcon from '@material-ui/icons/AccountTree';
import { Divider } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { indigo } from '@material-ui/core/colors';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import RealisationForm from '../Form/RealisationForm';
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
  colorAvatarRealisation: {
    color: theme.palette.getContrastText(indigo[800]),
    backgroundColor: indigo[500],
  },
  test: {
    float: 'right',
  },
}));
const Realisations = ({ realisations }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [realisation, setRealisation] = React.useState(null);

  const handleClose = () => {
    setOpen(false);
    setRealisation(null);
  };
  return (
    <div>
      <Grid item xs={12} className={classes.paddingContent}>
        <Card>
          <CardHeader
            action={
              <IconButton aria-label='settings'>
                <AddRoundedIcon onClick={() => {
                    setOpen(true);
                    setRealisation(null);
                  }}/>
              </IconButton>
            }
            title='Réalisations'
          />
          <CardContent>
            <Grid
              container
              direction='row'
              justify='flex-start'
              alignItems='flex-start'
              spacing={2}
            >
               {realisations.length > 0 ? (
                realisations.map((realisation) => (
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
                    <Grid item xs={12} sm={1}>
                      <div className={classes.test}>
                        <IconButton aria-label='delete'>
                          <EditRoundedIcon  onClick={() => {
                              setOpen(true);
                              setRealisation(realisation);
                            }}/>
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
        <RealisationForm
          open={open}
          realisation={realisation}
          handleClose={handleClose}
        />
      ) : null}
    </div>
  );
};
Realisations.propTypes = {
  realisations: PropTypes.object.isRequired,
};
export default Realisations;
