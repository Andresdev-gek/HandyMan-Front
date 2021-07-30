import React, { useState }  from 'react'

import { makeStyles } from '@material-ui/core/styles'
import NavBar from '../src/components/NavBar'
import SideBar from '../src/components/SideBar'
import { Hidden } from '@material-ui/core'
import theme from '../src/themeConfig'
import { ThemeProvider } from '@material-ui/styles'
import HoursForm from '../src/components/HoursForm'

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

const CalculateHours = () => {

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
                    <HoursForm />

                </div>
            </div>
        </ThemeProvider>

    )
}

export default CalculateHours