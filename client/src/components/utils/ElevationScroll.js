import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
const ElevationScroll = props => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 7 : 0
  });
};
export default ElevationScroll;
