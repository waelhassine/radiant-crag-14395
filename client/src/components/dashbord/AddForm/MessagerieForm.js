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
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUserJuge } from '../../../actions/user';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { getJuges, createMailling } from '../../../actions/mailling';
import Spinner from '../../layout/layoutStyle/Spinner';
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
  formControla: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const MessagerieForm = ({
  open,
  handleClose,
  history,
  getJuges,
  createMailling,
  mailling: { juges, loading },
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [formData, setFormData] = React.useState({});
  const { title, subject, jugesa } = formData;
  const [personName, setPersonName] = React.useState([]);
  const [jugesDb, setjugesDb] = React.useState([]);
  useEffect(() => {
    getJuges();
  }, [getJuges]);
  useEffect(() => {
    if (juges === null) {
    } else {
      setjugesDb(juges);
    }
  }, [juges]);
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('halooo');
    console.log(subject);
    //console.log(certification);
    console.log(personName);
    //handleClose();
    const test = {
      title: title,
      subject: subject,
      juges: personName,
    };
    console.log(test);
    createMailling(test);
    handleClose();
  };

  return loading ? (
    <Spinner />
  ) : (
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
            <CardHeader title='Ajouter Juge' />
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
                  label='Title'
                  variant='outlined'
                  onChange={(e) => onChange(e)}
                  value={title}
                />
                <TextField
                  id='subject'
                  label='subject'
                  name='subject'
                  multiline
                  rows={4}
                  variant='outlined'
                  onChange={(e) => onChange(e)}
                  value={subject}
                />
                <FormControl className={classes.formControla}>
                  <InputLabel id='demo-mutiple-name-label'>Name</InputLabel>
                  <Select
                    labelId='demo-mutiple-name-label'
                    id='demo-mutiple-name'
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<Input />}
                    variant='outlined'
                  >
                    {juges.map((juge) => (
                      <MenuItem
                        key={juge._id}
                        value={juge._id}
                        style={getStyles(juge.name, juge.name, theme)}
                      >
                        {juge.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </CardContent>
              <CardActions>
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
              </CardActions>
            </form>
          </Card>
        </Fade>
      </Modal>
    </Fragment>
  );
};
MessagerieForm.propTypes = {
  getJuges: PropTypes.func.isRequired,
  mailling: PropTypes.object.isRequired,
  createMailling: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  mailling: state.mailling,
});

export default connect(mapStateToProps, {
  getJuges,
  createMailling,
})(MessagerieForm);
