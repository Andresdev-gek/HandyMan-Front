import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import NavBar from '../src/components/NavBar'
import SideBar from '../src/components/SideBar'
import { Hidden } from '@material-ui/core'
import FormReport from '../src/components/FormReport'
import theme from '../src/themeConfig'
import { ThemeProvider } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    }
}))

const CreateServiceReport = () => {

    const classes = useStyles()

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(!open)
    }

    return (
        <ThemeProvider theme={theme} >
            <div className={classes.root}>
                <NavBar handleClose={handleClose} />
                <Hidden xsDown>
                    <SideBar variant="permanent" open={true} />
                </Hidden>
                <Hidden smUp>
                    <SideBar variant="temporary" open={open} onClose={handleClose} />
                </Hidden>

                <div className={classes.content}>
                    <div className={classes.toolbar}></div>
                    <FormReport />

                </div>
            </div>
        </ThemeProvider>
    )
}

export default CreateServiceReport