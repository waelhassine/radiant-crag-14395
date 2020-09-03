import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import StyledMenu from '../../layoutStyle/StyledMenuIcon';
import ProfileMenuContent from '../PopupContent/ProfileMenuContent';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Tooltip from '@material-ui/core/Tooltip';
const useStyles = makeStyles((theme) => ({
  iconCreer: {
    color: '#000',
    backgroundColor: '#dedede',
    padding: '8px',
    marginLeft: '8px',
  },
}));
const PopupMenuProfile = () => {
  const classes = useStyles();
  const [menuProfile, setMenuProfile] = React.useState(null);
  // Open Menu Creation PopUp
  const openPopupMenuProfile = (event) => {
    setMenuProfile(event.currentTarget);
  };
  // Close Menu Creation PopUp
  const closePopupMenuProfile = () => {
    setMenuProfile(null);
  };
  return (
    <Fragment>
      <Tooltip title='Profile'>
        <IconButton
          className={classes.iconCreer}
          aria-controls='PopupMenuProfile'
          aria-haspopup='true'
          onClick={openPopupMenuProfile}
        >
          <ExpandMoreRoundedIcon color='inherit' />
        </IconButton>
      </Tooltip>

      <StyledMenu
        id='PopupMenuNotification'
        menuProfile={menuProfile}
        keepMounted
        open={Boolean(menuProfile)}
        onClose={closePopupMenuProfile}
      >
        <ProfileMenuContent />
      </StyledMenu>
    </Fragment>
  );
};
export default PopupMenuProfile;
