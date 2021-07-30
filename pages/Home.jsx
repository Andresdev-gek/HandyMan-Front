import React, { useState } from 'react'

import theme from '../src/themeConfig'
import { ThemeProvider } from '@material-ui/styles'
import Container from '../src/components/Container'



const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container />
        </ThemeProvider>
    )
}

export default Home