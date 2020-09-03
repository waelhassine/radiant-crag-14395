import React, { Fragment, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import PDFViewer from 'pdf-viewer-reactjs';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';

const useStyles = makeStyles((theme) => ({
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
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxHeight: '90%',
    height: '90%',
  },
}));
const ModelReadFile = ({ fileid, open, handleClose }) => {
  const classes = useStyles();
  const [formData, setFormData] = React.useState(null);
  const BodyTest = () => {
    const test = './uploads/filedemande/' + fileid;
    return (
      <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js'>
        <div style={{ height: '400px', widh: '300px' }}>
          <Viewer fileUrl={test} />
        </div>
      </Worker>
    );
  };
  return (
    <Fragment>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card>
            <CardHeader
              title='File'
              action={
                <IconButton aria-label='delete' onClick={handleClose}> 
                  <ClearIcon />
                </IconButton>
              }
            />
            <CardContent>
              <BodyTest />
            </CardContent>
          </Card>
        </Fade>
      </Modal>
    </Fragment>
  );
};

export default ModelReadFile;
