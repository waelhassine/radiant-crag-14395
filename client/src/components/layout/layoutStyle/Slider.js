import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  imageheader: {
    backgroundImage: 'url(testaa.png)',
    width: '98.5vw',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    margin: 0,
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10),
      paddingTop: 200,
      paddingRight: 0,
    },
  },
  bottonLoginIn: {
    boxShadow: ' -5px 3px 15px -1px rgba(0,0,0,0.1)',
    background: 'white',
    border: 1,
    borderStyle: 'solid',
    borderColor: 'orange',
    fontSize: 16,
    borderRadius: 20,
    color: 'black',
    height: 40,
    padding: '0 50px',
  },
}));
const Slider = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.imageheader}>
        <Grid
          container
          direction='column'
          justify='flex-center'
          alignItems='flex-start'
        >
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography variant='h4'>
                La solution simple et économique pour résoudre tous vos litiges
                en quelques moins
              </Typography>
              <br />
              <Typography variant='h6' color='inherit' paragraph>
                Alpha partners est une solution 100% en ligne qui vous garanti
                la résolution de vos litiges en un minimum de temps grâce à un
                réseau de médiateurs et d’arbitres accrédités.
              </Typography>
              <Button variant='outlined' className={classes.bottonLoginIn}>
                Contact
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <p>dkddlfkdl kfl dk ldfkfl</p>
    </Fragment>
  );
};
export default Slider;
