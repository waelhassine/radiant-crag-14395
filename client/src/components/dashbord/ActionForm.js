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
import moment from 'moment';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { updateEtatDemande } from '../../actions/mediation';
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
const ActionForm = ({ open, handleClose, updateEtatDemande, id, history }) => {
  const classes = useStyles();
  const [formData, setFormData] = React.useState({
    justification: '',
    etat: 'Accepter',
    nbrJuge: 0,
  });
  const { justification, etat, nbrJuge } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('halooo');
    //console.log(certification);
    formData.id = id;
    console.log(formData);
    updateEtatDemande(formData, history);
    handleClose();
  };
  return (
    <Fragment>
      <Modal
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
            <form
              className={classes.root}
              noValidate
              onSubmit={(e) => onSubmit(e)}
              autoComplete='off'
            >
              <CardHeader title='Action' />
              <Divider />
              <CardContent>
                <TextField
                  id='outlined-multiline-static'
                  label='Justification'
                  name='justification'
                  multiline
                  rows={4}
                  variant='outlined'
                  onChange={(e) => onChange(e)}
                  value={justification}
                />
                <FormControl variant='outlined' className={classes.formControl}>
                  <InputLabel htmlFor='outlined-age-native-simple'>
                    Action
                  </InputLabel>
                  <Select
                    value={etat}
                    onChange={(e) => onChange(e)}
                    label='Action'
                    inputProps={{
                      name: 'etat',
                      id: 'outlined-age-native-simple',
                    }}
                  >
                    <MenuItem value='Accepter'>Accepter</MenuItem>
                    <MenuItem value='Refuser'>Refuser</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id='outlined-basic'
                  label='nbrJuge'
                  name='nbrJuge'
                  onChange={(e) => onChange(e)}
                  variant='outlined'
                  type='number'
                  inputProps={{ min: '0', max: '10', step: '1' }}
                />
              </CardContent>
              <CardActions>
                <Button
                  className={classes.test}
                  size='medium'
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
                >
                  Enregister
                </Button>
              </CardActions>
            </form>
          </Card>
        </Fade>
      </Modal>
    </Fragment>
  );
};
ActionForm.propTypes = {
  updateEtatDemande: PropTypes.func.isRequired,
};
export default connect(null, { updateEtatDemande })(withRouter(ActionForm));
