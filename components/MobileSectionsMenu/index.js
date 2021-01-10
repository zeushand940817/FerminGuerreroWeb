import { makeStyles } from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import MuiTreeItem from '@material-ui/lab/TreeItem'
import { withStyles } from '@material-ui/core/styles'

//Components
import Background from 'components/Background'
import Contact from 'components/Contact'
import PressMobile from 'components/PressMobile'
import AwardsMobile from 'components/AwardsMobile'
import ExhibitionsMobile from '@components/ExhibitionsMobile'

const useStyles = makeStyles({
  root: {
    height: 'auto',
    flexGrow: 1,
    maxWidth: 400,
    color: 'white',
  },
  label: {
    fontSize: '24px',
  },
})

const TreeItem1 = withStyles({
  root: {
    '&.Mui-selected > .MuiTreeItem-content': {
      fontStyle: 'italic',
      fontWeight: 'bold',
      display: 'flex',
      flexDirection: 'row',
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
      <TreeItem1
        nodeId="1"
        label="Background"
        classes={{ label: classes.label }}
      >
        <Background />
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
