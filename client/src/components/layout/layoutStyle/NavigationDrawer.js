import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    paddingTop: '20px',
    background: '#f9f9f9  ',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
  },

  iconStyle: {
    boxShadow: '1px 1px 3px #888888',
    height: '45px',
    width: '45px',
  },
  textPrimary: {
    fontWeight: '500',
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
  textSecondrie: {
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
  textListItem: {
    fontWeight: '500',
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
  test: {
    padding: '10px',
  },
}));
function ListItemLink(props) {
  return <ListItem button component='a' {...props} />;
}
const DashbordJuge = ({
  user,
  handleListItemClick,
  selectedIndex,
  classes,
}) => {
  return (
    <Fragment>
      <List>
        <ListItem button>
          <ListItemAvatar>
            <Avatar
              className={classes.iconStyle}
              alt={user.name}
              src={'./uploads/img/' + user.photo}
            />
          </ListItemAvatar>
          <span className={classes.textPrimary}>{user.name}</span>
        </ListItem>
        <ListItemLink
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemAvatar>
            <img height='45px' width='45px' src='conference.png' />
          </ListItemAvatar>
          <span className={classes.textPrimary}>Médiation</span>
        </ListItemLink>
        <ListItemLink
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemAvatar>
            <img height='45px' width='45px' src='document.png' />
          </ListItemAvatar>
          <span className={classes.textPrimary}>Arbitrage</span>
        </ListItemLink>
      </List>
    </Fragment>
  );
};
const DashbordSociete = ({
  user,
  handleListItemClick,
  selectedIndex,
  classes,
}) => {
  return (
    <Fragment>
      <List>
        <ListItem button>
          <ListItemAvatar>
            <Avatar
              className={classes.iconStyle}
              alt='Avatar value'
              src={'./uploads/img/' + user.photo}
            />
          </ListItemAvatar>
          <span className={classes.textPrimary}>{user.name}</span>
        </ListItem>
        <ListItemLink
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemAvatar>
            <img src='document.png' height='45px' width='45px' />
          </ListItemAvatar>
          <span className={classes.textPrimary}>Demande</span>
        </ListItemLink>
        <ListItemLink
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemAvatar>
            <img src='conference.png' height='45px' width='45px' />
          </ListItemAvatar>
          <span className={classes.textPrimary}>Médiation</span>
        </ListItemLink>
        <ListItemLink
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemAvatar>
            <img src='lawa.png' height='45px' width='45px' />
          </ListItemAvatar>
          <span className={classes.textPrimary}>Arbitrage</span>
        </ListItemLink>
      </List>
    </Fragment>
  );
};
const DashbordAuteur = ({
  user,
  handleListItemClick,
  selectedIndex,
  classes,
}) => {
  return (
    <Fragment>
      <List>
        <ListItem button>
          <ListItemAvatar>
            <Avatar
              className={classes.iconStyle}
              alt={user.name}
              src={'./uploads/img/' + user.photo}
            />
          </ListItemAvatar>
          <span className={classes.textPrimary}>{user.name}</span>
        </ListItem>
        <ListItemLink
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemAvatar>
            <img src='juge.png' height='45px' width='45px' />
          </ListItemAvatar>
          <span className={classes.textPrimary}>Juge </span>
        </ListItemLink>
        <ListItemLink
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemAvatar>
            <img src='societe.png' height='45px' width='45px' />
          </ListItemAvatar>
          <span className={classes.textPrimary}>Societe</span>
        </ListItemLink>
        <ListItemLink
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemAvatar>
            <img src='document.png' height='45px' width='45px' />
          </ListItemAvatar>
          <span className={classes.textPrimary}>Demande</span>
        </ListItemLink>
        <ListItemLink
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemAvatar>
            <img src='conference.png' height='45px' width='45px' />
          </ListItemAvatar>
          <span className={classes.textPrimary}>Médiation</span>
        </ListItemLink>
        <ListItemLink
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemAvatar>
            <img src='lawa.png' height='45px' width='45px' />
          </ListItemAvatar>
          <span className={classes.textPrimary}>Arbitrage</span>
        </ListItemLink>
        <ListItemLink
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItemAvatar>
            <img src='mail.png' height='45px' width='45px' />
          </ListItemAvatar>
          <span className={classes.textPrimary}>Messagerie</span>
        </ListItemLink>
      </List>
    </Fragment>
  );
};
const SettingsDrawer = ({ handleListItemClick, selectedIndex, classes }) => {
  return (
    <Fragment>
      <p className={classes.textSecondrie}>Paramètres</p>
      <List>
        <ListItemLink
          // href='general'
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemAvatar>
            <img height='45px' width='45px' src='setting.png' />
          </ListItemAvatar>

          <ListItemText>
            <span className={classes.textListItem}>Général</span>
          </ListItemText>
        </ListItemLink>
        <ListItemLink
          // href='settings'
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemAvatar>
            <img height='45px' width='45px' src='protection.png' />
          </ListItemAvatar>

          <ListItemText>
            <span className={classes.textListItem}>Sécurité et connection</span>
          </ListItemText>
        </ListItemLink>
        <ListItemLink
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemAvatar>
            <img height='45px' width='45px' src='project.png' />
          </ListItemAvatar>

          <ListItemText>
            <span className={classes.textListItem}>Reconnaissance faciale</span>
          </ListItemText>
        </ListItemLink>
        <ListItemLink
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemAvatar>
            <img height='45px' width='45px' src='translate-language.png' />
          </ListItemAvatar>

          <ListItemText>
            <span className={classes.textListItem}>Langue et région</span>
          </ListItemText>
        </ListItemLink>
      </List>
    </Fragment>
  );
};
const ProfileDrawer = ({
  user,
  handleListItemClick,
  handleListItemClickProfile,
  selectedIndex,
  classes,
}) => {
  if (user.role === 'societe') {
    return (
      <Fragment>
        <p className={classes.textSecondrie}>Profile</p>
        <List>
          <ListItemLink
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemAvatar>
              <img height='45px' width='45px' src='document.png' />
            </ListItemAvatar>
            <span className={classes.textPrimary}>Général</span>
          </ListItemLink>
          <ListItemLink
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemAvatar>
              <img src='team.png' height='45px' width='45px' />
            </ListItemAvatar>
            <span className={classes.textPrimary}>Historique</span>
          </ListItemLink>
        </List>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <p className={classes.textSecondrie}>Profile</p>
        <List>
          <ListItemLink
            href='#experience'
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClickProfile(event, 1)}
          >
            <ListItemAvatar>
              <img height='45px' width='45px' src='experienc.png' />
            </ListItemAvatar>

            <ListItemText>
              <span className={classes.textListItem}>Expérience</span>
            </ListItemText>
          </ListItemLink>
          <ListItemLink
            href='#formation'
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClickProfile(event, 2)}
          >
            <ListItemAvatar>
              <img height='45px' width='45px' src='formation.png' />
            </ListItemAvatar>

            <ListItemText>
              <span className={classes.textListItem}>Formation</span>
            </ListItemText>
          </ListItemLink>
          <ListItemLink
            href='#certification'
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClickProfile(event, 3)}
          >
            <ListItemAvatar>
              <img src='certification.png' height='45px' width='45px' />
            </ListItemAvatar>

            <ListItemText>
              <span className={classes.textListItem}>
                Licences et certifications
              </span>
            </ListItemText>
          </ListItemLink>
          <ListItemLink
            href='#realisation'
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClickProfile(event, 4)}
          >
            <ListItemAvatar>
              <img src='realisation.png' height='45px' width='45px' />
            </ListItemAvatar>

            <ListItemText>
              <span className={classes.textListItem}>Réalisations</span>
            </ListItemText>
          </ListItemLink>
        </List>
      </Fragment>
    );
  }
};

