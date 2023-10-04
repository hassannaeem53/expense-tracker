import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAlert } from '../redux/reducers/alert';
import { Snackbar } from '@material-ui/core';
import { Alert as MuiAlert } from '@material-ui/lab';
const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const AlertComponent = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  const alert = useSelector((state) => state.alert);

  useEffect(() => {
    if (alert[0]?.msg) {
      console.log('here');
      setMessage(alert[0]?.msg);
      setType(alert[0]?.alertType);
      setOpen(true);
      dispatch(removeAlert(alert[0]?.id));
    }
  }, [alert, dispatch]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={1500}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Set anchor origin to 'bottom' and 'center'
      TransitionProps={{
        direction: 'up', // Customize the direction of the slide (upward)
        timeout: 700, // Set the transition duration in milliseconds
      }}
    >
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertComponent;
