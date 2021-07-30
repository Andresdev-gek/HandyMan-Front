import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './styles/ReportsTable.css'



const useStyles = makeStyles({
    table: {
        minWidth: 130,
        minHeight: '15vh',
        marginTop: '20vh',
        padding: '8vh'

    },
});

const ReportsTable = (props) => {

    const classes = useStyles();


    return (
        <TableContainer component={Paper} >
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">ID Tecnico</TableCell>
                        <TableCell align="right">ID Servicio</TableCell>
                        <TableCell align="right">Fecha y hora de inicio</TableCell>
                        <TableCell align="right">Fecha y hora de fin</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row) => (
                        <TableRow key={row.serviceId}>
                            <TableCell align="right">{row.technicianId}</TableCell>
                            <TableCell align="right">{row.serviceId}</TableCell>
                            <TableCell align="right">{row.startDateTime}</TableCell>
                            <TableCell align="right">{row.endDateTime}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ReportsTable