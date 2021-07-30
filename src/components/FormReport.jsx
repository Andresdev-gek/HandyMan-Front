import React, { useState } from 'react'
import './styles/FormReport.css'

import { useFormik } from 'formik';
import * as yup from 'yup'
import { TextField, FormHelperText, Button } from '@material-ui/core'
import Notification from './Notification';
import axios from 'axios';




const baseUrl = `http://localhost:8080/reports`;

const validationSchema = yup.object({
    technicianId: yup.number().typeError("Este campo debe ser de numeros").required("El ID del tecnico es requerido").positive().integer(),
    serviceId: yup.number().typeError("Este campo debe ser de numeros").required("El ID del servicio es requerido").positive().integer(),
    startDateTime: yup.date().typeError("Este campo debe ser una fecha en este formato yyyy-MM-dd HH:mm").required("Fecha y Hora de inicio es requerida"),
    endDateTime: yup.date().typeError("Este campo debe ser una fecha en este formato yyyy-MM-dd HH:mm").required("Fecha y Hora de fin es requerida")
})


const FormReport = () => {

    const [data, setData] = useState([])
    const [notify, setNotify] = useState({isOpen: false, message: "", type: ""})

    const formik = useFormik({
        initialValues: {
            technicianId: "",
            serviceId: "",
            startDateTime: "",
            endDateTime: ""
        },
        onSubmit: async (values) => {
            await axios.post(baseUrl, values)
                .then(response => {
                    setData(data.concat(response.data));
                    setNotify({isOpen: true, message: "Reporte creado correctamente", type: "success"})

                }).catch(error => {
                    console.log(error)
                    setNotify({isOpen: true, message: "Error al crear reporte", type: "warning"})
                })
        },
        validationSchema: validationSchema
    })


    return (
        <div className="FormReport">
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
                    id="serviceId"
                    name="serviceId"
                    label="Id del servicio"
                    margin="normal"
                    value={formik.values.serviceId}
                    onChange={formik.handleChange}
                    error={formik.touched.serviceId && Boolean(formik.errors.serviceId)}
                    helperText={formik.touched.serviceId && formik.errors.serviceId}
                />

                <TextField
                    variant="outlined"
                    id="startDateTime"
                    name="startDateTime"
                    label="fecha y hora de inicio"
                    margin="normal"
                    value={formik.values.startDateTime}
                    onChange={formik.handleChange}
                    error={formik.touched.startDateTime && Boolean(formik.errors.startDateTime)}
                    helperText={formik.touched.startDateTime && formik.errors.startDateTime}
                />
                <FormHelperText id="startDateTime-helper">(yyyy-MM-dd HH:mm   formato 24-horas)</FormHelperText>
                <TextField
                    variant="outlined"
                    id="endDateTime"
                    name="endDateTime"
                    label="fecha y hora de fin"
                    margin="normal"
                    value={formik.values.endDateTime}
                    onChange={formik.handleChange}
                    error={formik.touched.endDateTime && Boolean(formik.errors.endDateTime)}
                    helperText={formik.touched.endDateTime && formik.errors.endDateTime}
                />
                <FormHelperText margin="dense" id="endDateTime-helper">(yyyy-MM-dd HH:mm   formato 24-horas)</FormHelperText>
                <Button type="submit" variant="contained" variant="outlined">Enviar reporte</Button>
            </form>

            <Notification 
                notify={notify}
                setNotify={setNotify}
            />
        </div>
    )
}

export default FormReport