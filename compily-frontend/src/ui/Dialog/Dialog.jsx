import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import TextField from '@mui/material/TextField';

export default function AlertDialog(props) {
    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        props.onCloseDialog();
        // setOpen(false);

    };

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
      </Button> */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                dir="rtl"
            >
                <DialogTitle id="alert-dialog-title">
                    {props.title} <InsertEmoticonOutlinedIcon />
                </DialogTitle>
                <DialogContent>
                    {props.input ?
                        <div className="search-container" >
                            <div className="search-item">
                                <TextField fullWidth id="outlined-basic" label="תיאור הטיפול" variant="outlined" />
                            </div>
                            <div className="search-item">
                                <Button variant="contained" size='large' type="submit">עדכן</Button>
                            </div>
                        </div> : null}
                    <DialogContentText id="alert-dialog-description">
                        {props.content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {/* <Button onClick={handleClose}>Disagree</Button> */}
                    <Button onClick={handleClose} autoFocus>
                        {props.button}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
