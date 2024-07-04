import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CustomizedDialogs({ open, handleClose, handleSave }) {
    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <DialogTitle className="text-red-700" sx={{ m: 0, p: 2 }} textAlign={'center'} id="customized-dialog-title">
                Alert !
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <Typography gutterBottom>

                </Typography>
                <Typography gutterBottom>

                    The next page will take photos of your face to register you into the system.
                </Typography>
                <Typography gutterBottom>

                    Please ensure that your face is clearly visible to the camera.
                </Typography>
                <Typography gutterBottom>

                    Make sure that there are no masks, sunglasses, or any other coverings on your face that could obstruct the camera's view. This will help the system accurately recognize and register your facial features.
                </Typography>
                <Typography gutterBottom>
                    If you are ready to proceed, click on the 'Register' button below.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleSave}>
                    Register
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
}

CustomizedDialogs.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
};
