import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
const useStyles = makeStyles((theme) => ({
  textCreate: {
    fontSize: '24px',
    fontWeight: 'bolder',
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
}));
const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      <Button
        variant='outlined'
        color='secondary'
        startIcon={<AccessAlarmIcon />}
      >
        <h1
          style={{
            fontSize: '14px',
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
          }}
        >
          {' '}
          {days} Jour {'  '}:{hours} Heure {'  '}:{minutes} Minute {'  '}:
          {seconds} Second
        </h1>
      </Button>
    </span>
  );
};
const Timer = ({ time }) => {
  const classes = useStyles();
  const tima = moment(time);
  const timb = tima.clone().add('59', 'days');
  return <Countdown date={timb} renderer={renderer} />;
};
export default Timer;
