import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import StyledMenu from '../../layoutStyle/StyledMenuIcon';
import MessageMenuContent from '../PopupContent/MessageMenuContent';
import Tooltip from '@material-ui/core/Tooltip';
const useStyles = makeStyles((theme) => ({
  iconCreer: {
    color: '#000',
    backgroundColor: '#dedede',
    padding: '8px',
    marginLeft: '8px',
  },
}));
const PopupMenuMessage = () => {
  const classes = useStyles();
  const [menuMessage, setMenuMessage] = React.useState(null);
  // Open Menu Creation PopUp
  const openPopupMenuMessage = (event) => {
    setMenuMessage(event.currentTarget);
  };
  // Close Menu Creation PopUp
  const closePopupMenuMessage = () => {
    setMenuMessage(null);
  };
  return (
    <Fragment>
      <Tooltip title='Message'>
        <IconButton
          className={classes.iconCreer}
          aria-controls='PopupMenuMessage'
          aria-haspopup='true'
          onClick={openPopupMenuMessage}
        >
          <ChatRoundedIcon color='inherit' />
        </IconButton>
      </Tooltip>

      <StyledMenu
        id='PopupMenuMessage'
        menuMessage={menuMessage}
        keepMounted
        open={Boolean(menuMessage)}
        onClose={closePopupMenuMessage}
      >
        <MessageMenuContent />
      </StyledMenu>
    </Fragment>
  );
};
export default PopupMenuMessage;
