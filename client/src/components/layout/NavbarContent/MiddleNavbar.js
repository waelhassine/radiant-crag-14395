import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FlagRoundedIcon from '@material-ui/icons/FlagRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import { grey, deepOrange, green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '300',
    '@media (min-width: 600px)': {
      minWidth: 100,
    },
    color: grey[600],
    '&$selected': {
      color: deepOrange[500],
    },
    height: '64px',
  },
  selected: {
    borderBottom: '3px solid #FF4500',
    paddingTop: '2px',
  },
  hover: {
    backgroundColor: grey[200],
    color: grey[900],
  },
  search: {
    '&:hover': {
      backgroundColor: grey[200],
      color: grey[900],
    },
  },
}));

const MiddleNavbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          className={classes.search}
          classes={{
            root: classes.root, // class name, e.g. `root-x`
            selected: classes.selected, // class name, e.g. `disabled-x`
          }}
          value='recents'
          icon={<HomeRoundedIcon />}
        />

        <BottomNavigationAction
          className={classes.search}
          classes={{
            root: classes.root, // class name, e.g. `root-x`
            selected: classes.selected, // class name, e.g. `disabled-x`
          }}
          value='favorites'
          icon={<FlagRoundedIcon />}
        />
        <BottomNavigationAction
          className={classes.search}
          classes={{
            root: classes.root, // class name, e.g. `root-x`
            selected: classes.selected, // class name, e.g. `disabled-x`
          }}
          value='nearby'
          icon={<GroupRoundedIcon />}
        />
      </BottomNavigation>
    </div>
  );
};
export default MiddleNavbar;
