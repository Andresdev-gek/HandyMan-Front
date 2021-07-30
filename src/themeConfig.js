import { createTheme } from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'
import red from '@material-ui/core/colors/red'

const theme = createTheme({
    palette: {
        primary: {
            main: teal[500]
        },
        secondary: {
            main: red[600]
        }
    }
})

export default theme