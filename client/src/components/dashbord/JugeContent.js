import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsersJuge } from '../../actions/user';
import Spinner from '../layout/layoutStyle/Spinner';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddFormJuge from './AddForm/AddFormJuge';
import ConfirmBlock from './AddForm/ConfirmBlock';
import AlertSnackbar from '../layout/layoutStyle/AlertSnackbar';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

const useStyles = makeStyles((theme) => ({
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
    display: 'flex',
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
}));
const JugeContent = ({ getUsersJuge, user: { users, loading } }) => {
  const classes = useStyles();
  const [userRole] = React.useState('juge');
  const [age, setAge] = React.useState('');
  useEffect(() => {
    getUsersJuge(1, 'juge');
    console.log(users);
  }, [getUsersJuge]);
  const [page, setPage] = React.useState(1);
  const handleChangePaggination = (event, value) => {
    setPage(value);
    getUsersJuge(value, 'juge');
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);
  const [blockId, setBlockId] = React.useState();

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseTwo = () => {
    setOpenTwo(false);
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={1}
            direction='row'
            justify='flex-end'
            alignItems='stretch'
          >
            <Grid item>
              <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel id='demo-simple-select-outlined-label'>
                  Ville
                </InputLabel>
                <Select
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                  value={age}
                  onChange={handleChange}
                  label='Ville'
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='Sousse'>Sousse</MenuItem>
                  <MenuItem value='Mahdia'>Mahdia</MenuItem>
                  <MenuItem value='Tunis'>Tunis</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <Button
                variant='outlined'
                className={classes.button}
                startIcon={<TuneOutlinedIcon />}
              >
                Filter
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {users.data.map((user) => (
          <Grid item xs={6}>
            <Card className={classes.roota}>
              <CardMedia
                className={classes.cover}
                image={'./uploads/img/' + user.photo}
                title={user.name}
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component='h5' variant='h5'>
                    {user.name}
                  </Typography>
                  <Typography variant='subtitle1' color='textSecondary'>
                    {user.email}
                  </Typography>
                  <Typography variant='subtitle1' color='textSecondary'>
                    Gsm : {user.gsm}
                  </Typography>
                </CardContent>
              </div>
              <div className={classes.controls}>
                <IconButton
                  aria-label='previous'
                  onClick={() => {
                    setBlockId(user._id);
                    setOpenTwo(true);
                  }}
                  color='secondary'
                >
                  <HighlightOffOutlinedIcon className={classes.playIcon} />
                </IconButton>
                <IconButton aria-label='play/pause'>
                  <EditOutlinedIcon className={classes.playIcon} />
                </IconButton>
                <IconButton aria-label='next'>
                  <ArrowForwardIosRoundedIcon className={classes.playIcon} />
                </IconButton>
              </div>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12}>
          <div className={classes.pagination}>
            <Pagination
              count={users.nbrPagea}
              page={page}
              onChange={handleChangePaggination}
              variant='outlined'
              color='secondary'
            />
          </div>
        </Grid>
      </Grid>
      <div className={classes.btnAdd}>
        <Fab
          color='primary'
          aria-label='add'
          onClick={() => {
            setOpen(true);
          }}
        >
          <AddIcon />
        </Fab>
      </div>
      <AlertSnackbar />
      {open === true ? (
        <AddFormJuge
          open={open}
          handleClose={handleClose}
          userRole={userRole}
        />
      ) : null}
      {openTwo === true ? (
        <ConfirmBlock
          open={openTwo}
          blockId={blockId}
          handleClose={handleCloseTwo}
        />
      ) : null}
    </div>
  );
};
JugeContent.propTypes = {
  getUsersJuge: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsersJuge })(JugeContent);
