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
import {
  addEducation,
  updateEducation,
  deleteEducation,
} from '../../../actions/profile';
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
const EducationForm = ({
  open,
  handleClose,
  addEducation,
  updateEducation,
  deleteEducation,
  history,
  education,
}) => {
  const [formData, setFormData] = React.useState({});
  useEffect(() => {
    if (education === null) {
      setFormData({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        description: '',
      });
    } else {
      education.from = moment(education.from).format('YYYY-MM-DD');
      education.to = moment(education.to).format('YYYY-MM-DD');

      setFormData(education);
    }
    console.log(education);
  }, [education]);
  const classes = useStyles();

  const { school, degree, fieldofstudy, from, to, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(education);
    if (education === null) {
      addEducation(formData, history);
    } else {
      delete formData._id;
      updateEducation(education._id, formData, history);
    }
  };
  const deleteEducationClick = () => {
    deleteEducation(education._id);
  };
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
            <CardHeader title='Education' />
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
                  id='school'
                  name='school'
                  label='École'
                  variant='outlined'
                  onChange={(e) => onChange(e)}
                  value={school}
                />
                <TextField
                  required
                  id='degree'
                  name='degree'
                  onChange={(e) => onChange(e)}
                  value={degree}
                  label='Diplôme'
                  variant='outlined'
                />
                <TextField
                  required
                  id='fieldofstudy'
                  name='fieldofstudy'
                  onChange={(e) => onChange(e)}
                  value={fieldofstudy}
                  label='Domaine d’études'
                  variant='outlined'
                />

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
                {education === null ? (
                  <Fragment>
                    <Button
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
                    </Button>{' '}
                  </Fragment>
                ) : (
                  <Fragment>
                    <Button
                      className={classes.test}
                      size='medium'
                      onClick={deleteEducationClick}
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
                    </Button>
                  </Fragment>
                )}
              </CardActions>
            </form>
          </Card>
        </Fade>
      </Modal>
    </Fragment>
  );
};
EducationForm.propTypes = {
  addEducation: PropTypes.func.isRequired,
  updateEducation: PropTypes.func.isRequired,
  deleteEducation: PropTypes.func.isRequired,
  education: PropTypes.object.isRequired,
};

export default connect(null, {
  addEducation,
  updateEducation,
  deleteEducation,
})(withRouter(EducationForm));
