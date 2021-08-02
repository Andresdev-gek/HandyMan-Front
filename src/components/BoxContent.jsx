import React from 'react'

import { Box, Grid } from '@material-ui/core'
import './styles/BoxContent.css'


const BoxContent = () => {

    return (
        <div>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}>

                <Grid item xs={5} >
                    <Box  >
                        <img className="mediana"src="https://image.flaticon.com/icons/png/512/1870/1870928.png" alt="Logo-content"></img>
                    </Box>
                </Grid>

            </Grid>
        </div>
    )
}

export default BoxContent