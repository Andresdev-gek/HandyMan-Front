import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import BuildIcon from '@material-ui/icons/Build';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Link } from "react-router-dom";


const Options = () => {
    return (
        <List component='nav'>
            <ListItem button component={Link} to="/createReport">
                <ListItemIcon>
                    <BuildIcon />
                </ListItemIcon>
                <ListItemText>
                    Crear reporte de servicio
                </ListItemText>
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/listReports">
                <ListItemIcon>
                    <ListAltIcon />
                </ListItemIcon>
                <ListItemText>
                    Ver reportes de servicio
                </ListItemText>
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/hoursService">
                <ListItemIcon>
                    <ScheduleIcon />
                </ListItemIcon>
                <ListItemText>
                    Calcular horas trabajadas
                </ListItemText>
            </ListItem>
        </List>
    )
}

export default Options