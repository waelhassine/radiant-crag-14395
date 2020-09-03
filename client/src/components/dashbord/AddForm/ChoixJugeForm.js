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
import { getAllJuges, updateEtatDemandeJuge } from '../../../actions/mediation';
import Spinner from '../../layout/layoutStyle/Spinner';
import ButtonBase from '@material-ui/core/ButtonBase';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Avatar from '@material-ui/core/Avatar';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import JugeItem from '../AddForm/jugeItem';
import { from } from 'form-data';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AlertSnackbar from '../../layout/layoutStyle/AlertSnackbar';
import Alert from '../../layout/layoutStyle/Alert';
import { setAlert } from '../../../actions/alert';
const useStyles = makeStyles((theme) => ({
  roota: {
    flexGrow: 1,
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
}));
const ChoixJugeForm = ({
  getAllJuges,
  mediation: { juges, loading },
  setAlert,
  updateEtatDemandeJuge,
}) => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [age, setAge] = React.useState('');
  const [usersa, setUsersa] = useState([]);
  const [page, setPage] = React.useState(1);
  const [jugeData, setjugeData] = useState([]);
  const [jugesShow, setjugesShow] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    getAllJuges(location.state.owner, location.state.mediationa);
    console.log(location.state.id);
    console.log(location.state.nbrJuge);
    console.log(location.state.mediationa);
    console.log('----------lfg -glf');
    console.log(juges);
    if (juges == !null) {
      console.log(juges.data);
      setjugeData(juges.data);
    }
  }, [getAllJuges]);
  useEffect(() => {
    if (juges === null) {
    } else {
      juges.data.map((user) => {
        user.clicked = false;
        return user;
      });
      setjugeData(juges.data);
    }
  }, [juges]);

  const handleChangePaggination = (event, value) => {
    // console.log(value);
    setPage(value);
    // getUsersJuge(value, 'juge');
    // setUsersa(users.data);
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
  const handleOnSelect = (juge) => {
    console.log('-----------------from button click');
    let result = jugeData.filter((user) => user.clicked === true);
    console.log(result);
    if (result.length >= location.state.nbrJuge && juge.clicked === false) {
      console.log('dfdsfdsf');
      setAlert('Vous atteignez votre limite de choix', 'error');
    } else {
      console.log(juge);
      setjugeData(
        jugeData.map((user) => {
          if (user._id === juge._id) {
            user.clicked = !user.clicked;

            return user;
          }
          return user;
        })
      );
    }
  };
  const onSaveJuge = () => {
    console.log('-----------------from button click');

    //console.log(usersa);
    let result = jugeData.filter((user) => user.clicked === true);
    let testOne = result.map((user) => {
      return user._id;
    });
    let ra = {
      id: location.state.id,
      juge: testOne,
      owner: location.state.owner,
    };
    console.log(ra);
    updateEtatDemandeJuge(ra, history);
  };

  const contentJuge = jugeData
    .slice(0, 5)
    .map((user, i) => <JugeItem sendData={handleOnSelect} user={user} />);

  return loading ? (
    <Spinner />
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
          <Grid item xs={5}>
            <h1 className={classes.papera}> Choix Juge</h1>
          </Grid>
        </Grid>

        <Grid container direction='row' justify='flex-end' alignItems='center'>
          <Grid item>
            <Typography component='h5' variant='h5'>
              vous avez {location.state.nbrJuge} choix :
            </Typography>
          </Grid>
          {jugeData.map((user, index) => {
            if (user.clicked) {
              return (
                <Grid item>
                  <Avatar
                    alt={user.name}
                    src={'./uploads/img/' + user.photo}
                    className={classes.large}
                  />
                </Grid>
              );
            }
          })}
        </Grid>
      </div>
      {jugeData.length > 0 ? (
        <Fragment>
          <Grid container direction='row' spacing={1}>
            {jugeData.slice(page - 1, page * 5).map((user, i) => (
              <JugeItem sendData={handleOnSelect} user={user} />
            ))}
          </Grid>
          <Grid item xs={10}>
            <div className={classes.pagination}>
              {/* <Pagination
             count={users.nbrPagea}
             page={page}
             onChange={(event, value) => {
               console.log(value);
               setPage(value);
               getUsersJuge(value, 'juge');
             }}
             variant='outlined'
             color='secondary'
           /> */}
              <Pagination
                count={juges.nbrPagea}
                page={page}
                onChange={handleChangePaggination}
                variant='outlined'
                color='secondary'
              />
            </div>
          </Grid>
          <AlertSnackbar />
        </Fragment>
      ) : (
        <p>sss</p>
      )}

      <Grid item xs={2}>
        <div className={classes.paginationa}>
          <Button
            variant='contained'
            color='primary'
            size='small'
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={onSaveJuge}
          >
            Save
          </Button>
        </div>
      </Grid>
    </Fragment>
  );
};
ChoixJugeForm.propTypes = {
  getAllJuges: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  juges: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  updateEtatDemandeJuge: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  mediation: state.mediation,
});

export default connect(mapStateToProps, {
  getAllJuges,
  setAlert,
  updateEtatDemandeJuge,
})(ChoixJugeForm);