const NavigationDrawer = ({ sendData, user }) => {
  const location = useLocation();
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClickProfile = (event, index) => {
    setSelectedIndex(index);
  };
  const handleListItemClick = (event, index) => {
    sendData(index);
    setSelectedIndex(index);
  };
  const DropContent = () => {
    switch (location.pathname) {
      case '/dashboard': {
        switch (user.role) {
          case 'juge':
            return (
              <DashbordJuge
                user={user}
                handleListItemClick={handleListItemClick}
                selectedIndex={selectedIndex}
                classes={classes}
              />
            );
          case 'societe':
            return (
              <DashbordSociete
                user={user}
                handleListItemClick={handleListItemClick}
                selectedIndex={selectedIndex}
                classes={classes}
              />
            );
          case 'auteur':
            return (
              <DashbordAuteur
                user={user}
                handleListItemClick={handleListItemClick}
                selectedIndex={selectedIndex}
                classes={classes}
              />
            );
          default:
            return <h1>ssssss</h1>;
        }
      }
      case '/settings':
        return (
          <SettingsDrawer
            handleListItemClick={handleListItemClick}
            selectedIndex={selectedIndex}
            classes={classes}
          />
        );
      case '/profile':
        return (
          <ProfileDrawer
            user={user}
            handleListItemClickProfile={handleListItemClickProfile}
            handleListItemClick={handleListItemClick}
            selectedIndex={selectedIndex}
            classes={classes}
          />
        );
      default:
        return <h1>Error</h1>;
    }
  };

  return (
    <Fragment>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <div className={classes.test}>
            <DropContent />
          </div>
        </div>
      </Drawer>
    </Fragment>
  );
};
NavigationDrawer.propTypes = {
  auth: PropTypes.object.isRequired,
};
export default NavigationDrawer;
