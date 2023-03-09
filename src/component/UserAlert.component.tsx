import * as React from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Snackbar } from '@mui/material';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function UsertAlert({
  text,
  open,
  setOpen,
}: {
  text: string;
  open: boolean;
  setOpen: (state: boolean) => void;
}) {
  return (
    <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
      <Alert
        onClose={() => setOpen(false)}
        severity='success'
        sx={{ width: '100%' }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
}
