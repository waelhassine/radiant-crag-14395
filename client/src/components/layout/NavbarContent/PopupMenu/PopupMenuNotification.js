import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import StyledMenu from '../../layoutStyle/StyledMenuIcon';
import NotificationsMenuContent from '../PopupContent/NotificationsMenuContent';
import NotificationsPausedRoundedIcon from '@material-ui/icons/NotificationsPausedRounded';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../layoutStyle/Spinner';
import Badge from '@material-ui/core/Badge';
const useStyles = makeStyles((theme) => ({
  iconCreer: {
    color: '#000',
    backgroundColor: '#dedede',
    padding: '8px',
    marginLeft: '8px',
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);
const PopupMenuNotification = ({ notification: { notifications } }) => {
  const classes = useStyles();
  const [menuNotification, setMenuNotification] = React.useState(null);
  const [countNotification, setcountNotification] = React.useState(0);
  const [count, setCount] = useState(0);
  // Open Menu Creation PopUp

  useEffect(() => {
    console.log(notifications);
    let abc = 0;
    if (notifications.length > 0) {
      console.log('Waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      console.log(notifications);
      notifications.forEach((item) => {
        if (item.clicked === false) {
          abc++;
        }
      });
      console.log(abc);
    }
    setCount(abc);
  }, [notifications]);
  const openPopupMenuNotification = (event) => {
    setMenuNotification(event.currentTarget);
  };
  // Close Menu Creation PopUp
  const closePopupMenuNotification = () => {
    setMenuNotification(null);
  };
  return notifications === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Tooltip title='Notification'>
        <IconButton
          className={classes.iconCreer}
          aria-controls='PopupMenuNotification'
          aria-haspopup='true'
          onClick={openPopupMenuNotification}
        >
          <StyledBadge badgeContent={count} color='secondary'>
            <NotificationsPausedRoundedIcon color='inherit' />
          </StyledBadge>
        </IconButton>
      </Tooltip>

      <StyledMenu
        id='PopupMenuNotification'
        menuNotification={menuNotification}
        keepMounted
        open={Boolean(menuNotification)}
        onClose={closePopupMenuNotification}
      >
        <NotificationsMenuContent notifications={notifications} />
      </StyledMenu>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  notification: state.notification,
});

export default connect(mapStateToProps)(PopupMenuNotification);
