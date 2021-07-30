import React, { useState } from 'react'

import { useFormik } from 'formik';
import * as yup from 'yup'
import { TextField, Button } from '@material-ui/core'
import axios from 'axios';
import ReportsTable from './ReportsTable';
import Notification from './Notification';


const validationSchema = yup.object({
    technicianId: yup.number().typeError("Este campo debe ser de numeros").required("El ID del tecnico es requerido").positive().integer()

})


const ListReportsForm = () => {

    const [reports, setReports] = useState([]);
    const [notify, setNotify] = useState({ isOpen: false, message: "", type: "" })


    const formik = useFormik({
        initialValues: {
            technicianId: ""
        },
        onSubmit: async () => {
            await axios.get(baseUrl)
                .then(response => {
                    const array = response.data.items
                    setReports(array)
                    setNotify({ isOpen: true, message: "Reportes encontrados por este ID", type: "success" })
                }).catch(error => {
                    console.log(error)
                    setNotify({ isOpen: true, message: "No hay reportes registrados con este ID", type: "warning" })
                })
        },
        validationSchema: validationSchema
    });

    const baseUrl = `http://localhost:8080/reports/${formik.values.technicianId}`;



    return (
        <div className="ListReports">
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    variant="outlined"
                    id="technicianId"
                    name="technicianId"
                    label="Id del tecnico"
                    margin="normal"
                    value={formik.values.technicianId}
                    onChange={formik.handleChange}
                    error={formik.touched.technicianId && Boolean(formik.errors.technicianId)}
                    helperText={formik.touched.technicianId && formik.errors.technicianId}
                />


                <Button type="submit" variant="contained" variant="outlined">Traer reportes</Button>


            </form>


            <ReportsTable data={reports} />

            <Notification
                notify={notify}
                setNotify={setNotify}
            />

        </div>
    )
}

export default ListReportsForm