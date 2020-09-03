import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PageviewIcon from '@material-ui/icons/Pageview';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { logout } from '../../../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link as MaterialLink } from '@material-ui/core';
import { Link, withRouter, useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  textCreate: {
    fontSize: '24px',
    fontWeight: 'bolder',
    marginTop: '16px',
    marginLeft: '16px',
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

  iconStyle: {
    color: '#777777',
    backgroundColor: '#ccc',
  },
  textPrimary: {
    fontWeight: '700',
    fontSize: '16px',
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
}));
function ListItemLink(props) {
  return <ListItem button component='a' {...props} />;
}
const ProfileMenuContent = ({ auth: { user, loading }, logout }) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    !loading && (
      <Fragment>
        {user.role === 'auteur' ? (
          <ListItem
            component={Link}
            to='/settings'
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemAvatar>
              <Avatar alt={user.name} src={user.photo} />
            </ListItemAvatar>
            <ListItemText primary={user.name} secondary='Voir votre profil' />
          </ListItem>
        ) : (
          <ListItem
            component={Link}
            to='/profile'
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemAvatar>
              <Avatar alt={user.name} src={user.photo} />
            </ListItemAvatar>
            <ListItemText primary={user.name} secondary='Voir votre profil' />
          </ListItem>
        )}

        <Divider variant='middle' />
        <ListItem button>
          <ListItemAvatar>
            <Avatar className={classes.pinko}>
              <PageviewIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='Donner votre avis'
            secondary='Aidez-nous à améliorer notre application '
          />
        </ListItem>
        <Divider variant='middle' />
        <ListItem
          component={Link}
          to='/settings'
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemAvatar>
            <Avatar className={classes.pinko}>
              <Brightness7Icon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Paramètres et confidentialité' />
        </ListItem>
        <ListItem button onClick={logout}>
          <ListItemAvatar>
            <Avatar className={classes.pinko}>
              <ExitToAppIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Déconnecter' />
        </ListItem>
      </Fragment>
    )
  );
};

ProfileMenuContent.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const ShowTheLocationWithRouter = withRouter(ProfileMenuContent);

export default connect(mapStateToProps, { logout })(ShowTheLocationWithRouter);
