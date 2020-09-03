import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import MessagerieForm from './AddForm/MessagerieForm';
import Spinner from '../layout/layoutStyle/Spinner';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getMilling } from '../../actions/mailling';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import moment from 'moment';
import Chip from '@material-ui/core/Chip';
import SendIcon from '@material-ui/icons/Send';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxHeight: 345,
  },
  textPrimary: {
    fontSize: '22px',
    fontWeight: '600',
    display: 'flex',
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
  btnAdd: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));
const Messagerie = ({ mailling: { mailling, loading }, getMilling }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    getMilling();
  }, [getMilling]);
  const handleClose = () => {
    setOpen(false);
  };
  return loading ? (
    <p>fddfdf</p>
  ) : (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid
              container
              spacing={1}
              direction='row'
              justify='flex-start'
              alignItems='stretch'
            >
              <Grid item>
                <p className={classes.textPrimary}>Mailling</p>
              </Grid>
            </Grid>
            <Grid item>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Titre</TableCell>
                      <TableCell align='right'>Subject</TableCell>
                      <TableCell align='right'>Nombre</TableCell>
                      <TableCell align='right'>Date</TableCell>
                      <TableCell align='right'>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {mailling.map((mail) => (
                      <TableRow key={mail._id}>
                        <TableCell component='th' scope='row'>
                          {mail.title}
                        </TableCell>
                        <TableCell align='right'>{mail.subject}</TableCell>
                        <TableCell align='right'>{mail.juges.length}</TableCell>
                        <TableCell align='right'>
                          <Moment format='DD/MM/YYYY hh:mm'>
                            {moment.utc(mail.createdAt)}
                          </Moment>
                        </TableCell>
                        <TableCell align='right'>
                          {' '}
                          <Chip
                            size='small'
                            icon={<SendIcon />}
                            label='Send'
                            color='primary'
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
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
        {open === true ? (
          <MessagerieForm open={open} handleClose={handleClose} />
        ) : null}
      </div>
    </Fragment>
  );
};
Messagerie.propTypes = {
  getMediationBySociete: PropTypes.func.isRequired,
  mailling: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  mailling: state.mailling,
});

export default connect(mapStateToProps, { getMilling })(Messagerie);
