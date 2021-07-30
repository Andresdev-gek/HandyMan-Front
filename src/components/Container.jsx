import React, {useState} from 'react'
import { makeStyles } from '@material-ui/styles'
import NavBar from './NavBar'
import SideBar from './SideBar'
import { Hidden } from '@material-ui/core'
import BoxContent from './BoxContent'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}))

const Container = () => {

    const classes = useStyles()

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(!open)
    }

    return (
        <div className={classes.root}>
            <NavBar handleClose={handleClose}/>
            <Hidden xsDown>
                <SideBar variant="permanent" open={true}/>
            </Hidden>
            <Hidden smUp>
                <SideBar variant="temporary" open={open} onClose={handleClose}/>
            </Hidden>
   
            <div className={classes.content}>
              <div className={classes.toolbar}></div>  
              <BoxContent/>
              
            </div>
        </div>
    )
}

export default Container