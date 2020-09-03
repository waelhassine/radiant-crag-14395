import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PageviewIcon from '@material-ui/icons/Pageview';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemText from '@material-ui/core/ListItemText';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import SecurityIcon from '@material-ui/icons/Security';
import PhonelinkLockIcon from '@material-ui/icons/PhonelinkLock';

import PasswordForm from './form/PasswordForm';
const useStyles = makeStyles((theme) => ({
  paddingContent: {
    paddingTop: '40px',
  },
  paddingListItem: {
    marging: '5px 5px',
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
  FirstText: {
    fontSize: '18px',
    fontWeight: '500',
    float: 'left',
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
  SecondText: {
    float: 'left',
    textAlign: 'center',
    marginLeft: '20px',
    fontSize: '16px',
    fontWeight: '400',

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
  LastText: {
    fontSize: '16px',
    marginLeft: 'auto',
    color: 'orange',
    float: 'right',
    fontWeight: '400',
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
  pinko: {
    color: '#777777',
    backgroundColor: '#ccc',
  },
  paddingCarda: {
    marginTop: '20px',
  },
}));
function ListItemLink(props) {
  return <ListItem button component='a' {...props} />;
}
const ParametreConnectionEtSecurite = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.paddingContent}>
      <Divider />
      <Card className={classes.root}>
        <CardHeader title='Connexion' />
        <CardContent>
          <List>
            <ListItemLink  onClick={() => {
              setOpen(true);
            }}>
              <ListItemAvatar>
                <Avatar className={classes.pinko}>
                  <VpnKeyIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Changer le mot de passe'
                secondary='Nous vous conseillons d’utiliser un mot de passe sûr que vous n’utilisez nulle part ailleurs'
              />
              <ExitToAppIcon />
            </ListItemLink>
            <Divider />
            <ListItem button>
              <ListItemAvatar>
                <Avatar className={classes.pinko}>
                  <RecentActorsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Enregistrer vos identifiants de connexion
                '
                secondary='oui•Ils ne seront enregistrés que sur les navigateurs et appareils de votre choix'
              />
              <ExitToAppIcon />
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Divider />
      <div className={classes.paddingCarda}>
        <Card m={200}>
          <CardHeader title='Authentification à deux facteurs' />
          <CardContent>
            <List>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar className={classes.pinko}>
                    <SecurityIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary='Utiliser l’authentification à deux facteurs'
                  secondary='Nous vous demanderons un code si nous remarquons une tentative de connexion depuis un appareil ou un navigateur non reconnu'
                />
                <ExitToAppIcon />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemAvatar>
                  <Avatar className={classes.pinko}>
                    <PhonelinkLockIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary='Connexions autorisées'
                  secondary='Consultez une liste d’appareils pour lesquels un code de connexion n’est pas requis'
                />
                <ExitToAppIcon />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </div>
      {
        open === true ? ( <PasswordForm
          open={open}
          handleClose={handleClose}
        />):(null)
      }
    </div>
  );
};
export default ParametreConnectionEtSecurite;
