import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAlert } from '../redux/alertSlice';
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
    if (alert.message) {
      setMessage(alert.message);
      setType(alert.type);
      setOpen(true);
      dispatch(clearAlert());
    }
  }, [alert, dispatch]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertComponent;
