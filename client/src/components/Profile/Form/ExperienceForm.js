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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience , updateExperience ,deleteExperience} from '../../../actions/profile';
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
const ExperienceForm = ({
  open,
  handleClose,
  addExperience,
  updateExperience,
  deleteExperience,
  history,
  experience,
}) => {
  const [formData, setFormData] = React.useState({});
  useEffect(() => {
    if(experience === null){
      setFormData({
        title: '',
        company: '',
        location: '',
        from: '',
        to: '',
        description: '',
      });
    }
    else {
      experience.from = moment(experience.from).format("YYYY-MM-DD");
      experience.to = moment(experience.to).format("YYYY-MM-DD");
      
      setFormData(experience);
    }
    console.log(experience);
  }, [experience]);
  const classes = useStyles();
  

  const { title, company, location, from, to, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(experience);
    if(experience === null) {
      addExperience(formData, history);
    }else {
      delete formData._id;
      updateExperience(experience._id,formData, history);
    }
   
  };
  const deleteExperienceClick =() => {
    deleteExperience(experience._id);
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
            <CardHeader title='Expérience' />
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
                  label='Intitulé du poste'
                  variant='outlined'
                  onChange={(e) => onChange(e)}
                  value={title}
                />
                <TextField
                  required
                  id='company'
                  name='company'
                  onChange={(e) => onChange(e)}
                  value={company}
                  label='Entreprise'
                  variant='outlined'
                />
                <FormControl variant='outlined' className={classes.formControl}>
                  <InputLabel id='location'>Location</InputLabel>
                  <Select
                    labelId='location'
                    id='location'
                    name='location'
                    onChange={(e) => onChange(e)}
                    value={location}
                    label='Location'
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value='Sousse'>Sousse</MenuItem>
                    <MenuItem value='Tunis'>Tunis</MenuItem>
                    <MenuItem value='Monastir'>Monastir</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id='from'
                  name='from'
                  label='Date de début'
                  type='date'
                  variant='outlined'
                  onChange={(e) => onChange(e)}
                  value={from}
                  label='from'
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id='to'
                  name='to'
                  label='Date de fin'
                  type='date'
                  variant='outlined'
                  onChange={(e) => onChange(e)}
                  value={to}
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
experience === null ? ( <Fragment><Button
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
                  onClick={deleteExperienceClick}
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
ExperienceForm.propTypes = {
  addExperience: PropTypes.func.isRequired,
  updateExperience: PropTypes.func.isRequired,
  deleteExperience: PropTypes.func.isRequired,
  experience: PropTypes.object.isRequired,
};

export default connect(null, { addExperience ,updateExperience,deleteExperience})(withRouter(ExperienceForm));
