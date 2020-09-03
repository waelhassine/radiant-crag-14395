import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import { Zoom } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Spinner from '../layout/layoutStyle/Spinner';
import { updateProfile } from '../../actions/profile';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TermsOfService from './TermsOfService';
import AlertSnackbar from '../layout/layoutStyle/AlertSnackbar';
const useStyles = makeStyles((theme) => ({
  containera: {
    position: 'fixed',
    top: '20%',
    left: '35%',
    margin: 'auto',
  },
  containerb: {
    position: 'fixed',
    top: '5%',
    left: '30%',
    margin: 'auto',
  },
  papera: {
    marginTop: '-40px',
    marginLeft: '-15px',
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
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
  con: {
    marginLeft: '100px',
  },
  formControl: {
    margin: theme.spacing(1),
    width: '50%',
  },
  test: {
    width: '70%',
    marginLeft: '7px',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '70%',
    },
  },
  formControla: {
    margin: theme.spacing(1),
    width: '70%',
  },
  testTwo: {
    display: 'flex',
    alignItem: 'start',
  },
}));

const Test = ({ auth: { user, loading }, updateProfile, history }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [checkedConfirme, setCheckedConfirme] = React.useState(true);
  const handleChangea = (event) => {
    setCheckedConfirme(event.target.checked);
  };
  const handleChange = () => {
    setChecked(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [formData, setFormData] = React.useState({});
  const { titre, experienceAns, location } = formData;
  const {
    raisonSociale,
    responsable,
    registreCommerce,
    ville,
    adresseUsine,
    siteWeb,
    tel,
    fax,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    updateProfile(formData, history);
  };
  return user === null && loading === false ? (
    <Spinner />
  ) : (
    <Fragment>
      {checked === false ? (
        <div>
          <div className={classes.containera}>
            <Grow in={true}>
              <img height='300px' width='300px' src='a.svg' />
            </Grow>
            {/* Conditionally applies the timeout prop to change the entry speed. */}
            <Fade
              in={true}
              style={{ transformOrigin: '500 0 0' }}
              {...(checked ? { timeout: 2000 } : {})}
            >
              <h1 className={classes.papera}>Complete your profile !!</h1>
            </Fade>
            <Fade
              in={true}
              style={{ transformOrigin: '500 0 0' }}
              {...(true ? { timeout: 2000 } : {})}
            >
              <Button
                className={classes.con}
                variant='outlined'
                color='secondary'
                onClick={handleChange}
              >
                Suivant
              </Button>
            </Fade>
          </div>
        </div>
      ) : (
        <Fragment>
          {user.role === 'juge' ? (
            <div className={classes.containera}>
              <h1 className={classes.papera}> Complete your profile</h1>
              <AlertSnackbar/>
              <Fragment>
                <form
                  className={classes.root}
                  noValidate
                  onSubmit={(e) => onSubmit(e)}
                  autoComplete='off'
                >
                  <TextField
                    required
                    id='titre'
                    name='titre'
                    label='Titre'
                    variant='outlined'
                    onChange={(e) => onChange(e)}
                    value={titre}
                  />
                  <FormControl
                    variant='outlined'
                    className={classes.formControla}
                  >
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
                    required
                    id='experienceAns'
                    name='experienceAns'
                    type='number'
                    onChange={(e) => onChange(e)}
                    value={experienceAns}
                    label='Expérience'
                    variant='outlined'
                  />
                  <div className={classes.testTwo}>
                    <Checkbox
                      checked={checkedConfirme}
                      onChange={handleChangea}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <p>
                      I agree to the{' '}
                      <Link href='#' onClick={()=>{
                        setOpen(true);
                      }}>
                        terms of service
                      </Link>
                      and privacy policy.
                    </p>
                  </div>

                  <Button
                    type='submit'
                    className={classes.test}
                    size='large'
                    variant='outlined'
                    color='primary'
                    startIcon={<CloudUploadIcon />}
                    disabled={!checkedConfirme}
                  >
                    Enregister
                  </Button>
                </form>
                {open === true ? (
                  <TermsOfService open={open} handleClose={handleClose} />
                ) : null}
              </Fragment>
            </div>
          ) : (
            <div className={classes.containerb}>
              <h1 className={classes.papera}> Complete your profile</h1>
              <Fragment>
                <form
                  className={classes.root}
                  noValidate
                  onSubmit={(e) => onSubmit(e)}
                  autoComplete='off'
                >
                  <TextField
                    required
                    id='raisonSociale'
                    name='raisonSociale'
                    label='Raison Sociale'
                    variant='outlined'
                    onChange={(e) => onChange(e)}
                    value={raisonSociale}
                  />
                  <FormControl
                    variant='outlined'
                    className={classes.formControla}
                  >
                    <InputLabel id='ville'>Location</InputLabel>
                    <Select
                      labelId='ville'
                      id='location'
                      name='ville'
                      onChange={(e) => onChange(e)}
                      value={ville}
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
                    required
                    id='responsable'
                    name='responsable'
                    onChange={(e) => onChange(e)}
                    value={responsable}
                    label='Responsable'
                    variant='outlined'
                  />
                  <TextField
                    required
                    id='registreCommerce'
                    name='registreCommerce'
                    onChange={(e) => onChange(e)}
                    value={registreCommerce}
                    label='Registre Commerce'
                    variant='outlined'
                  />
                  <TextField
                    required
                    id='adresseUsine'
                    name='adresseUsine'
                    onChange={(e) => onChange(e)}
                    value={adresseUsine}
                    label='Adresse Usine'
                    variant='outlined'
                  />
                  <TextField
                    required
                    id='siteWeb'
                    name='siteWeb'
                    onChange={(e) => onChange(e)}
                    value={siteWeb}
                    label='Site Web'
                    variant='outlined'
                  />
                  <TextField
                    required
                    id='tel'
                    name='tel'
                    onChange={(e) => onChange(e)}
                    value={tel}
                    label='Tel'
                    variant='outlined'
                  />
                  <TextField
                    required
                    id='fax'
                    name='fax'
                    onChange={(e) => onChange(e)}
                    value={fax}
                    label='Fax'
                    variant='outlined'
                  />
                  <Button
                    type='submit'
                    className={classes.test}
                    size='large'
                    variant='outlined'
                    color='primary'
                    startIcon={<CloudUploadIcon />}
                  >
                    Enregister
                  </Button>
                </form>
              </Fragment>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};
Test.propTypes = {
  auth: PropTypes.object.isRequired,
  updateProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { updateProfile })(Test);
