import React from 'react'
import { makeStyles, Drawer, Divider } from '@material-ui/core'
import Options from './Options'

const useStyles = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    toolbar: theme.mixins.toolbar,
}))

const SideBar = (props) => {
    
    const classes = useStyles()

    return (
       <Drawer className={classes.drawer} 
               variant={props.variant} 
               classes={{ paper: classes.drawerPaper,}} 
               anchor="left"
               open={props.open}
               onClose={props.onClose ? props.onClose : null}
        >

           <div className={classes.toolbar}/>
           <Divider/>
           <Options/>
           <Divider/>
       </Drawer>
    )
}

export default SideBar