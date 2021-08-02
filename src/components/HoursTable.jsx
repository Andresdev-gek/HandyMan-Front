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
        minHeight: '20vh',
        marginTop: '4vh',
        padding: '4vh'
        

    },
});

const HoursTable = (props) => {

    const classes = useStyles();


    return (
        <TableContainer component={Paper} >
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Horas normales</TableCell>
                        <TableCell align="right">Horas nocturnas</TableCell>
                        <TableCell align="right">Horas dominicales</TableCell>
                        <TableCell align="right">Horas normales-extra</TableCell>
                        <TableCell align="right">Horas nocturnas-extra</TableCell>
                        <TableCell align="right">Horas dominicales-extra</TableCell>
                        <TableCell align="right">Horas totales</TableCell>  
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow key={props.data[0]}>
                            <TableCell align="right">{props.data[0]}</TableCell>
                            <TableCell align="right">{props.data[1]}</TableCell>
                            <TableCell align="right">{props.data[2]}</TableCell>
                            <TableCell align="right">{props.data[3]}</TableCell>
                            <TableCell align="right">{props.data[4]}</TableCell>
                            <TableCell align="right">{props.data[5]}</TableCell>
                            <TableCell align="right">{props.data[6]}</TableCell>
                        </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default HoursTable