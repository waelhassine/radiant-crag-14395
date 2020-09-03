import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import KeyboardReturnRoundedIcon from '@material-ui/icons/KeyboardReturnRounded';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '200px',
    maxHeight: '250px',
    minWidth: '320px',
    maxWidth: '350px',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#ccc', 0.15),
    '&:hover': {
      backgroundColor: fade('#ccc', 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
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
  searchIconTwo: {
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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  test: {
    padding: theme.spacing(1, 1, 1, 2),
  },
  testa: {
    padding: theme.spacing(1, 0, 1, 0),
  },
  margin: {
    margin: theme.spacing(0, 0, 0, 2),
  },
}));
const SearchInputa = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log('haloo');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
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
        onClick={handleClick}
      />
      <Popover
        anchorReference='anchorPosition'
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorPosition={{ top: 0, right: 0 }}
      >
        <div className={classes.root}>
          <Grid container className={classes.test}>
            <Grid item xs={2}>
              <IconButton size='small' aria-label='delete'>
                <KeyboardReturnRoundedIcon />
              </IconButton>
            </Grid>
            <Grid item xs={10}>
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
                  onClick={handleClick}
                />
              </div>
            </Grid>
            <Grid item xs={12} className={classes.testa}>
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
            </Grid>
          </Grid>
        </div>
      </Popover>
    </div>
  );
};
export default SearchInputa;
