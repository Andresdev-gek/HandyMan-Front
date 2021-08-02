import React from 'react'

import { Box, Grid } from '@material-ui/core'


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
                        <img src="../../dist/assets/images/technician-Hand-1.png" alt="Logo-content"></img>
                    </Box>
                </Grid>

            </Grid>
        </div>
    )
}

export default BoxContent