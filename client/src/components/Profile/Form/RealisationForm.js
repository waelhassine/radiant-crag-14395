import React, { Fragment, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRealisation , updateRealisation,deleteRealisation} from '../../../actions/profile';
import moment from 'moment';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  rota: {},
  modal: {
    display: 'flex',
    width: '50%',
    left: '100px',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '330px',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  test: {
    marginLeft: 'auto',
  },
}));
const RealisationForm = ({
  open,
  handleClose,
  addRealisation,
  updateRealisation,
  deleteRealisation,
  history,
  realisation,
}) => {
  const [formData, setFormData] = React.useState({});
  useEffect(() => {
    if(realisation === null){
      setFormData({
        title: '',
        date: '',
        description: '',
      });
    }
    else {
        realisation.date = moment(realisation.date).format("YYYY-MM-DD");
     
      
      setFormData(realisation);
    }
    console.log(realisation);
  }, [realisation]);
  const classes = useStyles();
  

  const { title, date, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(realisation);
    if(realisation === null) {
      addRealisation(formData, history);
    }else {
      delete formData._id;
      updateRealisation(realisation._id,formData, history);
    }
   
  };
  const deleteRealisationClick =() => {
    deleteRealisation(realisation._id);
  }
  return (
    <Fragment>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card className={classes.roota}>
            <CardHeader title='Realisation' />
            <form
              className={classes.root}
              noValidate
              onSubmit={(e) => onSubmit(e)}
              autoComplete='off'
            >
              <Divider />
              <CardContent>
                <TextField
                  required
                  id='title'
                  name='title'
                  label='Nom'
                  variant='outlined'
                  onChange={(e) => onChange(e)}
                  value={title}
                />
                <TextField
                  id='date'
                  name='date'
                  label='Date'
                  type='date'
                  variant='outlined'
                  onChange={(e) => onChange(e)}
                  value={date}
                  label='date'
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
               
                <TextField
                  id='outlined-multiline-static'
                  name='description'
                  onChange={(e) => onChange(e)}
                  value={description}
                  label='Description'
                  multiline
                  variant='outlined'
                />
              </CardContent>
              <CardActions>
                { 
realisation === null ? ( <Fragment><Button
  className={classes.test}
  size='medium'
  type='clear'
  variant='outlined'
  color='secondary'
>
  Cancel
</Button>
<Button
  className={classes.test}
  type='submit'
  size='medium'
  variant='outlined'
  color='primary'
  startIcon={<CloudUploadIcon />}
>
  Enregister
</Button> </Fragment>):(<Fragment><Button
                  className={classes.test}
                  size='medium'
                  onClick={deleteRealisationClick}
                  variant='outlined'
                  color='secondary'
                  startIcon={<DeleteForeverIcon />}
                >
                  Delete
                </Button>
                <Button
                  className={classes.test}
                  type='submit'
                  size='medium'
                  variant='outlined'
                  color='primary'
                  startIcon={<CloudUploadIcon />}
                >
                  Modifier
                </Button></Fragment>)
                }
               
              </CardActions>
            </form>
          </Card>
        </Fade>
      </Modal>
    </Fragment>
  );
};
RealisationForm.propTypes = {
  addRealisation: PropTypes.func.isRequired,
  updateRealisation: PropTypes.func.isRequired,
  deleteRealisation: PropTypes.func.isRequired,
  realisation: PropTypes.object.isRequired,
};

export default connect(null, { addRealisation ,updateRealisation,deleteRealisation})(withRouter(RealisationForm));
