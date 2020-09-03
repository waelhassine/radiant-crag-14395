import React from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FlagRoundedIcon from '@material-ui/icons/FlagRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import { grey, deepOrange, green } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import NotificationsPausedRoundedIcon from '@material-ui/icons/NotificationsPausedRounded';
import { pink, orange } from '@material-ui/core/colors';
import CreationMenuContent from './NavbarContent/PopupContent/CreationMenuContent';
import MessageMenuContent from './NavbarContent/PopupContent/MessageMenuContent';
import NotificationMenuContent from './NavbarContent/PopupContent/NotificationsMenuContent';
import ProfileMenuContent from './NavbarContent/PopupContent/ProfileMenuContent';
const theme = createMuiTheme({
  overrides: {
    MuiTabs: {
      marginLeft: '20%',
      indicator: {
        color: deepOrange[700],
        backgroundColor: deepOrange[700],
      },
    },
    MuiTab: {
      root: {
        minWidth: '80px',
        '@media (min-width: 600px)': {
          minWidth: 100,
        },
        color: deepOrange[700],
        minHeight: '63px',
        '&:hover': {
          backgroundColor: grey[200],
          color: grey[700],
        },
      },
      selected: {
        backgroundColor: green[100],
        color: green[700],
        '&:hover': {
          backgroundColor: deepOrange[100],
          color: '#fff',
        },
      },
      focus: {
        backgroundColor: green[100],
      },
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  search: {
    position: 'relative',
    borderRadius: '16px',
    backgroundColor: '#F5E5E2',
    '&:hover': {
      backgroundColor: '#eee',
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  btnMiddleNavbar: {
    marginLeft: '15%',
  },
  roota: {
    fontSize: '30px',
  },
  navbarRight: {
    backgroundColor: 'white',
    height: '37px',
    fontSize: '16px',
    fontWeight: 500,
  },
  iconpadding: {
    padding: '10px',
    position: 'relative',
  },
  iconCreer: {
    backgroundColor: '#dedede',
    padding: '8px',
    marginLeft: '8px',
  },
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
  textTowCreate: {
    textSize: '8px',
    fontWeight: '500',
    lineHeight: '0.5',
    paddingTop: '2px',
    paddingLeft: '10px',
  },
  iconNav: {
    backgroundColor: '#eee',
  },
  nanbarToRight: {
    position: 'relative',
    marginLeft: '15%',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  messageClasses: {
    padding: theme.spacing(2, 2, 0),
  },
  imageListItem: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    boxShadow: '30px 10px 20px red inset',
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
  pinko: {
    color: '#777777',
    backgroundColor: '#ccc',
  },
}));
const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    boxShadow: '1px 1px 1px 1px #ddd',
  },
}))(Avatar);
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    minWidth: '350px',
    maxHeight: '400px',
    boxShadow:
      '0px 0px 0px 0px rgba(1,5,0,0.2), 0px 1px 0px 0px rgba(0,1,0,0.06), 0px 2px 11px 0px rgba(0,0,0,0.06)',
  },
})((props) => (
  <Menu
    elevation={5}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'bottom',
    }}
    transformOrigin={{
      vertical: 'end',
      horizontal: 'bottom',
    }}
    {...props}
  />
));

const NavbarDash = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEla, setAnchorEla] = React.useState(null);
  const [anchorElb, setAnchorElb] = React.useState(null);
  const [anchorElc, setAnchorElc] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClicka = (event) => {
    setAnchorEla(event.currentTarget);
  };

  const handleClosea = () => {
    setAnchorEla(null);
  };
  const handleClickb = (event) => {
    setAnchorElb(event.currentTarget);
  };

  const handleCloseb = () => {
    setAnchorElb(null);
  };
  const handleClickc = (event) => {
    setAnchorElc(event.currentTarget);
  };

  const handleClosec = () => {
    setAnchorElc(null);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar color='white' position='fixed'>
        <Toolbar>
          <img src='miniLogo.png' height='45' width='45' href='/settings' />

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
          <div className={classes.btnMiddleNavbar}>
            <MuiThemeProvider theme={theme}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant='fullWidth'
                indicatorColor='secondary'
                textColor='secondary'
                aria-label='icon tabs example'
              >
                <Tab
                  icon={<HomeRoundedIcon className={classes.roota} />}
                  aria-label='home'
                />
                <Tab
                  icon={<FlagRoundedIcon className={classes.roota} />}
                  aria-label='flag'
                />
                <Tab
                  icon={<GroupRoundedIcon className={classes.roota} />}
                  aria-label='group'
                />
              </Tabs>
            </MuiThemeProvider>
          </div>

          <div className={classes.nanbarToRight}>
            <Chip
              className={classes.navbarRight}
              avatar={<Avatar src='photowael.png' />}
              clickable
              label='Wael'
            />

            <IconButton
              className={classes.iconCreer}
              aria-controls='simple-menu'
              aria-haspopup='true'
              onClick={handleClick}
            >
              <AddRoundedIcon color='inherit' />
            </IconButton>
            <StyledMenu
              id='simple-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <CreationMenuContent />
            </StyledMenu>

            <IconButton
              className={classes.iconCreer}
              aria-controls='simple-menua'
              aria-haspopup='true'
              onClick={handleClicka}
            >
              <ChatRoundedIcon color='inherit' />
            </IconButton>
            <StyledMenu
              id='simple-menua'
              anchorEl={anchorEla}
              keepMounted
              open={Boolean(anchorEla)}
              onClose={handleClosea}
            >
              <MessageMenuContent />
            </StyledMenu>
            <IconButton
              className={classes.iconCreer}
              aria-controls='simple-menub'
              aria-haspopup='true'
              onClick={handleClickb}
            >
              <NotificationsPausedRoundedIcon color='inherit' />
            </IconButton>
            <StyledMenu
              id='simple-menub'
              anchorEl={anchorElb}
              keepMounted
              open={Boolean(anchorElb)}
              onClose={handleCloseb}
            >
              <NotificationMenuContent />
            </StyledMenu>
            <IconButton
              className={classes.iconCreer}
              aria-controls='simple-menuc'
              aria-haspopup='true'
              onClick={handleClickc}
            >
              <ExpandMoreRoundedIcon color='inherit' />
            </IconButton>
            <StyledMenu
              id='simple-menuc'
              anchorEl={anchorElc}
              keepMounted
              open={Boolean(anchorElc)}
              onClose={handleClosec}
            >
              <ProfileMenuContent />
            </StyledMenu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavbarDash;
