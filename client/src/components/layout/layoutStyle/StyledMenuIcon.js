import Menu from '@material-ui/core/Menu';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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
    anchorReference='anchorPosition'
    anchorPosition={{ top: 64, left: 930 }}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
));
export default StyledMenu;
