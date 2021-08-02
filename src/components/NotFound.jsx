import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'

const NotFound = () => {

    return (
        <div>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '70vh' }}>

                <Grid item xs={5} >
                    <Box  >
                        <img src="../../dist/assets/images/error-404.png" alt="404-not-found"></img>
                        <Typography variant="h2" >
                            Page not found 🤔
                        </Typography>
                    </Box>
                </Grid>

            </Grid>
        </div>
    )
}

export default NotFound