import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Box } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    title: {
        flexGrow: 1
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${240}px)`,
            marginLeft: 240,
        },
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary
    }
}))


const NavBar = (props) => {
    const classes = useStyles()

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => props.handleClose()}>
                    <MenuIcon />
                </IconButton>
                <Box p={2}>
                    <img src="../../dist/assets/images/logo.png" alt="Logo"></img>

                </Box>
                <Typography variant="h5" className={classes.title}>
                    <Link to="/" className={classes.link}>
                        .🅗🅐🅝🅓🅨-🅜🅐🅝.
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>

    )
}


export default NavBar