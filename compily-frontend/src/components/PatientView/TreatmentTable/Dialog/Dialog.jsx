import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
      </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                dir="rtl"
            >
                <DialogTitle id="alert-dialog-title">
                    {"כל הכבוד לך "}<InsertEmoticonOutlinedIcon />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        המשך כך!
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {/* <Button onClick={handleClose}>Disagree</Button> */}
                    <Button onClick={handleClose} autoFocus>
                        אישור
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
