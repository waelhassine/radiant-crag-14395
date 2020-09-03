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
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { blockUser } from '../../../actions/user';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  rota: {
    minWidth: '300px',
    width: '300px',
  },
  modal: {
    display: 'flex',
    width: '50%',
    minWidth: '300px',
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
    width: '300px',
  },
}));
const ConfirmBlock = ({ open, handleClose, blockId, history, blockUser }) => {
  const classes = useStyles();
const SubmitBlockUser = ()=> {
  blockUser(blockId);
  handleClose();
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
            <CardHeader title='Block User' />
            <CardActions>
              <Fragment>
                <Button
                  className={classes.test}
                  size='medium'
                  variant='outlined'
                  color='secondary'
                  startIcon={<CloudUploadIcon />}
                  onClick={SubmitBlockUser}
                >
                  Block
                </Button>
              </Fragment>
            </CardActions>
          </Card>
        </Fade>
      </Modal>
    </Fragment>
  );
};
ConfirmBlock.propTypes = {
  blockUser: PropTypes.func.isRequired,
};

export default connect(null, { blockUser })(withRouter(ConfirmBlock));
