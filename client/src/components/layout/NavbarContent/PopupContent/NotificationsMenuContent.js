import React, { Fragment, useEffect, useState } from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import AccessAlarmRoundedIcon from '@material-ui/icons/AccessAlarmRounded';
import PageviewIcon from '@material-ui/icons/Pageview';
import { pink, orange, green } from '@material-ui/core/colors';
import Spinner from '../../layoutStyle/Spinner';
import PropTypes from 'prop-types';
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
  pink: {
    backgroundColor: pink[500],
  },
  green: {
    backgroundColor: green[500],
  },
  orange: {
    backgroundColor: orange[500],
  },
  messageClasses: {
    padding: theme.spacing(0, 0, 1, 1),
  },
}));
const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    boxShadow: '1px 1px 1px 1px #ddd',
  },
}))(Avatar);
const NotificationsMenuContent = ({ notifications }) => {
  const classes = useStyles();
  useEffect(() => {
    console.log('Try to get Data');
    console.log(notifications);
  }, [notifications]);

  return (
    <Fragment>
      <div>
        <p className={classes.textCreate}>Notifications</p>
      </div>
      <div className={classes.messageClasses}>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <Fragment>
              <ListItem button>
                <ListItemAvatar>
                  <Badge
                    overlap='circle'
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    badgeContent={
                      <SmallAvatar>
                        <AccessAlarmRoundedIcon />
                      </SmallAvatar>
                    }
                  >
                    <Avatar
                      alt='Travis Howard'
                      src={'./uploads/img/' + notification.fromUserId.photo}
                      className={classes.imageListItem}
                    >
                      <PageviewIcon />
                    </Avatar>
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  primary={notification.fromUserId.name}
                  secondary={notification.message}
                />
              </ListItem>
            </Fragment>
          ))
        ) : (
          <h4>No profiles found...</h4>
        )}

        <ListItem button>
          <ListItemAvatar>
            <Badge
              overlap='circle'
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              badgeContent={
                <SmallAvatar className={classes.pink}>
                  <AccessAlarmRoundedIcon />
                </SmallAvatar>
              }
            >
              <Avatar
                alt='Travis Howard'
                src='photowael.png'
                className={classes.imageListItem}
              >
                <PageviewIcon />
              </Avatar>
            </Badge>
          </ListItemAvatar>
          <ListItemText
            primary='fdfdfdfd'
            secondary='fdfqoslsmfgjdcfgjvghjgvghjvg'
          />
        </ListItem>
      </div>
    </Fragment>
  );
};
NotificationsMenuContent.propTypes = {
  notifications: PropTypes.object.isRequired,
};
export default NotificationsMenuContent;
