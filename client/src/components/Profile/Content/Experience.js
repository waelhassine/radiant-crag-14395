import React, { Fragment  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { Divider } from '@material-ui/core';
import Moment from 'react-moment';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { deepOrange } from '@material-ui/core/colors';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import ExperienceForm from '../Form/ExperienceForm';

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
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },

  test: {
    float: 'right',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const Experience = ({ experiences }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [experience, setExperience] = React.useState(null);

  const handleClose = () => {
    setOpen(false);
    setExperience(null);
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
                              setExperience(null);
                            }} />
              </IconButton>
            }
            title='Expérience'
          />
          <CardContent>
            <Grid
              container
              direction='row'
              justify='flex-start'
              alignItems='flex-start'
              spacing={2}
            >
               {experiences.length > 0 ? (
                experiences.map((experience) => (
                  <Fragment>
                    <Grid item xs={12} sm={1}>
                      <Avatar variant='square' className={classes.square}>
                        <AccountBalanceIcon />
                      </Avatar>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <p className={classes.textPrimary}>{experience.title}</p>
                      <p className={classes.textPlace}>{experience.company}</p>
                      <p className={classes.textDate}>
                      <Moment format="DD/MM/YYYY">{moment.utc(experience.from)}</Moment> – <Moment format="DD/MM/YYYY">{moment.utc(experience.to)}</Moment> |{' '}
                        {experience.location}
                      </p>

                      <p>{experience.description}</p>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <div className={classes.test}>
                        <IconButton aria-label='delete'>
                          <EditRoundedIcon
                            onClick={() => {
                              setOpen(true);
                              setExperience(experience);
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
      {
        open === true ? ( <ExperienceForm
          open={open}
          experience={experience}
          handleClose={handleClose}
        />):(null)
      }
     
    </div>
  );
};
Experience.propTypes = {
  experiences: PropTypes.object.isRequired,
};
export default Experience;
