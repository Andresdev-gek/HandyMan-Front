import React from 'react'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        top: theme.spacing(9)
    }
}))


const Notification = (props) => {
    const classes = useStyles()

    const handleClose = (event, reason) => {
        setNotify({
            ...notify,
            isOpen:false
        })
    }

    const { notify, setNotify } = props;

    return (
        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={4000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}
        >
            <Alert 
                severity={notify.type}
                onClose={handleClose}
            >
                {notify.message}
            </Alert>
        </Snackbar>
    )
}

export default Notification