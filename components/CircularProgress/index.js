import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}))
export default function CircularUnderLoad() {
  return <CircularProgress disableShrink color="white" />
}
