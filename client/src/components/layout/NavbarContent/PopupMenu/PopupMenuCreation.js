import React, { Fragment } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import StyledMenu from '../../layoutStyle/StyledMenuIcon';
import CreationMenuContent from '../PopupContent/CreationMenuContent';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
const useStyles = makeStyles((theme) => ({
  iconProfile: {
    backgroundColor: 'white',
    height: '37px',
    fontSize: '16px',
    fontWeight: 500,
  },
  iconCreer: {
    color: '#000',
    backgroundColor: '#dedede',
    padding: '8px',
    marginLeft: '8px',
  },
  navbarRight: {
    backgroundColor: 'white',
    height: '37px',
    fontSize: '15px',
    fontWeight: 500,
  },
}));
const PopupMenuCreation = () => {
  const classes = useStyles();
  const [menuCreation, setMenuCreation] = React.useState(null);
  // Open Menu Creation PopUp
  const openPopupMenuCreation = (event) => {
    setMenuCreation(event.currentTarget);
  };
  // Close Menu Creation PopUp
  const closePopupMenuCreation = () => {
    setMenuCreation(null);
  };
  return (
    <Fragment>
      <Tooltip title='Creation'>
        <IconButton
          className={classes.iconCreer}
          aria-controls='PopupMenuCreation'
          aria-haspopup='true'
          onClick={openPopupMenuCreation}
        >
          <AddRoundedIcon color='inherit' />
        </IconButton>
      </Tooltip>

      <StyledMenu
        id='PopupMenuCreation'
        menuCreation={menuCreation}
        keepMounted
        open={Boolean(menuCreation)}
        onClose={closePopupMenuCreation}
      >
        <CreationMenuContent />
      </StyledMenu>
    </Fragment>
  );
};
export default PopupMenuCreation;
