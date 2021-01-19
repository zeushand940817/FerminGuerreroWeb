import dynamic from 'next/dynamic'

//Styles
import { makeStyles } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'

//Icons
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

//Components
import TreeView from '@material-ui/lab/TreeView'
import MuiTreeItem from '@material-ui/lab/TreeItem'

//Dynamic imports
const About = dynamic(() => import('@components/About'))
const Contact = dynamic(() => import('@components/Contact'))
const PressMobile = dynamic(() => import('@components/PressMobile'))
const AwardsMobile = dynamic(() => import('@components/AwardsMobile'))
const ExhibitionsMobile = dynamic(() => import('@components/ExhibitionsMobile'))

const useStyles = makeStyles({
  root: {
    height: 'auto',
    flexGrow: 1,
    maxWidth: 400,
    color: 'white',
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  label: {
    fontSize: 20,
    paddingTop: 4,
    paddingBottom: 4,
    background: 'none',
  },
})

const TreeItem1 = withStyles({
  root: {
    '&.Mui-selected > .MuiTreeItem-content': {
      fontStyle: 'italic',
      fontWeight: 'bold',
      display: 'flex',
      flexDirection: 'row',
      fontSize: 20,
      background: 'none',
    },
  },
})(MuiTreeItem)

export default function MobileSectionsMenu() {
  const classes = useStyles()

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<RemoveIcon />}
      defaultExpandIcon={<AddIcon />}
    >
      <TreeItem1 nodeId="1" label="About" classes={{ label: classes.label }}>
        <About />
      </TreeItem1>
      <TreeItem1 nodeId="2" label="Contact" classes={{ label: classes.label }}>
        <Contact />
      </TreeItem1>
      <TreeItem1 nodeId="3" label="Awards" classes={{ label: classes.label }}>
        <AwardsMobile />
      </TreeItem1>
      <TreeItem1
        nodeId="4"
        label="Articles & papers"
        classes={{ label: classes.label }}
      >
        <PressMobile />
      </TreeItem1>
      <TreeItem1
        nodeId="5"
        label="Exhibitions"
        classes={{ label: classes.label }}
      >
        <ExhibitionsMobile />
      </TreeItem1>
    </TreeView>
  )
}
