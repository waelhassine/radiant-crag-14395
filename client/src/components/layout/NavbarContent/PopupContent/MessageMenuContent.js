import React, { Fragment } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#ccc', 0.15),
    '&:hover': {
      backgroundColor: fade('#ccc', 0.25),
    },
    width: '95%',
  },
  searchIcon: {
    padding: theme.spacing(0, 0),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
  },
  messageClasses: {
    padding: theme.spacing(0, 0, 1, 1),
  },
}));
const CreationMenuContent = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div>
        <p className={classes.textCreate}>Message</p>
      </div>

      <ListItem>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder='Search…'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </ListItem>
      <div className={classes.messageClasses}>
        <ListItem button>
          <ListItemAvatar>
            <Avatar alt='Profile Picture' src='photowael.png' />
          </ListItemAvatar>
          <ListItemText
            className={classes.textImageItem}
            primary='fdfdfdfd'
            secondary='fdfqoslsmfgjdcfgjvghjgvghjvg'
          />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar alt='Profile Picture' src='photowael.png' />
          </ListItemAvatar>
          <ListItemText
            primary='fdfdfdfd'
            secondary='fdfqoslsmfgjdcfgjvghjgvghjvg'
          />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar alt='Profile Picture' src='photowael.png' />
          </ListItemAvatar>
          <ListItemText
            primary='fdfdfdfd'
            secondary='fdfqoslsmfgjdcfgjvghjgvghjvg'
          />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar alt='Profile Picture' src='photowael.png' />
          </ListItemAvatar>
          <ListItemText
            primary='fdfdfdfd'
            secondary='fdfqoslsmfgjdcfgjvghjgvghjvg'
          />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar alt='Profile Picture' src='photowael.png' />
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
export default CreationMenuContent;
