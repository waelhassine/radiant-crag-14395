import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { Divider } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { teal } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import Moment from 'react-moment';
import moment from 'moment';
import EducationForm from '../Form/EducationForm';
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
  colorAvatarFormation: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
  },
  test: {
    float: 'right',
  },
}));
const Formation = ({formations}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [education, setEducation] = React.useState(null);

  const handleClose = () => {
    setOpen(false);
    setEducation(null);
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
                              setEducation(null);
                            }}/>
              </IconButton>
            }
            title='Formation'
          />
          <CardContent>
            <Grid
              container
              direction='row'
              justify='flex-start'
              alignItems='flex-start'
              spacing={2}
            >
             {formations.length > 0 ? (
                 formations.map((formation) => (
                <Fragment>
                  <Grid item xs={12} sm={1}>
                    <Avatar variant='square' className={classes.colorAvatarFormation}>
                      <AssignmentIcon />
                    </Avatar>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <p className={classes.textPrimary}>{formation.degree}</p>
                    <p className={classes.textPlace}>{formation.school} || {formation.fieldofstudy}</p>
                    <p className={classes.textDate}>
                      <Moment format="DD/MM/YYYY">{moment.utc(formation.from)}</Moment> – <Moment format="DD/MM/YYYY">{moment.utc(formation.to)}</Moment> |{' '}
                      </p>

                    <p>{formation.description}</p>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    <div className={classes.test}>
                      <IconButton aria-label='delete'>
                        <EditRoundedIcon  onClick={() => {
                              setOpen(true);
                              setEducation(formation);
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
                <h4>No formations found...</h4>
              )}
            </Grid>
          </CardContent>
        </Card>
        {
        open === true ? ( <EducationForm
          open={open}
          education={education}
          handleClose={handleClose}
        />):(null)
      }
      </Grid>
    </div>
  );
};
Formation.propTypes = {
  formations: PropTypes.object.isRequired,
};
export default Formation;
