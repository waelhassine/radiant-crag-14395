import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsersJuge } from '../../../actions/user';
import Spinner from '../../layout/layoutStyle/Spinner';
import ButtonBase from '@material-ui/core/ButtonBase';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Avatar from '@material-ui/core/Avatar';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  roota: {
    flexGrow: 1,
  },
  papere: {
    Color: '#sss',
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
  paperb: {
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
  imge: {
    margin: 'auto',
    objectFit: 'cover',
    display: 'block',
    maxWidth: '100%',
    width: '100%',
    maxHeight: '100%',
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    margin: '2px',
  },
  btn: {
    color: '#228B22',
  },
  btna: {
    borderColor: '#228B22',
    borderStyle: 'solid',
    borderWidth: '1px',
  },
}));
const JugeItem = ({ user, sendData }) => {
  const classes = useStyles();
  const history = useHistory();
  const [usa, setUsa] = useState(user);
  const onClickSelect = (event) => {
    sendData(usa);
  };
  useEffect(() => {
    setUsa(user);
  }, [user]);
  return usa === null ? (
    <Fragment>df</Fragment>
  ) : (
    <Fragment>
      {usa.clicked === true ? (
        <Grid item xs={6}>
          <div className={classes.roote}>
            <Paper className={classes.btna}>
              <Grid container spacing={1}>
                <Grid item>
                  <ButtonBase className={classes.imagee}>
                    <img
                      className={classes.imge}
                      alt={user.name}
                      src={'./uploads/img/' + user.photo}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction='column' spacing={2}>
                    <Grid item xs>
                      <Typography component='h5' variant='h5'>
                        {user.name}
                      </Typography>
                      <Typography variant='subtitle1' color='textSecondary'>
                        {user.email}
                      </Typography>
                      <Typography variant='subtitle1' color='textSecondary'>
                        Gsm: {user.gsm}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        variant='outlined'
                        className={classes.btn}
                        startIcon={<CancelIcon />}
                        onClick={(event) => onClickSelect(event)}
                      >
                        UnSelect
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <IconButton
                      className={classes.btn}
                      onClick={() => {
                        console.log(user);
                        history.push('/jugeprofile', { id: user._id });
                      }}
                    >
                      <PersonOutlineIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
      ) : (
        <Grid item xs={6}>
          <div className={classes.roote}>
            <Paper className={classes.papere}>
              <Grid container spacing={1}>
                <Grid item>
                  <ButtonBase className={classes.imagee}>
                    <img
                      className={classes.imge}
                      alt='complex'
                      src={'./uploads/img/' + user.photo}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction='column' spacing={2}>
                    <Grid item xs>
                      <Typography component='h5' variant='h5'>
                        {user.name}
                      </Typography>
                      <Typography variant='subtitle1' color='textSecondary'>
                        {user.email}
                      </Typography>
                      <Typography variant='subtitle1' color='textSecondary'>
                        Gsm: {user.gsm}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        variant='outlined'
                        color='primary'
                        startIcon={<DoneAllIcon />}
                        onClick={(event) => onClickSelect(event)}
                      >
                        Select
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <IconButton
                      color='primary'
                      onClick={() => {
                        console.log(user);
                        history.push('/jugeprofile', { id: user._id });
                      }}
                      //  href='/jugeprofile/:${user.id}'
                    >
                      <PersonOutlineIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
      )}
    </Fragment>
  );
};

JugeItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default JugeItem;
