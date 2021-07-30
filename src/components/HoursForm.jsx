import React, { useState } from 'react'

import { useFormik } from 'formik';
import * as yup from 'yup'
import { TextField, Button } from '@material-ui/core'
import axios from 'axios';
import HoursTable from './HoursTable';
import Notification from './Notification';

const validationSchema = yup.object({
    technicianId: yup.number().typeError("Este campo debe ser de numeros").required("El ID del tecnico es requerido").positive().integer(),
    numberOfWeek: yup.number().required("El numero de semana es requerido").positive().integer().min(1, "El minimo numero debe ser 1").max(53, "El maximo numero debe ser 53").typeError("Este campo debe ser de numeros")

})

const HoursForm = () => {


    const [hours, setHours] = useState([]);
    const [notify, setNotify] = useState({ isOpen: false, message: "", type: "" })


    const formik = useFormik({
        initialValues: {
            technicianId: "",
            numberOfWeek: ""
        },
        onSubmit: async () => {
            await axios.get(baseUrl)
                .then(response => {
                    const array = response.data.items
                    setHours(array)
                    setNotify({ isOpen: true, message: "Horas acumuladas por esta semana", type: "success" })
                }).catch(error => {
                    console.log(error)
                    setNotify({ isOpen: true, message: "No hay horas acumuladas por esta semana", type: "warning" })
                })
        },
        validationSchema: validationSchema
    });

    const baseUrl = `http://localhost:8080/reports/${formik.values.technicianId}/${formik.values.numberOfWeek}`;



    return (
        <div className="HoursForm">
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

                <TextField
                    variant="outlined"
                    id="numberOfWeek"
                    name="numberOfWeek"
                    label="Numero de semana"
                    margin="normal"
                    value={formik.values.numberOfWeek}
                    onChange={formik.handleChange}
                    error={formik.touched.numberOfWeek && Boolean(formik.errors.numberOfWeek)}
                    helperText={formik.touched.numberOfWeek && formik.errors.numberOfWeek}
                />

                <Button type="submit" variant="contained" variant="outlined">Calcular horas</Button>


            </form>


            <HoursTable data={hours} />

            <Notification
                notify={notify}
                setNotify={setNotify}
            />

        </div>
    )

}

export default HoursForm